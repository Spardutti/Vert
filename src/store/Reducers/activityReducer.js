import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const activitySlice = createSlice({
  name: "latest",
  initialState,
  reducers: {
    setActivities(state, { payload }) {
      payload.forEach((activity) => {
        const {
          distance,
          name,
          start_date,
          total_elevation_gain,
          elapsed_time,
        } = activity;
        state.push({
          distance,
          name,
          start_date,
          total_elevation_gain,
          elapsed_time,
        });
      });
    },
  },
});

export const { setActivities } = activitySlice.actions;
export default activitySlice.reducer;
