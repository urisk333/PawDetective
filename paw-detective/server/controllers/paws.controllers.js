const Paws = require("../models/paws.models");

const getPaws = async (req, res) => {
  try {
    const paws = await Paws.find();
    res.status(200);
    res.send(paws);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createPaws = async (req, res) => {
  try {
    const {
      lostOrFound,
      picture,
      animal,
      description,
      location,
      lat,
      long,
      email,
    } = req.body;
    const paws = await Paws.create({
      lostOrFound,
      picture,
      animal,
      description,
      location,
      lat,
      long,
      email,
    });
    res.status(201);
    res.send(paws);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deletePaws = async (req, res) => {
  try {
    await Paws.deleteOne({ id: req.params.id });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getPaws,
  createPaws,
  deletePaws,
};
