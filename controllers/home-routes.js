const router = require('express').Router();
const { response } = require('express');
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

// async function newFormHandler(event) {
//     event.preventDefault();
//     const firstName = document.querySelector('#firstName').value;
//     const lastName = document.querySelector("#lastName").value;
//     const email = document.querySelector("#email").value;
//         method: 'POST',
//         body: JSON.stringify({
//             firstName,
//             lastName,
//             email,
//         })
//         headers:{
//             'content-Type': 'application/json',
//         },
// });
// if (response.ok){
//     document.location.replace('/');
// }else{
//     alert('failed to add');
//  }
// }
// document.querySelector('.new-email-form').addEventListener('submit', newFormHandler);
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