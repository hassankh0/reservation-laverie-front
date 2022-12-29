const express = require("express");

const avis = require('./avis.routes');
const laverie = require('./laverie.routes');
const machine = require('./machine.routes');
const personne = require('./personne.routes');
const reservation = require('./reservation.routes');

const routes = express.Router();

routes.use("/avis",avis);
routes.use("/laverie",laverie);
routes.use("/machine",machine);
routes.use("/personne",personne);
routes.use("/reservation",reservation);

module.exports = routes;