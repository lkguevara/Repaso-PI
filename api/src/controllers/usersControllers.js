const { User } = require('../db');

const createUserDB = async (name, email, phone) => {
    const newUser = await User.create({
        name,
        email,
        phone
    });
    return newUser;
}

module.exports = {
    createUserDB
}
