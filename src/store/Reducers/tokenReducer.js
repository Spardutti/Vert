import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
  refresh_token: "ced3f1b446642c0d81a787f8364bf437908758e1",
};

export const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setAccessToken(state, { payload }) {
      state.access_token = payload;
    },
  },
});

export const { setAccessToken } = tokenSlice.actions;
export default tokenSlice.reducer;
