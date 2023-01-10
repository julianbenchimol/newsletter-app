const router = require('express').Router();
const {Emails} = require('../../models')


//gets all emails 
router.get('/emails', async (req, res)=>{
    try{
        const emailData = await Emails.findAll();
        return res.json(emailData)
    }
    catch{
        res.status(400).json(err)
    }
})

//gets a specific email by ID
router.get('/emails/:id', async (req, res)=>{
    try {
        const emailData = await Emails.findByPk(req.params.id);
        return res.json(emailData)
    }
    catch{
        res.status(400).json(err)
    }
})

//adds a new email to the model
router.post('/emails', async (req, res) =>{
    try{
        Emails.create(req.body)
        .then((newEmail) =>{
            res.json(newEmail)
        })
    }
    catch{
        res.status(400).json(err)
    }
})

//update a specific email by id
router.put('/emails/:id', async (req, res)=>{
    try{
        Emails.update(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
    }
    catch {
        res.status(400).json(err)
    }
})

//deletes an email from the model 
router.delete('/emails/:id', (req, res)=>{
    Emails.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((deletedEmail) =>{
        res.json(deletedEmail)
    })
    .catch((err) =>res.status(400).json(err))
})

module.exports = router;