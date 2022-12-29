const express = require("express");
const laverieControllers = require('../controllers/laverie.controllers');

const routes = express.Router();

routes.get("/",laverieControllers.getAll);
routes.get("/:id",laverieControllers.getById);
routes.delete("/:id",laverieControllers.delete);
routes.post("/",laverieControllers.add);

module.exports = routes;