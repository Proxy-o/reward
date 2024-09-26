import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";
import headers from "../types/header";

export default function AddCustomer() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email) {
      setError("All fields are required");
      return;
    }

    // post user to backend
    fetch(import.meta.env.VITE_BACKEND_URL + "customers", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        username,
        email,
      }),
    });

    dispatch(
      addUser({
        username,
        email,
        totalPoints: 0,
        pointsRedeemed: 0,
      })
    );

    // Clear the form after submission
    setUsername("");
    setEmail("");
    setError("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: 4,
        maxWidth: 400,
        margin: "0 auto",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Add New Customer
      </Typography>

      {error && (
        <Typography color="error" align="center" gutterBottom>
          {error}
        </Typography>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        sx={{ marginTop: 2 }}
      >
        Add User
      </Button>
    </Box>
  );
}
