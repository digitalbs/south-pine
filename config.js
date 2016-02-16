module.exports = {
  module: '*',
  serverHost: '0.0.0.0',
  serverPort: '8400',
  database: {
    host: '0.0.0.0',
    port: '27017',
    name: 'south-pine'
  },
  environment: process.env.NODE_ENV
};
