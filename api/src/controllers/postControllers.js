const { Post } = require('../db');

const postController = async (title, content, userId) => {
    const newPost = await Post.create({
        title,
        content
    });
    await newPost.setUser(userId); // relacionar el post con el usuario
    return newPost;

}



module.exports = {
    postController
}
