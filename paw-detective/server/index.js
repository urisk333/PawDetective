const PORT = 3005;

const express = require("express");
const app = express();

const cors = require("cors");
const router = require("./router");
const db = require("./models");

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await db;
    app.listen(PORT, () => {
      console.log("server running on port" + PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();
