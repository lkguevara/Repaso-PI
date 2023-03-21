const { createUserDB } = require("../controllers/usersControllers");

const getUsers = (req, res) => {
    const {name} = req.query;
    if(name) res.status(200).send(`Aqui está el usuario ${name}`);
    else res.status(200).send('Aqui están todos los usuarios');
};

const getDetail = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`Detalle del usuario ${id}`);
};

const createUsers = (req, res) => {
    const {name, email, phone} = req.body;

    try {
        const response = createUserDB(name, email, phone);
        res.status(200).json(response);
    } 
    catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
};


module.exports = {
    getUsers,
    getDetail,
    createUsers
};

