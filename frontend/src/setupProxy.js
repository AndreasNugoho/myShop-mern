require('dotenv').config();
const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = process.env.PORT;

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: `http://localhost:5000`, 
            changeOrigin: true,
        })
    );
};
