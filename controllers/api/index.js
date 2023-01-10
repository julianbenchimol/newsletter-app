const router = require('express').Router();
const userRoutes = require('./user-routes');
const newsletterRoutes = require('./newsletter')

router.use('/users', userRoutes);
router.use('/newsletter', newsletterRoutes)

module.exports = router;
