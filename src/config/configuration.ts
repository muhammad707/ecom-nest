export default () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  database: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10) || 27017
  }
});