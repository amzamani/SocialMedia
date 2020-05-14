const { Comments } = require('../db/modules')


// show all comments (of a user)
async function showCommentsOfUser(Id){
   const commentsOfUser =  await Comments.findAll({
   where :{userId:Id}
   });
   return commentsOfUser;
}

// show all comments (under a post)
async function showCommentsOfPost(Id){
    const commentsOfPost = await Comments.findAll({
    where :{postId:Id}
    });
    return commentsOfPost;
 }

// add a comment
async function addComment(title,body,userId,postId){
    const comment = await Comments.create({
        title,
        body,
        userId,
        postId
    })
    return comment;
}


//get all comments
async function getAllComments(){
    const comments = await Comments.findAll();
    return comments;
}


module.exports= {
    showCommentsOfUser,
    showCommentsOfPost,
    getAllComments,
    addComment
    
}