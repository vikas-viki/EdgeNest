import axios from "axios";

export const SERVER_URL = process.env.SERVER_URL;
export const WS_URL = `${process.env.SERVER_URL}/private`;
export const WS_PUBLIC_URL = `${process.env.SERVER_URL}/public`;
export const SITE_URL = process.env.PROXY_SERVER;

console.log({SERVER_URL})

export const api = axios.create({
    baseURL: SERVER_URL?.toString(),
    withCredentials: true
})