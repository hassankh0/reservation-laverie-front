const express = require("express");
const reservationControllers = require('../controllers/reservation.controllers');

const routes = express.Router();

routes.get("/",reservationControllers.getAll);
routes.get("/:id",reservationControllers.getById);
routes.delete("/:id",reservationControllers.delete);
routes.post("/",reservationControllers.add);

module.exports = routes;