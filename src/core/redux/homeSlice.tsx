import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData";

interface SliderState {
  slider: any;  
  socialMedia: any;  
}

const initialState: SliderState = {
  slider: null,
  socialMedia: null,
};

 type ApiResponse = any;

export const getSlider = createAsyncThunk<ApiResponse, void, { rejectValue: unknown }>(
  "home/getSlider",
  async (_, thunkAPI) => {
    try {
      const res = await useGetData("User");
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSocialMedia = createAsyncThunk<ApiResponse, void, { rejectValue: unknown }>(
  "home/getSocialMedia",
  async (_, thunkAPI) => {
    try {
      const res = await useGetData("socialMedia");
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const sliderSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSlider.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
      state.slider = action.payload;
    });

    builder.addCase(getSocialMedia.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
      state.socialMedia = action.payload;
    });
  },
});

export default sliderSlice.reducer;
