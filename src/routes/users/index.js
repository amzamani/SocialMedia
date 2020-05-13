const { createAnonUser, getUserById,getUserByUsername,getAllUsers} = require('../../controllers/users')

const route = require('express').Router()

route.get('/',async (req,res)=>{
    const users = await getAllUsers()
    res.send(users)
})

route.post('/',async (req,res)=>{
    const user = await createAnonUser()
    console.log("value entered in table")
    res.status(201).send(user)
})

route.get('/:id',async (req,res)=>{
    let user;
    if(isNaN(parseInt(req.params.id))){
         user = await getUserByUsername(req.params.id)
    }
    else{
        user = await getUserById(req.params.id)
    }
    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send({error:'No such id or username'})
    }
})


module.exports = {
    route
}