const { postRandom } = require('../model/randomRequestModel');

const reqRandom = async (req, res) => {
    const body = req.body;
    const data = await postRandom(body);
    console.table(data[0].translations);
    res.status(200).send(data);
}

module.exports = { reqRandom };