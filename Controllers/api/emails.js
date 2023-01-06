const router = require('express').Router();
const emails = require('../../models/emails.js')


//gets all emails 
router.get('/emails', async (req, res)=>{
    try{
        //gets all emails from the model
    }
    catch{
        //catches any errors
    }
})

//gets a specific email by ID
router.get('/emails/:id', async (req, res)=>{
    try {
        //gets the specific email from the model
    }
    catch{
        //catches any errors
    }
})

//adds a new email to the model
router.post('/emails', async (req, res) =>{
    try{
        //adds the data within the body to the model
    }
    catch{
        //catches any errors
    }
})

//update a specific email by id
router.put('/emails/:id', async (req, res)=>{
    try{
        //update the model based on the req.body
    }
    catch {
        //catches any errors
    }
})

//deletes an email from the model 
router.delete('/emails/:id', (req, res)=>{
    
})

module.exports = router;