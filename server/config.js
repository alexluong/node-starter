const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const config  = {};
config.PORT   = 8000;
config.DB_URI = process.env.DB_URI;
config.SECRET = process.env.SECRET;

module.exports = config;