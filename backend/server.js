// backend/server.js
const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./controller/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
