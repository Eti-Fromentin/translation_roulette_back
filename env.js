require("dotenv").config();

const SERVER_PORT = process.env.SERVER_PORT;
const KEY1 = process.env.KEY1;
const KEY2 = process.env.KEY2;
const ENDPOINT = process.env.ENDPOINT

module.exports = {
  SERVER_PORT,
  KEY1,
  KEY2,
  ENDPOINT
};
