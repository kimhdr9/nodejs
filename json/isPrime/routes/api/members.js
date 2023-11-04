const members = require('../../biblio/Members');
const express =  require('express');
const router = express.Router();


// Get All Members
router.get('/',(req,res)=> res.json(members));


// Get Single Member
router.get('/:id',(req,res) =>{
    const found = members.people.some(member => member.id === parseInt(req.params.id));

    if ( found){
        res.json(members.people.filter(member => member.id === parseInt(req.params.id)));
    }
    else
    {
        res.status(400).json({msg : `No member with the id of ${req.params.id}`});
    }

})

module.exports = router;