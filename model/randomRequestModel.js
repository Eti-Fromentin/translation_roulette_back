const { KEY1, ENDPOINT } = require("../env");
const { v4: uuidv4 } = require("uuid");
const { default: axios } = require("axios");

const lang = [
  "af",
  "sq",
  "ar",
  "bg",
  "ca",
  "zh-Hans",
  "zh-Hant",
  "hr",
  "cs",
  "da",
  "nl",
  "en",
  "et",
  "fi",
  "de",
  "el",
  "gu",
  "ht",
  "he",
  "hi",
  "hu",
  "is",
  "id",
  "ga",
  "it",
  "ja",
  "km",
  "ko",
  "lv",
  "lt",
  "mk",
];

const postRandom = async (body) => {
  const randomLang = lang
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, body.number)
    .concat("fr");

  console.log(randomLang);
  let result = [];

  const results = await randomLang.reduce(async (memo, elt) => {
    await memo;
    const from = result.length === 0 ? "fr" : randomLang[result.length];
    const text = result.length === 0 ? body.text : result[result.length - 1][0].translations[0].text;
    console.log(result);
    console.log(from);
    console.log(text);
    return axios({
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
        toScript: "latn",
        from: from,
        to: elt,
      },
      data: [
        {
          text: text,
        },
      ],
      responseType: "json",
    })
      .then((response) => {
        const [ data ] = response.data;
        result.push([ data ]);
      })
      .catch((err) => console.error(err));
  });

  return Promise.all(result);

};
module.exports = { postRandom };
