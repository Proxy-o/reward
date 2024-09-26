// src/redux/actions/userActions.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/User";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://localhost:8080/customers", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data: User[] = await response.json();

  // Assign random points to each user
  return data;
});
