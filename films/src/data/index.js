const axios = require("axios");

const films = axios.get("http://database:8004/Film");

module.exports = {
  list: async () => {
    return await films;
  },
};
