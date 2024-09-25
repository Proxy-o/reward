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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchUsers } from "../redux/actions/userActions";

export default function TextPromotion() {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const handleSendPromotion = () => {
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
          {users.map((user, index) => (
            <MenuItem key={index} value={user.username}>
              {user.username}
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
