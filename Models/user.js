const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');
const bycrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw){
    return bycrypt.compareSync(loginPw, this.password)
  }
}

User.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  },
  {
    hooks: {
      beforeCreate: async(newUserData) =>{
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData
      }
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;