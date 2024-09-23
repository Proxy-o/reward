// src/components/TextPromotion.tsx

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function TextPromotion() {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [message, setMessage] = useState("");

  // Sample list of customers (this can be dynamically loaded later)
  const customers = [
    "Rachel Green",
    "Ross Geller",
    "Monica Geller",
    "Chandler Bing",
    "Joey Tribbiani",
    "Phoebe Buffay",
  ];

  const handleSendPromotion = () => {
    // Simulate sending a promotion (UI Only)
    alert(`Promotion sent to ${selectedCustomer} with message: "${message}"`);
    setMessage("");
  };

  return (
    <Box
      sx={{ padding: 3, maxWidth: 600, margin: "0 auto", textAlign: "center" }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#1e88e5", mb: 2 }}
      >
        Send Promotion to Customers
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Choose Customer</InputLabel>
        <Select
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
          label="Choose Customer"
        >
          {customers.map((customer, index) => (
            <MenuItem key={index} value={customer}>
              {customer}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Promotion Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSendPromotion}
        disabled={!selectedCustomer || !message}
      >
        Send Promotion
      </Button>
    </Box>
  );
}
