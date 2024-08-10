const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://4.145.89.69/',
      changeOrigin: true,
      secure: false, // This bypasses SSL certificate validation
    })
  );
};
