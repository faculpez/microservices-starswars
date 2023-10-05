const server = require("./src/server");

const PORT = process.env.PORT || 8004;

server.listen(PORT, () => {
  console.log(`DB is running on port ${PORT}`);
});
