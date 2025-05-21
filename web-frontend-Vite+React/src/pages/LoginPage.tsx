// src/pages/LoginPage.tsx
"use client";
import { useEffect, useCallback, Suspense } from "react";
import {
  Button,
  Paper,
  Typography,
  Box,
  TextField,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { CustomLoader } from "../utilities/CustomLoader";
import { ePathVariables } from "../config/SupplierConfig";

interface FormValues {
  username: string;
}

const LoginPage = () => {
  const { login, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate(ePathVariables.ORDERS, { replace: true });
    }
  }, [navigate]);

  const onSubmit = useCallback(
    async (data: FormValues) => {
      await login(data.username);
      navigate(ePathVariables.ORDERS, { replace: true });
    },
    [login, navigate]
  );

  return (
    <Suspense fallback={<CustomLoader />}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 10 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Welcome to Smart Supplier Portal
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Username is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username?.message}
                InputProps={{
                  endAdornment: (
                    <Tooltip title="Use your company-assigned login">
                      <i
                        className="ri-information-line"
                        style={{ cursor: "pointer" }}
                      />
                    </Tooltip>
                  ),
                }}
              />
            )}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting || authLoading}
            startIcon={
              (isSubmitting || authLoading) && <CircularProgress size={20} />
            }
          >
            {isSubmitting || authLoading ? "Logging in…" : "Login"}
          </Button>
        </Box>
      </Paper>
    </Suspense>
  );
};

export default LoginPage;
