import axios from "axios";

export const SERVER_URL = "http://localhost:9000";
export const WS_URL = "http://localhost:9001";
export const SITE_URL = ".0xbuilder.in";

export const api = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true
})