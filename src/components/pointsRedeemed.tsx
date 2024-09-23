// src/components/PointsRedeemed.tsx

import { useState, useEffect } from "react";
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
} from "@mui/material";

interface CustomerRedeemed {
  id: number;
  name: string;
  pointsRedeemed: number;
}

export default function PointsRedeemed() {
  const [customers, setCustomers] = useState<CustomerRedeemed[]>([]);

  // Simulate fetching redeemed points data
  useEffect(() => {
    const fetchRedeemedPoints = async () => {
      // Simulated data (replace with API later)
      const redeemedData: CustomerRedeemed[] = [
        { id: 1, name: "Rachel Green", pointsRedeemed: 15 },
        { id: 2, name: "Ross Geller", pointsRedeemed: 20 },
        { id: 3, name: "Monica Geller", pointsRedeemed: 25 },
        { id: 4, name: "Chandler Bing", pointsRedeemed: 10 },
        { id: 5, name: "Joey Tribbiani", pointsRedeemed: 5 },
        { id: 6, name: "Phoebe Buffay", pointsRedeemed: 30 },
      ];

      setCustomers(redeemedData);
    };

    fetchRedeemedPoints();
  }, []);

  return (
    <Box sx={{ padding: 3, maxWidth: 800, margin: "0 auto" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#3f51b5",
          textAlign: "center",
          mb: 2,
        }}
      >
        Points Redeemed
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                Customer
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                Points Redeemed
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id} hover>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.pointsRedeemed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
