import axios from "axios";
import { AuthModel } from "../models/AuthModel";
import { UserModel } from "../models/UserModel";
import store from "../../../../setup/redux/Store";

export const LOGIN_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_GATEWAY_PATCH}/login`;
export const LOGOUT_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_GATEWAY_PATCH}/logout`;
export const REGISTER_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_GATEWAY_PATCH}/signup`;
export const REQUEST_PASSWORD_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_GATEWAY_PATCH}/forgetpass`;
export const CHANGE_PASSWORD_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_GATEWAY_PATCH}/changepass`;

// Server should return AuthModel
export function login(userName: string, password: string) {
  return axios.post(
    LOGIN_URL,
    { Account: userName, Password: password },
    // { headers: { Authorization: `${CONFIG.TOKEN}` } }
  );
}

export function logout(accessToken: string) {
  return axios.delete(
    LOGOUT_URL
    //{ token: accessToken },
    //{ headers: { Authorization: `Bearer ${CONFIG.GETWAY_TOKEN}` } }
  );
}


// Server should return AuthModel
export const register = (
  token: string,
  info: object
) => {
  return axios.post<any>(
    REGISTER_URL,
    {
      token,
      info
    },
    // { headers: { Authorization: `Bearer ${CONFIG.GETWAY_TOKEN}` } }
  );
};


// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, { email });
}
export function changePassword(
  email: string,
  password: string,
  confirmPassword: string,
  token: string
) {
  return axios.post<{ result: boolean }>(CHANGE_PASSWORD_URL, {
    email,
    password,
    confirmPassword,
    token,
  });
}
