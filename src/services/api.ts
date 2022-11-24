import axios from "axios";

export const apiCore = axios.create({
  timeout: 1500, // 1.5 segundos
  baseURL: `${process.env.REACT_APP_API_CORE}`,
});
