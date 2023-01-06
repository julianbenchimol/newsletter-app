const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

// Create a new Sequelize model for newsLetter
class newsLetter extends Model {}

newsLetter.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    email: {
      type: DataTypes.STRING
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: true,
    underscored: true,
    modelName: 'newsletter'
  }
);

module.exports = newsLetter;