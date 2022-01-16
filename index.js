const express = require("express");
const cors = require('cors');
// const { default: axios } = require("axios");
// const { v4: uuidv4 } = require("uuid");
const { setupRoutes } = require('./router');

const { SERVER_PORT, KEY1, KEY2, ENDPOINT } = require("./env");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);


// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
// const location = "westeurope";
// const lang = "it";

// axios({
//   baseURL: ENDPOINT,
//   url: "/translate",
//   method: "post",
//   headers: {
//     "Ocp-Apim-Subscription-Key": KEY1,
//     "Ocp-Apim-Subscription-Region": location,
//     "Content-type": "application/json",
//     "X-ClientTraceId": uuidv4().toString(),
//   },
//   params: {
//     "api-version": "3.0",
//     to: lang,
//   },
//   data: [
//     {
//       text: "je veux baiser!",
//     },
//   ],
//   responseType: "json",
// }).then(function (response) {
//   console.log(JSON.stringify(response.data, null, 4));
// });


app.listen(SERVER_PORT, () => {
    console.log(`server listening on : ${SERVER_PORT}`);
  });