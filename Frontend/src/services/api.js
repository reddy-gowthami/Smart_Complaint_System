import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-complaint-system-2-oyq9.onrender.com",
});

export default API;