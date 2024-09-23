// src/components/PointsDashboard.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setPoints } from "../redux/slices/pointsSlice";
import { Box, Typography, Paper, Grid2 } from "@mui/material";

const PointsDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { todayPoints, last7DaysPoints, last30DaysPoints } = useSelector(
    (state: RootState) => state.points
  );

  useEffect(() => {
    const fetchPointsData = async () => {
      const pointsData = {
        todayPoints: 100, // Assume 100 points earned today
        last7DaysPoints: 500, // 500 points in the last 7 days
        last30DaysPoints: 2000, // 2000 points in the last 30 days
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
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
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
      </Grid2>
    </Box>
  );
};

export default PointsDashboard;
