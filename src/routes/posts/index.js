const route = require('express').Router()
const { getAllPosts,createPost } = require('../../controllers/posts')

route.get('/',async (req,res)=>{
    const posts = await getAllPosts()
    res.send(posts)
})

route.post('/',async (req,res)=>{
    const { userId , title , body } = req.body
    if((!userId) || (!title) || (!body) ){
        res.status(400).send({error:'userId or title or body not provided'})
    }

    const post = await createPost(userId ,title ,body )
    res.status(200).send(post)
})

module.exports = {
    route
}