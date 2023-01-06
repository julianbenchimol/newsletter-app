const sequelize = require('../Config/connection')
const User = require('../models/User')
const userData = require('./userData.json');

const seedDatabase = async ()=>{
  await sequelize.synnc({force:true})

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });

  process.exit(0)
}

seedDatabase();