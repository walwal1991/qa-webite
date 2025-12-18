const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    const users = await User.find({ name: new RegExp(name, 'i') });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
