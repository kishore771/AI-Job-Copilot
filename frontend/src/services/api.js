import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-job-copilot-backend-kgv8.onrender.com",
});

export default api;