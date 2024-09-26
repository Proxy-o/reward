// src/components/CustomerPointsList.tsx

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchUsers } from "../redux/actions/userActions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddTransactionModal from "./addTransaction";
import { User } from "../types/User";

export default function CustomerPointsList() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  const handleOpen = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <Box sx={{ padding: 3, maxWidth: "800px", margin: "0 auto" }}>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        align="center"
        marginBottom={4}
        sx={{ fontWeight: "bold", color: "#3f51b5" }}
      >
        Customers Points Earned Today
      </Typography>

      <TableContainer component={Paper} elevation={6}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                Customer
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  textAlign: "center",
                }}
              >
                Points Earned Today
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  textAlign: "center",
                }}
              >
                Points Redeemed
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  textAlign: "center",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((customer, index) => (
              <TableRow
                key={index}
                hover
                sx={{
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                }}
              >
                <TableCell>{customer.username}</TableCell>
                <TableCell align="center">{customer.totalPoints}</TableCell>
                <TableCell align="center">{customer.pointsRedeemed}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(customer)}
                  >
                    Add Transaction
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddTransactionModal
        open={open}
        handleClose={handleClose}
        selectedUser={selectedUser}
      />
    </Box>
  );
}
