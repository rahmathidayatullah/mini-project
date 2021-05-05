import { config } from "../config";
import axios from "axios";

export async function getData(url, params) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  if (!token) return;

  return await axios.get(`${config.api_host}/${url}`, {
    params,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}

export async function postData(url, payload) {
  if (url === "auth/login" || url === "signup") {
    return await axios.post(`${config.api_host}/${url}`, payload);
  } else {
    let { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    if (!token) return;
    return await axios.post(`${config.api_host}/${url}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
  }
}

export async function putData(url, payload) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  if (!token) return;

  return await axios.put(`${config.api_host}/${url}`, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}
export async function patchData(url, payload) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  if (!token) return;

  return await axios.patch(`${config.api_host}/${url}`, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}

export async function deleteData(url) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  if (!token) return;

  return await axios.delete(`${config.api_host}/${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}
