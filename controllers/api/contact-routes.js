const router = require('express').Router();
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async(req, res)=>{
    try{ 
        res.render('')
    }
    catch(err){
        req.statusCode(500).json(err)
    }
})


module.exports = router;