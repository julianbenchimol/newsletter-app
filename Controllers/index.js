const router = require('express').Router();

const emailRoutes = require('./api/emails');
const userRoutes = require('./user-routes.js')

router.use('/api', emailRoutes);
router.use('/', userRoutes);

module.exports = router;