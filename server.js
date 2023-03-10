const express = require('express');
const db = require('./db/connection');
const inquirer = require('./lib/staff');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Default response for any other request (Not found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  inquirer();
});
