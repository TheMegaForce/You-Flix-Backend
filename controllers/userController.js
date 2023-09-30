//userController.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import the User model
const bcrypt = require('bcrypt');

// Index: Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Create: Add a new user (User Registration)
router.post('/register', async (req, res) => {
  if (req.body.username && req.body.password) {
      let plainTextPassword = req.body.password
      bcrypt.hash(plainTextPassword, 10, async (err, hashedPassword) => {
          req.body.password = hashedPassword;
          let newUser = await User.create(req.body);
          res.send(newUser);
      });
  };
});

// Login a user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Find the user by username
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    // Compare the entered password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Successful login, set session or generate JWT token
      req.session.userId = user._id;
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy()
  res.json({message: "logout successful"})
});

// Show: Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update: Update user by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete: Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
