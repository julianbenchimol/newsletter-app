const router = require('express').Router();
const {User, Emails} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async(req, res)=>{
    try{
        res.render('mainpage', {
            logged_in: req.session.logged_in
        })
    } catch(err){
        req.status(500).json(err)
    }
})

router.get('/login', (req, res)=>{
    if(req.session.logged_in){
        res.redirect('/')
        return;
    }

    res.render('login')
})
// Search route
// router.get("/grabEmails", async (req, res) => {
//     try {
//       const grabEmails = await Emails.findAll({});
//       const Emails = grabEmails.map((Emails) =>
//       Emails.get({ plain: true })
//     );
// {
//         res.redirect("/", {
//             Emails,
//         });
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

module.exports = router