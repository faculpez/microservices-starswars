const axios = require("axios");

const characters = axios.get("http://database:8004/Character");

module.exports = {
  list: async () => {
    return characters;
  },
};
