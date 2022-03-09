import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Reducers/tokenReducer";
import activityReducer from "./Reducers/activityReducer";
import athleteReducer from "./Reducers/athleteReducer";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    activity: activityReducer,
    athlete: athleteReducer,
  },
});
