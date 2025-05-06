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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OrderInput, orderInputSchema } from "../../../models/orderModel";
import { Order, Supplier } from "../../../api";
import { useCreateOrder } from "../../../hooks/useOrders";
import {
  useListSuppliers,
  useSupplierActions,
} from "../../../hooks/useSuppliers";
import customToast from "../../../utilities/customToast";

export default function NewOrderPage() {
  const navigate = useNavigate();

  const { suppliers, isLoading: isSuppliersLoading } = useListSuppliers();

  const { fetchSupplier } = useSupplierActions();

  const { createOrder, isLoading: isCreating } = useCreateOrder();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderInput>({
    resolver: zodResolver(orderInputSchema),
  });

  const onSubmit = async (data: OrderInput) => {
    try {
      const supplierData = await fetchSupplier(data.supplier);

      const payload = {
        totalAmount: data.totalAmount,
        supplier: supplierData,
        status: Order.status.PENDING,
        description: data.description,
      };

      await createOrder(payload);
      navigate("/orders");
    } catch {
      customToast("error", "Failed to create order.");
    }
  };

  const busy = isSubmitting || isCreating;

  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New Order
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Controller
          name="supplier"
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
                  error={!!errors.supplier}
                  helperText={errors.supplier?.message}
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

        <Box sx={{ position: "relative", width: "fit-content", mt: 2 }}>
          <Button type="submit" variant="contained" disabled={busy}>
            Create Order
          </Button>
          {busy && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </Box>
      </Box>
    </Paper>
  );
}
