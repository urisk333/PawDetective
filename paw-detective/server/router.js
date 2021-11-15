const express = require("express");
const router = express.Router();
const paws = require("./controllers/paws.controllers");
const { checkJwt } = require("./authz/check-jwt");

router.get("/paws", paws.getPaws);
router.post("/paws", checkJwt, paws.createPaws);
router.delete("/paws/:id", paws.deletePaws);

module.exports = router;
