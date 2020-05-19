import * as types from "../types";
import axios from "axios";

export const fetchMissions = () => async (dispatch) => {
  const launches = await axios.get("https://api.spacexdata.com/v3/launches");
  dispatch({
    type: types.GET_POSTS,
    payload: launches.data.reverse(),
  });
};
