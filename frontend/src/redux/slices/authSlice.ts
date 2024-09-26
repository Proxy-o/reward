
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  username: string | null;
}

const initialState: AuthState = {
  username: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload; // Store the username
    },
    logout: (state) => {
      state.username = null; // Clear the username on logout
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
