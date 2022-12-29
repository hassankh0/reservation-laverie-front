// http://localhost:5000
const express = require("express"); //"importation de la librairie"
const bodyParser = require('body-parser');  
const routes = require('./routes/index');
const cors = require('cors');
const app = express(); //instanciation d'un objet express
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/",routes);


// serveur à l'ecoute sur le port choisi 
app.listen(port, () => console.log(`Listen on port ${port}`));

// https://www.youtube.com/watch?v=f5kye3ESXE8
// minute 26