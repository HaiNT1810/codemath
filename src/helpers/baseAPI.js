import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;
export const API_PATCH = process.env.REACT_APP_API_PATCH;
export const GATEWAY_PATCH = process.env.REACT_APP_GATEWAY_PATCH;
export const GATEWAY_TOKEN = process.env.REACT_APP_GATEWAY_TOKEN;

export const HOST_API = `${API_URL}/api/v1/`;
export const FILE_URL = `${process.env.REACT_APP_RESOURCES_URL}/`;

export const requestGET = async (URL, useGateway = true) => {
  try {
    const res = await axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${API_URL}/${useGateway&&GATEWAY_PATCH||API_PATCH}/${URL}`,
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const requestGETTmp = async (URL, useGateway = true) => {
  try {
    const res = await axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `https://kcn.hanhchinhcong.net/${useGateway&&GATEWAY_PATCH||API_PATCH}/${URL}`,
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const requestPOST = async (URL, data, useGateway = true) => {
  try {
    const res = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${API_URL}/${useGateway?GATEWAY_PATCH:API_PATCH}/${URL}`,
      data,
    });

    return res.data;
  } catch (error) {
    return null;
  }
};
export const requestPUT = async (URL, data) => {
  try {
    const res = await axios({
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${API_URL}/${GATEWAY_PATCH}/${URL}`,
      data,
    });

    return res.data;
  } catch (error) {
    return null;
  }
};

export const requestDELETE = async (URL) => {
  try {
    const res = await axios({
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${API_URL}/${GATEWAY_PATCH}/${URL}`,
    });

    return res.data;
  } catch (error) {
    return null;
  }
};
