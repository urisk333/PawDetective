const express = require("express");
const router = express.Router();
const paws = require("./controllers/paws.controllers");

router.get("/paws", paws.getPaws);
router.post("/paws", paws.createPaws);
// router.put('/paws/:id/:dir', paws.votePaws);
// router.delete('/paws/:id', paws.deletePaws);

module.exports = router;
