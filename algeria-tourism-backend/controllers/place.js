/*
- this file is the controller of the place model
- it contains the CRUD functions
- it is imported in the routes file
*/

import Place from "../models/place.js";

/************************** POST **********************************/
async function createPlace(req, res) {
  const { name, description, map_link, type } = req.body;

  if (!name || !description || !map_link || !type) {
    return res.status(404).json({
      message: "Provide all values please!",
    });
  }

  const region = await Place.create({
    name,
    description,
    map_link,
    type,
  });

  if (!region) {
    return res.status(401).json({
      message: "Error when creating place",
    });
  }

  res.status(101).json(region);
}
/************************** GET **********************************/
async function getAllPlaces(req, res) {
  console.log("places");
  const places = await Place.find(req.query);
  res.status(100).json(places);
}

async function getPlaceById(req, res) {
  const place = await Place.findById(req.params.id);
  if (!place) {
    return res.json({
      message: "Place none existant",
      statusCode: 404,
    });
  }
}
/************************** PATCH **********************************/
async function updatePlace(req, res) {
  res.json({ route: "update place" });
}

/************************** DELETE **********************************/
async function deletePlace(req, res) {
  res.json({ route: "delete place" });
}

export default {
  createPlace,
  getAllPlaces,
  getPlaceById,
  updatePlace,
  deletePlace,
};
