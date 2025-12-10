import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const initialState = {
  loading: false,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        data
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        toast.success(action.payload.response.data.message);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading= false;
        console.log(rejected);
        
        toast.error(action.payload.response.data.message);
      });
  },
});

export default authSlice.reducer;
