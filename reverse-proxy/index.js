const express  = require("express");
const httpProxy = require("http-proxy");
const app = express();

const BASE_PATH = `https://edgenest-output.s3.ap-south-1.amazonaws.com/__outputs`;
const proxy = httpProxy.createProxy();

app.use((req, res) => {
    const hostname = req.hostname;
    const subdomain = hostname.split(".")[0];

    console.log(req.hostname);
    const resolveTo = `${BASE_PATH}/${subdomain}`;

    return proxy.web(req, res, {target: resolveTo, changeOrigin: true});
})

proxy.on('proxyReq', (proxyReq, req, res) => {
    const url = req.url;
    if(url == "/"){
        proxyReq.path += "index.html";
    }
    return proxyReq;
});

app.listen(4000, () => {
    console.log("Reverse Proxy running on port 4000!");
});