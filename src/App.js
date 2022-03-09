import { useDispatch, useSelector } from "react-redux";
import { useRefreshToken } from "./Api/Token/refreshToken";
import Activities from "./Components/Activities/Activities";
import { setAccessToken } from "./store/Reducers/tokenReducer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Months from "./Components/Month/Months";
import { useEffect } from "react";
import { setActivities } from "./store/Reducers/activityReducer";
import { useGetActivity } from "./Api/Activity/get_activity";
import SingleMonth from "./Components/Month/SingleMonth";
import { useGetAthlete } from "./Api/User/get_user";
import { setAthlete } from "./store/Reducers/athleteReducer";
import Home from "./Components/Home/Home";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.access_token);

  /* MAKE REQUEST FOR TOKEN */
  const { data: access_token } = useRefreshToken();

  /* GET THE USER ACTIVITY FROM STRAVA */
  const { data, refetch } = useGetActivity(token);

  /* GET ATHLETE INFO */
  const { data: Athlete, refetch: getAthlete } = useGetAthlete(token);

  /* WAIT FOR TOKEN BEFORE FETCHING DATA */
  useEffect(() => {
    token && refetch();
    token && getAthlete();
  }, [token]);

  /* WHEN DATA IS FETCHED SEND IT TO THE STORE */
  useEffect(() => {
    if (data && Athlete) {
      dispatch(setActivities(data.data));
      dispatch(setAthlete(Athlete.data));
    }
  }, [data]);

  /* SET THE TOKEN ON THE STORE */
  if (access_token) {
    dispatch(setAccessToken(access_token.data.access_token));
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activities />} />
        <Route path="/monthly" element={<Months />} />
        <Route path="/month" element={<SingleMonth />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
