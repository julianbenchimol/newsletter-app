const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for emails
class Emails extends Model {}

Emails.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    },
  {
    // Link to database connection
    sequelize: sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: true,
    underscored: true,
    modelName: 'emails'
  }
);

module.exports = Emails;