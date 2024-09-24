// src/components/PointsDashboard.tsx

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setPoints } from "../redux/slices/pointsSlice";
import { Box, Typography, Paper, Grid2 } from "@mui/material";
import WelcomeCard from "./welcomCard";

export default function PointsSection() {
  const dispatch = useDispatch();
  const { todayPoints, last7DaysPoints, last30DaysPoints, redeemedPoints } =
    useSelector((state: RootState) => state.points);

  useEffect(() => {
    const fetchPointsData = async () => {
      const pointsData = {
        todayPoints: 100, // Assume 100 points earned today
        last7DaysPoints: 300, // 500 points in the last 7 days
        last30DaysPoints: 500, // 2000 points in the last 30 days
        redeemedPoints: 900, // 1000 points redeemed
      };

      dispatch(setPoints(pointsData));
    };

    fetchPointsData();
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: 3,
        margin: "0 auto",
      }}
    >
      <WelcomeCard />
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", color: "#3f51b5" }}
      >
        Points Summary
      </Typography>

      <Grid2 container spacing={4} justifyContent="center">
        <Grid2>
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              transition: "0.3s",
              borderRadius: "20px",

              "&:hover": {
                backgroundColor: "#e3f2fd",
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography color="primary" sx={{ fontWeight: "medium" }}>
              Total Points Today
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#2e7d32", fontWeight: "bold" }}
            >
              {todayPoints}
            </Typography>
          </Paper>
        </Grid2>

        {/* Last 7 Days Points */}
        <Grid2>
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              transition: "0.3s",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#fce4ec",
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography color="secondary">Points Last 7 Days</Typography>
            <Typography
              variant="h3"
              sx={{ color: "#d32f2f", fontWeight: "bold" }}
            >
              {last7DaysPoints}
            </Typography>
          </Paper>
        </Grid2>

        {/* Last 30 Days Points */}
        <Grid2>
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              transition: "0.3s",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#f3e5f5",
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography sx={{ color: "#8e24aa", fontWeight: "medium" }}>
              Points Last 30 Days
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#7b1fa2", fontWeight: "bold" }}
            >
              {last30DaysPoints}
            </Typography>
          </Paper>
        </Grid2>
        <Grid2>
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              transition: "0.3s",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#f0f4c3",
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography sx={{ color: "#3e2723", fontWeight: "medium" }}>
              Redeemed Points
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#8d6e63", fontWeight: "bold" }}
            >
              {redeemedPoints}
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
}
