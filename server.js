const express = require('express');
const sequelize = require('./config/connection');

// Import model to sync table with database
const emails = require('./Models/emails');
const newsLetter = require('./Models/newsLetter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for model
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });