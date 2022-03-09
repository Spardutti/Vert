import axios from "axios";
import { useQuery } from "react-query";

/* GET USER ACTIVITY */
const getAthlete = (token) => {
  return axios
    .get(`https://www.strava.com/api/v3/athlete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err;
    });
};

export const useGetAthlete = (token) => {
  return useQuery(["athlete", token], () => getAthlete(token), {
    enabled: false,
  });
};
