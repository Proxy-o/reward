// src/redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import pointsReducer from "./slices/pointsSlice";
import userReducer from "./slices/userSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Register the auth reducer
    points: pointsReducer, // Register the points reducer
    users: userReducer, // Register the users reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
