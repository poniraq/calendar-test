const host = process.env.REDIS_HOST;
const port = parseInt(process.env.REDIS_PORT);
const pswd = process.env.REDIS_PSWD;

module.exports = {
  host: host,
  port: port,
  pass: pswd
};
