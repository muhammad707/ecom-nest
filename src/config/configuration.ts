export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 5000,
  database: {
    host: process.env.MONGODB_HOST,
    port: parseInt(process.env.MONGODB_PORT, 10) || 27017,
    name: process.env.DATABASE
  }
});
