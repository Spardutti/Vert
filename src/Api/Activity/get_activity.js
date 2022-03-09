import axios from "axios";
import { useQuery } from "react-query";

/* GET USER ACTIVITY */
const getActivity = (token) => {
  return axios
    .get(
      `https://www.strava.com/api/v3/athlete/activities?access_token=${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .catch((err) => {
      return err;
    });
};

export const useGetActivity = (token) => {
  return useQuery(["activities", token], () => getActivity(token), {
    enabled: false,
  });
};
