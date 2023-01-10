const router = require('express').Router();
const userRoutes = require('./user-routes');
const newsletterRoutes = require('./newsletter')
const contactRoutes = require('./contact-routes')

router.use('/users', userRoutes);
router.use('/newsletter', newsletterRoutes)

module.exports = router;
