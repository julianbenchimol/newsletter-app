const router = require('express').Router();
const userRoutes = require('./api/user-routes.js')
const apiRoutes = require('./api')

router.use('/', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;