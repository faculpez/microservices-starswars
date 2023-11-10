const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  try {
    const getResponse = await Character.list();
    const characters = getResponse.data;
    response(res, 200, { characters });
  } catch (error) {
    console.error(error);
    response(res, 500, { error: "Internal Server Error" });
  }
};
