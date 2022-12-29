const express = require("express");
const personneControllers = require('../controllers/personne.controllers');

const routes = express.Router();

routes.get("/",personneControllers.getAll);
routes.get("/:id",personneControllers.getById);
routes.delete("/:id",personneControllers.delete);
routes.post("/",personneControllers.add);
routes.post("/login",personneControllers.login);
module.exports = routes;