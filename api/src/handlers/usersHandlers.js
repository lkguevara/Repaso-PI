const { createUserDB, getUserById, searchUsersByName, getAllUsers } = require("../controllers/usersControllers");

//* obtener todos los usuarios
const getUsersHandler = async (req, res) => {
    const {name} = req.query;
    
    try {
        const result = name ? await searchUsersByName(name) : await getAllUsers();
        res.status(200).json(result);
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }

};

//* obtener un usuario por id
const getDetailHandler = async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? 'bdd' : 'api';

    try {
        const user = await getUserById(id, source);
        res.status(200).json(user);
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
   
};

//* crear un usuario
const createUsersHandler = async (req, res) => {
    const {name, email, phone} = req.body;
    try {
        const newUser = await createUserDB(name, email, phone);
        res.status(201).json(newUser);
    } 
    catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
};


module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUsersHandler
};

// 1:23