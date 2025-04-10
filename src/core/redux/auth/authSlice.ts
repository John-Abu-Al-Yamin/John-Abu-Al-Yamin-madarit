import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../Api/axiosInstance";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

// =================== Types ===================

interface LoginPayload {
  phoneEmail: string;
  password: string;
}

interface SignupPayload {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  address: string;
  nationality: string;
  ipAddress: string;
  phone: string;
  userType: string;
}

interface User {
  data: any;
  id: number;
  name: string;
  email: string;
  access_token?: string;
 }

interface AuthState {
  user: User | null;
  currentUser: User | null;
  userProfile: any;
  userChangePassword: any;
}

const initialState: AuthState = {
  user: null,
  currentUser: null,
  userProfile: null,
  userChangePassword: null,
};

// ================ Login ===============
export const loginUser = createAsyncThunk<User, LoginPayload, { rejectValue: any }>(
  "user/loginUser",
  async (data, thunkAPI) => {
    try {
      const res = await axiosInstance.post("/Auth/Login", data);
      return res.data.data as User;
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

// ================ Signup ===============
export const signupUser = createAsyncThunk<User, SignupPayload, { rejectValue: any }>(
  "user/signupUser",
  async (data, thunkAPI) => {
    try {
      const res = await axiosInstance.post("/Auth/Register", data);
      return res.data.data as User;
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

// =================== Slice ===================
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      // Handling rejected action
      if (action.payload) {
        // Handle error message for failed login
        toast.error(action.payload?.message || 'Login failed, try again');
      }
    });


    builder.addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    });
    
  },
});

export default authSlice.reducer;
