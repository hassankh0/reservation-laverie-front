const express = require("express");
const machineControllers = require('../controllers/machine.controllers');

const routes = express.Router();

routes.get("/",machineControllers.getAll);
routes.get("/:id",machineControllers.getById);
routes.delete("/:id",machineControllers.delete);
routes.post("/",machineControllers.add);

module.exports = routes;