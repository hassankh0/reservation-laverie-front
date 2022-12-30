const express = require("express");
const machineControllers = require('../controllers/machine.controllers');

const routes = express.Router();

routes.get("/",machineControllers.available);
routes.get("/:id",machineControllers.getById);
routes.delete("/:id",machineControllers.delete);
routes.post("/",machineControllers.add);
// routes.get("/",machineControllers.getAll);

module.exports = routes;