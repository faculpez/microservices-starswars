const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  try {
    const getResponse = await Planet.list();
    const planets = getResponse.data;

    response(res, 200, planets);
  } catch (error) {
    console.error(error);
    response(res, 500, { error: "Internal Server Error" });
  }
};
