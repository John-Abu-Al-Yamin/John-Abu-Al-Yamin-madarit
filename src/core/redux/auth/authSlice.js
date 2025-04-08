import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
  
const initialState = {
  user: null,
  currentUser: null,
  userProfile: null,
  userChangePassword: null,
};

// ================ Login ===============
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, thunkAPI) => {
    try {
      const res = await useInsertData("User/Auth/Login", data);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

// ================ Signup ===============
export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (data, thunkAPI) => {
    try {
      const res = await useInsertData("User/Auth/Register", data);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

 
 

 

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.fulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );

    builder.addCase(
      signupUser.fulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );

     
    

     
  },
});

export default authSlice.reducer;