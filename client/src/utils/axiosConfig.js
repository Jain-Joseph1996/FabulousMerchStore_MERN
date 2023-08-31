import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
});

export const base_url = "https://fms-deployment-service.onrender.com/api/";

const getTokenfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    authorization: `Bearer ${
      getTokenfromLocalStorage !== null ? getTokenfromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
