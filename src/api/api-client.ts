import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "api-key": "api-key",
  },
});

export { CanceledError };
