import axios from "axios";

const api = axios.create({
  baseURL: "https://modeloproxyapi.interfocus.com.br:4443",
});

export default api;
