const createPost = (req, res) => {
    res.status(201).send('Post creado');
}

const createUser = (req, res) => {
    res.status(201).send('Usuario creado');
}


module.exports = {
    createPost,
    createUser
}
