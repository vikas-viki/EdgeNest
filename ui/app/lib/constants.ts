import axios from "axios";

export const SERVER_URL = "http://localhost:9000";
export const WS_URL = "http://localhost:9000/private";
export const WS_PUBLIC_URL = "http://localhost:9000/public";
export const SITE_URL = ".localhost:4000";

export const api = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true
})