// backend/config/config.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/a5', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
