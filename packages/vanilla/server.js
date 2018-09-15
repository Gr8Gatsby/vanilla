/* eslint-env node */
const path = require("path");
const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  let filePath = staticPath("index.html");
  res.sendFile(filePath);
});

app.use("/", express.static(staticPath()));

function staticPath(...args) {
  return path.resolve(__dirname, "public", ...args);
}

const server = app.listen(port, () => {
  console.log(`Server ready - http://localhost:${port}`);
});
