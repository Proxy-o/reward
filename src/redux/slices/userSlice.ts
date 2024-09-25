// src/redux/slices/userSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/userActions";
import { User } from "../../types/User";

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Add reducers here
    setPointsForUser: (state, action) => {
      const { id, points } = action.payload;
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user.pointsToday += points;
      }
    },
    addUser: (state, action) => {
      console.log("Adding user", action.payload);
      state.users.push({ id: state.users.length + 1, ...action.payload });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setPointsForUser, addUser } = userSlice.actions;

export default userSlice.reducer;
