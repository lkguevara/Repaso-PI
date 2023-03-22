const { User, Post } = require('../db');
const axios = require('axios');

// * obtener todos los usuarios
const getAllUsers = async () => {
    // traer los usuarios de la base de datos
    const usersDB = await User.findAll();
    
    // traer los usuarios de la api
    const apiUsersRaw = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;

    // mapear los usuarios de la api
    const apiUsers =  apiUsersRaw.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            created: false
        }
    });

    // concatenar los usuarios
    return [ ...usersDB, ...apiUsers]
}
const searchUsersByName = async (name) => {
    // base de datos
    const dataUsers = await User.findAll({
        where: {
            name: name
        }
    });
    
    // api
    const apiUsersRaw = (await axios.get(`https://jsonplaceholder.typicode.com/users?name=${name}`)).data;
    const apiUsers = apiUsersRaw.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            created: false
        }
    }
    );
    const filteredUsers = apiUsers.filter(user => user.name === name);
    return [...filteredUsers, ...dataUsers];
            
}

//* obtener un usuario por id
const getUserById = async (id, source) => {
    const user = source === 'api' ?
        (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data :
        await User.findByPk(id, {
            include: { 
                model: Post,
                attributes: ['title', 'content'],
            }
        });
    
    return user;
}

//* crear un usuario
const createUserDB = async (name, email, phone) => {
    const newUser = await User.create({
        name,
        email,
        phone
    });
    return newUser;
}

module.exports = {
    createUserDB,
    getUserById,
    searchUsersByName,
    getAllUsers
}
