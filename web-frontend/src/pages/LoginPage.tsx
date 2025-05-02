// src/pages/LoginPage.tsx
"use client";
import { Button, Paper, Typography, Box, TextField } from "@mui/material";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const user = localStorage.getItem("user");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleLogin = () => {
    setSubmitted(true);
    if (!username.trim()) {
      setSubmitted(false);
      return;
    }
    login(username);
    navigate("/orders");
  };

  useEffect(() => {
    if ((username && submitted) || user) navigate("/orders");
  }, [username, submitted]);

  return user || submitted ? (
    <>{"Loading..."}</>
  ) : (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Welcome to Smart Supplier Portal
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Paper>
  );
};
