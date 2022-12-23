const router = require('express').Router();

const userRoutes = require('./user-routes.js')

router.use('/main', userRoutes);

module.exports = router;