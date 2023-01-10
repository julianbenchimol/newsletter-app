const router = require('express').Router();
const userRoutes = require('./user-routes');
const newsletterRoutes = require('./newsletter')
const contactRoutes = require('./contact-routes')
const emailRoutes = require('./emails')

router.use('/users', userRoutes);
router.use('/newsletter', newsletterRoutes)
router.use('/contacts', contactRoutes)
router.use('/emails', emailRoutes)

module.exports = router;
