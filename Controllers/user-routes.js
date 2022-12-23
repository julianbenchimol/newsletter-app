//Login logout routes
const router = require('express').Router();

router.get('/', (req, res) =>{
    res.render('main');
})

module.export = router;