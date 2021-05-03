import axios from "axios";

import { config } from "../config";

export async function login(email, password) {
  return await axios.post(`${config.api_host}/auth/login`, { email, password });
}
