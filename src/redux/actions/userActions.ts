// src/redux/actions/userActions.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/User";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://fakestoreapi.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data: User[] = await response.json();

  // Assign random points to each user
  return data.map((user) => ({
    ...user,
    pointsToday: Math.floor(Math.random() * 100),
    pointsRedeemed: Math.floor(Math.random() * 50),
  }));
});
