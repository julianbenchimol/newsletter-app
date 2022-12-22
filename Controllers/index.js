//- Landing page GET
//- Dashboard page GET
const router = require('express').Router();

const emailRoutes = require('./api/emails');

router.use('/emails', emailRoutes);

module.exports = router;
