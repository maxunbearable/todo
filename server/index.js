const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

const connectDatabase = require("./db/connect");
connectDatabase();

const todos = require("./routes/todos.route");

app.use('/', todos);

app.listen(process.env.APP_PORT, () => console.log(`Server running on port: ${process.env.APP_PORT}`));