const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { NewsLetter } = require('../../models')


router.get('/', withAuth, async(req, res)=>{
    try{ 
        res.render('newsletter')
    }
    catch(err){
        req.statusCode(500).json(err)
    }
})

// router.get('/saved/:id', async (req, res)=>{
//     try {
//         const newsLetterData = await Emails.findByPk(req.params.id);
//         return res.json(newsLetterData)
//     }
//     catch{
//         res.status(400).json(err)
//     }
// })

router.post('/saved', async (req, res) =>{
    try{
        NewsLetter.create(req.body)
        .then((newNewsLetter) =>{
            res.json(newNewsLetter)
        })
    }
    catch{
        res.status(400).json(err)
    }
})


module.exports = router;