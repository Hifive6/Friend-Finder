const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3500;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")
require("./app/routing/htmlRoutes.js")


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})