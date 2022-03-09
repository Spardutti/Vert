import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const athleteSlice = createSlice({
  name: "athlete",
  initialState,
  reducers: {
    setAthlete(state, { payload }) {
      state.firstName = payload.firstname;
      state.lastName = payload.lastname;
    },
  },
});

export const { setAthlete } = athleteSlice.actions;
export default athleteSlice.reducer;
