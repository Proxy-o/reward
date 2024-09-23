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
} from "@mui/material";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchUsers } from "../redux/actions/userActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CustomerPointsList() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

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
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((customer) => (
              <TableRow
                key={customer.id}
                hover
                sx={{
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                }}
              >
                <TableCell>{customer.username}</TableCell>
                <TableCell align="center">{customer.pointsToday}</TableCell>
                <TableCell align="center">{customer.pointsRedeemed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
