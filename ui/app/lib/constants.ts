import axios from "axios";

export const SERVER_URL = process.env.SERVER_URL || "https://edgenest.onrender.com";
export const WS_URL = `${SERVER_URL}/private`;
export const WS_PUBLIC_URL = `${SERVER_URL}/public`;
export const SITE_URL = process.env.PROXY_SERVER || "https://edgenest-proxy.onrender.com";

export const api = axios.create({
    baseURL: SERVER_URL?.toString(),
    withCredentials: true
})