import axios from "axios";
import { useQuery } from "react-query";

const url = "https://www.strava.com/oauth";

/* REFRESH TOKEN  AND GET TOKEN*/
const refreshToken = () => {
  /* WHEN DEPLOYED I WOULD USE ENV */
  // const client_id = process.env.REACT_APP_CLIENT_ID;
  // const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  // const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;
  // const grant_type = process.env.REACT_APP_GRANT_TYPE;

  const client_id = 79201;
  const client_secret = "eb3eb055893a4ad85d4e8588868d0fb077182fc1";
  const grant_type = "refresh_token";
  const refresh_token = "42cf236d57fd20589d3ccf88de54b4769ff833b6";

  return axios
    .post(
      `${url}/token?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=${grant_type}`
    )
    .catch((err) => {
      return err;
    });
};

export const useRefreshToken = () => {
  return useQuery("refresh", refreshToken);
};
