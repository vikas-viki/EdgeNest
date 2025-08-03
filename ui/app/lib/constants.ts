import axios from "axios";

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
export const WS_URL = `${SERVER_URL}/private`;
export const WS_PUBLIC_URL = `${SERVER_URL}/public`;
export const SITE_URL = process.env.NEXT_PUBLIC_PROXY_SERVER;
export const REDIRECT_URI = process.env.NODE_ENV == "production" ? "https://edgenest.0xbuilder.in/auth" : "http://localhost:3000/auth";
export const api = axios.create({
    baseURL: SERVER_URL?.toString(),
    withCredentials: true
})