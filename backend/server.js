const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const searchRoutes = require('./routes/search');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'qa-webite.vercel.app/', // React frontend
  credentials: true
}));

app.use('/api', authRoutes);
app.use('/api', searchRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
