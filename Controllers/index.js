
//- Landing page GET
//- Dashboard page GET

const router = require('express').Router();


const emailRoutes = require('./api/emails');

const userRoutes = require('./user-routes.js')

router.use('/main', userRoutes);

module.exports = router;