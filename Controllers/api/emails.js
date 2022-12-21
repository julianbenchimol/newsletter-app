/* 
- Remove emails from database DELETE
*/
const router = require('express').Router();
const emails = require('../../Models/emails.js')


//gets all emails 
router.get('/api/emails', async (req, res)=>{
    try{
        //gets all emails from the model
    }
    catch{
        //catches any errors
    }
})

//gets a specific email by ID
router.get('/api/emails/:id', async (req, res)=>{
    try {
        //gets the specific email from the model
    }
    catch{
        //catches any errors
    }
})

//adds a new email to the model
router.post('/api/emails', async (req, res) =>{
    try{
        //adds the data within the body to the model
    }
    catch{
        //catches any errors
    }
})

//update a specific email by id
router.put('/api/emails/:id', async (req, res)=>{
    try{
        //update the model based on the req.body
    }
    catch {
        //catches any errors
    }
})

//deletes an email from the model 
router.delete('/api/emails/:id', (req, res)=>{
    
})
module.exports = router;