// // src/pages/orders/new.tsx
// "use client";

// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   TextField,
//   Button,
//   Paper,
//   Typography,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import { useSnackbar } from "notistack";
// import { useOrders } from "../../../hooks/useOrders";
// import {
//   Order,
//   OrderInput,
//   orderInputSchema,
// } from "../../../models/orderModel";
// import { useNavigate } from "react-router-dom";

// export default function NewOrderPage() {
//   const { enqueueSnackbar } = useSnackbar();
//   const { createOrderMutation } = useOrders();
//   const navigate = useNavigate();

//   const {
//     control,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<OrderInput>({
//     resolver: zodResolver(orderInputSchema),
//     defaultValues: { supplierName: "", amount: 0 },
//   });

//   const onSubmit = async (data: OrderInput) => {
//     try {
//       await createOrderMutation.mutateAsync(data as Order);
//       enqueueSnackbar("Order created successfully!", { variant: "success" });
//       navigate("/orders");
//     } catch {
//       enqueueSnackbar("Failed to create order.", { variant: "error" });
//     }
//   };

//   return (
//     <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 4 }}>
//       <Typography variant="h5" component="h1" gutterBottom>
//         Create New Order
//       </Typography>

//       <Box
//         component="form"
//         onSubmit={handleSubmit(onSubmit)}
//         sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//       >
//         <Controller
//           name="s"
//           control={control}
//           render={({ field }) => (
//             <TextField
//               {...field}
//               label="Supplier"
//               error={!!errors.supplierName}
//               helperText={errors.supplierName?.message}
//               fullWidth
//             />
//           )}
//         />

//         <Controller
//           name="amount"
//           control={control}
//           render={({ field }) => (
//             <TextField
//               {...field}
//               type="number"
//               label="Amount"
//               onChange={(event) =>
//                 field.onChange(
//                   event.target.value ? Number(event.target.value) : 0
//                 )
//               }
//               error={!!errors.amount}
//               helperText={errors.amount?.message}
//               fullWidth
//             />
//           )}
//         />

//         <Box sx={{ position: "relative", width: "fit-content" }}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={isSubmitting}
//           >
//             Create Order
//           </Button>
//           {isSubmitting && (
//             <CircularProgress
//               size={24}
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 marginTop: "-12px",
//                 marginLeft: "-12px",
//               }}
//             />
//           )}
//         </Box>
//       </Box>
//     </Paper>
//   );
// }
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
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useSuppliers } from "../../../hooks/useSuppliers";
import { useOrders } from "../../../hooks/useOrders";
import { OrderInput, orderInputSchema } from "../../../models/orderModel";
import { Order, Supplier } from "../../../api";
// import { useEffect } from "react";

export default function NewOrderPage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {
    listSuppliersQuery: suppliers,
    isLoading: supLoading,
    getSuppliersQuery,
  } = useSuppliers();
  const { createOrderMutation } = useOrders();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderInput>({
    resolver: zodResolver(orderInputSchema),
  });

  const onSubmit = async (data: OrderInput) => {
    const supplierData = getSuppliersQuery(data.supplierId).data;

    const _data: Order = {
      totalAmount: data.totalAmount,
      supplier: supplierData,
      status: Order.status.PENDING,
    };

    console.log("🚀 ~ CreateOrderPage.tsx:154 ~ onSubmit ~ data:", _data);

    try {
      await createOrderMutation.mutateAsync(_data);
      enqueueSnackbar("Order created successfully!", { variant: "success" });
      navigate("/orders");
    } catch {
      enqueueSnackbar("Failed to create order.", { variant: "error" });
    }
  };

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
          name="supplierId"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete<Supplier>
              options={suppliers}
              getOptionLabel={(option) => option.name as string} // ← this line is crucial
              isOptionEqualToValue={(opt, val) => opt.id === val.id}
              value={suppliers.find((s) => s.id === value) || null}
              onChange={(_, newVal) => onChange(newVal?.id ?? 0)}
              loading={supLoading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Supplier"
                  error={!!errors.supplierId}
                  helperText={errors.supplierId?.message}
                  fullWidth
                />
              )}
              renderOption={(props, option) => (
                <li {...props} key={option.id} value={option.id}>
                  {option.name}
                </li>
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
              onChange={(event) => {
                field.onChange(
                  !event.target.value ? 0 : Number(event.target.value)
                );
              }}
              error={!!errors.totalAmount}
              helperText={errors.totalAmount?.message}
              fullWidth
            />
          )}
        />
        <Box sx={{ position: "relative", width: "fit-content" }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Create Order
          </Button>
          {isSubmitting && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                mt: "-12px",
                ml: "-12px",
              }}
            />
          )}
        </Box>
      </Box>
    </Paper>
  );
}
