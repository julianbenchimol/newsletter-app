//Login logout routes
//Main page routes
const router = require('express').Router();

//GET route for main page
router.get('/', async (req, res) =>{
    res.render('main')
})

module.exports = router;