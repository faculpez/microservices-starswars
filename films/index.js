const server = require("./src/server");

const PORT = process.env.PORT || 8002;

server.listen(PORT, () => {
  console.log(`Films is running on port ${PORT}`);
});
