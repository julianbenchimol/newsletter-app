require('dotenv').config();

const nodemailer = require('nodemailer');

//Creates a connection between an email service and the application, with authorization.
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });


//Creates the mailOptions object, which holds the details of where to send the email and with what data.
  let mailOptions = {
      from: user,
      to: tomerpacific@gmail.com,
      subject: 'Nodemailer Project',
      text: 'Hi from your nodemailer project'
    };