const { KEY1, ENDPOINT } = require("../env");
const { v4: uuidv4 } = require("uuid");
const { default: axios } = require("axios");

const postRandom = async (body) => {
  const lang = [
    "af",
    "sq",
    "ar",
    "hy",
    "bg",
    "ca",
    "zh-Hans",
    "zh-Hant",
    "hr",
    "cs",
    "da",
    "dv",
    "nl",
    "en",
    "et",
    "fi",
    "fr-ca",
    "ka",
    "de",
    "el",
    "gu",
    "ht",
    "he",
    "hi",
    "hu",
    "is",
    "id",
    "iu",
    "ga",
    "it",
    "ja",
    "km",
    "ko",
    "ku",
    "lo",
    "lv",
    "lt",
    "mk",
  ];
  const result = await axios({
    baseURL: ENDPOINT,
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": KEY1,
      "Ocp-Apim-Subscription-Region": "westeurope",
      "Content-type": "application/json",
      "X-ClientTraceId": uuidv4().toString(),
    },
    params: {
      "api-version": "3.0",
    //   'from': 'en',
      'to': body.to,
    },
    data: [
      {
        text: body.text,
      },
    ],
    responseType: "json",
  });
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data, null, 4));
  //   });
  return result.data;
};

module.exports = { postRandom };
