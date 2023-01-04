const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    font: {
      type: DataTypes.STRING
    },
    header_image: {
      type: DataTypes.BOOLEAN
    },
    // html link to video
    link: {
      type: DataTypes.STRING
    },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: true,
    underscored: true,
    modelName: 'emails'
  }
);

module.exports = Emails;