const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser  = require('body-parser');
const path = require("path");
const db = require('./db');
const authRoute = require("./routes/auth");
const eventRoute = require("./routes/performance");
const newsRoute = require("./routes/news");


const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));
}

app.use("/api/auth", authRoute);
app.use("/api/event", eventRoute);
app.use("/api/news", newsRoute);

app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}`);
});
