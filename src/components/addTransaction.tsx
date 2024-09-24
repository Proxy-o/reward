// src/components/AddTransactionModal.tsx
import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { User } from "../types/User";
import headers from "../types/header";
import { useAppDispatch } from "../redux/store";
import { setPointsForUser } from "../redux/slices/userSlice";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface AddTransactionModalProps {
  open: boolean;
  handleClose: () => void;
  selectedUser: User | null;
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  open,
  handleClose,
  selectedUser,
}) => {
  const [transactionAmount, setTransactionAmount] = useState<number | null>(
    null
  );

  const dispatch = useAppDispatch();

  const handleAddTransaction = async () => {
    // Add transaction logic here
    fetch(import.meta.env.VITE_BACKEND_URL + "transactions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        id: selectedUser?.id,
        points: transactionAmount,
      }),
    });
    if (transactionAmount !== null) {
      setTransactionAmount(null);
      handleClose();
    }
    // set points for user
    dispatch(
      setPointsForUser({ id: selectedUser?.id, points: transactionAmount })
    );
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-transaction-modal"
      aria-describedby="modal-to-add-transaction-for-user"
    >
      <Box sx={modalStyle}>
        <Typography id="add-transaction-modal" variant="h6" component="h2">
          Add Transaction for {selectedUser?.username}
        </Typography>
        <TextField
          label="Transaction Amount ($)"
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          type="number"
          value={transactionAmount || ""}
          onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
        />
        <Button
          onClick={handleAddTransaction}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTransactionModal;
