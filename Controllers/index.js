
//- Landing page GET
//- Dashboard page GET

const router = require('express').Router();


const emailRoutes = require('./api/emails');
const userRoutes = require('./user-routes')

router.use('/api', emailRoutes);
router.use('/', userRoutes);

module.exports = router;