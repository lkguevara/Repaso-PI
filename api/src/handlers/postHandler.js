const {postController} = require('../controllers/postControllers');

const createdPost = async (req, res) => {
    const {title, content, userId} = req.body;

    try {
        const newPost = await postController(title, content, userId);
        res.status(201).json(newPost);
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

const getPosts = (req, res) => {

    try {
        
    } catch (error) {
        
    }

}

module.exports = {
    createdPost,
    getPosts
}
