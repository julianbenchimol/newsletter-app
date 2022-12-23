//- Landing page GET
//- Dashboard page GET
const router = require("express").Router();

const emailRoutes = require("./api/emails");

router.use("/emails", emailRoutes);

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
module.exports = router;
