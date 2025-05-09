import axios from "axios";

const accessToken = "<YOUR_ACCESS_TOKEN>"; // Replace with your actual token

export const axiosInstance = axios.create({
  baseURL: "http://20.244.56.144/evaluation-service",
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});