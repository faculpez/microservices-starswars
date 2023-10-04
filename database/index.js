const server = require("./src/server");
const { Character, Film, Planet } = require("./src/database");

const PORT = process.env.PORT || 8004;

Character.list().then((res) => console.log("CHARACTER", res[0]));
Character.get("4").then((res) => console.log("CHARACTERID", res));

Film.list().then((res) => console.log("FILM", res[0]));
Film.get("4").then((res) => console.log("FILMID", res));

Planet.list().then((res) => console.log("PLANET", res[0]));
Planet.get(4).then((res) => console.log("PLANETID", res));

server.listen(PORT, () => {
  console.log(`DB is running on port ${PORT}`);
});
