const axios = require("axios");

const planets = axios.get("http://database:8004/Planet");

module.exports = {
  list: async () => {
    return planets;
  },
};
