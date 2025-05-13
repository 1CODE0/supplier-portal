// src/pages/orders/new.tsx

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Autocomplete,
  TextField,
  MenuItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { OrderInput, orderInputSchema } from "../../../models/orderModel";
import { Order, Supplier } from "../../../api";
import customToast from "../../../utilities/customToast";
import { useSupplierList } from "../../../hooks/useSuppliers";
import { useOrders } from "../../../hooks/useOrders";
import { useEffect } from "react";

export function getEnumKeyByValue<T extends { [key: string]: string | number }>(
  enumObj: T,
  value: T[keyof T]
) {
  return (Object.keys(enumObj) as Array<keyof T>).find(
    (key) => enumObj[key] === value
  );
}

export default function NewOrderPage() {
  const { id } = useParams<{ id?: string }>();
  const { suppliers, isLoading: isSuppliersLoading } = useSupplierList();
  const { create, fetchOne: fetchOrder, update } = useOrders();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OrderInput>({
    resolver: zodResolver(orderInputSchema),
    defaultValues: {
      description: "",
      supplierId: "",
      totalAmount: 0,
      status: Order.status.PENDING,
    },
  });

  useEffect(() => {
    if (id) {
      console.log("🚀 ~ CreateOrderPage.tsx:50 ~ useEffect ~ id:", id);
      fetchOrder(id)
        .then((data) => {
          reset({
            supplierId: data.supplier?.id as string,
            totalAmount: data.totalAmount,
            description: data.description,
          });
        })
        .catch((err) => {
          customToast("error", err);
        });
    }
  }, [id]);

  const onSubmit = (data: OrderInput) => {
    const payload = {
      totalAmount: data.totalAmount,
      supplierId: data.supplierId,
      status: data.status
        ? (getEnumKeyByValue(
            Order.status,
            data.status as Order.status
          ) as Order.status)
        : Order.status.PENDING,
      description: data.description,
    };

    if (id) update.mutate({ id, data: payload });
    else create.mutate(payload);
  };

  const busy = isSubmitting || create.isLoading;

  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {id ? "Update" : "Create"} New Order
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Controller
          name="supplierId"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete<Supplier>
              options={suppliers}
              getOptionLabel={(opt) => opt.name as string}
              isOptionEqualToValue={(opt, val) => opt.id === val.id}
              value={suppliers.find((s) => s.id === value) || null}
              onChange={(_, newVal) => onChange(newVal?.id ?? "")}
              loading={isSuppliersLoading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Supplier"
                  error={!!errors.supplierId}
                  helperText={errors.supplierId?.message}
                  fullWidth
                />
              )}
            />
          )}
        />

        <Controller
          name="totalAmount"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              label="Amount"
              onChange={(e) =>
                field.onChange(e.target.value ? +e.target.value : 0)
              }
              error={!!errors.totalAmount}
              helperText={errors.totalAmount?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
            />
          )}
        />

        {id ? (
          <Controller
            name="status"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                select
                label="Status"
                fullWidth
                error={!!error}
                helperText={error?.message}
              >
                {Object.values(Order.status).map((status) => (
                  <MenuItem key={status} value={status}>
                    {status.charAt(0) + status.slice(1).toLowerCase()}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        ) : null}

        <Box sx={{ position: "relative", width: "fit-content", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            disabled={busy}
            startIcon={busy && <CircularProgress size={20} />}
          >
            {busy
              ? (id ? "Updating" : "Creating") + " Order…"
              : (id ? "Update" : "Create") + " Order"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
