const router = require('express').Router();

router.get('/', async(req, res)=>{
    try{ 
        res.render('newsletter')
    }
    catch(err){
        req.statusCode(500).json(err)
    }
})


module.exports = router