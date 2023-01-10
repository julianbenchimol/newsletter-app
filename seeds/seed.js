const sequelize = require('../config/connection')
const User = require('../models/User');
const seedEmails = require('./emails');
const userData = require('./userData.json');

const seedDatabase = async ()=>{
  await sequelize.sync({force:true})

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
  await seedEmails();
  console.log('\n----- Emails Seeded -----\n');
  process.exit(0)
}

seedDatabase();