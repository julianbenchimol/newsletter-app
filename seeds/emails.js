const { Emails } = require('../models');

const emaildata = [
    {
        email: "john.ifert.miller@gmail.com",
    },
    {
        email: "legendary6615@gmail.com",
    },
];

const seedEmails = () => Emails.bulkCreate(emaildata);

module.exports = seedEmails;