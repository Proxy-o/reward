// src/redux/slices/pointsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
interface PointsState {
  todayPoints: number;
  last7DaysPoints: number;
  last30DaysPoints: number;
}

const initialState: PointsState = {
  todayPoints: 0,
  last7DaysPoints: 0,
  last30DaysPoints: 0,
};

const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    setPoints: (state, action: PayloadAction<PointsState>) => {
      state.todayPoints = action.payload.todayPoints;
      state.last7DaysPoints = action.payload.last7DaysPoints;
      state.last30DaysPoints = action.payload.last30DaysPoints;
    },
  },
});

export const { setPoints } = pointsSlice.actions;

export default pointsSlice.reducer;
