require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const session = require("express-session");
const bcrypt = require("bcrypt");
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://doueven1996:5gxmZWaiBV3zBABh@cheese.mkubhhh.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle database connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to You-Flix Backend");
});

// Import and use your route files for User, Video, Edit, etc.
const userRoutes = require('./controllers/userRoutes');
const videoRoutes = require('./controllers/videoRoutes');
const editRoutes = require('./controllers/editRoutes');

app.use('/users', userRoutes);
app.use('/videos', videoRoutes);
app.use('/edits', editRoutes);

app.listen(PORT, () => console.log("Connected to port", PORT));
