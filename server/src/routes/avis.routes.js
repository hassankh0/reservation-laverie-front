const express = require("express");
const avisControllers = require('../controllers/avis.controllers');

const routes = express.Router();

routes.get("/",avisControllers.getAll);
routes.get("/:id",avisControllers.getById);
routes.delete("/:id",avisControllers.delete);
routes.post("/",avisControllers.add);

module.exports = routes;