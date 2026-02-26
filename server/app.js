const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  }),
);

const PORT = 8080;

app.use((req, res) => {
  res.status(404).send({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
