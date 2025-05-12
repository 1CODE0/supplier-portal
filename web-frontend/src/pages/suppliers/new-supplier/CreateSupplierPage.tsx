// src/pages/orders/new.tsx

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Paper,
  Typography,
  Box,
  CircularProgress,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCreateSupplier } from "../../../hooks/useSuppliers";
import customToast from "../../../utilities/customToast";
import {
  SupplierInput,
  supplierInputSchema,
} from "../../../models/supplierModel";
import { Supplier } from "../../../api";

export default function CreateSupplierPage() {
  const navigate = useNavigate();
  const { createSupplier, isLoading: isCreating } = useCreateSupplier();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SupplierInput>({
    resolver: zodResolver(supplierInputSchema),
  });

  const onSubmit = async (data: SupplierInput) => {
    const _data: Supplier = {
      name: data.supplierName,
      address: data.address,
      ...data,
    };
    try {
      await createSupplier(_data);
      navigate("/suppliers");
    } catch {
      customToast("error", "Failed to create order.");
    }
  };

  const busy = isSubmitting || isCreating;

  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New Supplier
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Controller
          name="supplierName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name "
              error={!!errors.supplierName}
              helperText={errors.supplierName?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone "
              error={!!errors.phone}
              helperText={errors.phone?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address"
              type="text"
              error={!!errors.address}
              helperText={errors.address?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="contactEmail"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email "
              type="email"
              error={!!errors.contactEmail}
              helperText={errors.contactEmail?.message}
              fullWidth
            />
          )}
        />

        <Box sx={{ position: "relative", width: "fit-content", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            disabled={busy}
            startIcon={busy && <CircularProgress size={20} />}
          >
            {busy ? "Creating Supplier…" : "Create Supplier"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
