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
    const { lostOrFound, picture, animal, description, location, lat, long } =
      req.body;
    const paws = await Paws.create({
      lostOrFound,
      picture,
      animal,
      description,
      location,
      lat,
      long,
    });
    res.status(201);
    res.send(paws);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

// const voteTopic = async (req, res) => {
//   try {
//     const { id, dir } = req.params;
//     const topic = await Topic.findByIdAndUpdate(
//       {
//         _id: id,
//       },
//       { $inc: { score: dir === "up" ? 1 : -1 } },
//       { new: true }
//     );
//     res.send(topic);
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//   }
// };

// const deleteTopic = async (req, res) => {
//   try {
//     await Topic.deleteOne({ id: req.params.id });
//     res.sendStatus(204);
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//   }
// };

module.exports = {
  getPaws,
  createPaws,
};
// module.exports = {
//   getTopics,
//   createTopic,
//   voteTopic,
//   deleteTopic,
// };
