require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const session = require("express-session");
const bcrypt = require("bcrypt");
const morgan = require('morgan');
const cors = require('cors');

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));




app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to You-Flix Backend");
});

// Import and use your route files for User, Video, Edit, etc.
const userRoutes = require('./controllers/userController');
const videosRoutes = require('./controllers/videoController');

app.use('/users', userRoutes);
app.use('/videos', videosRoutes);


app.listen(PORT, () => console.log("Connected to port", PORT));
