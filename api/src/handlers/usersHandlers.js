// handler
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
    const {name, email, password} = req.body;
    res.status(200).send(`Usuario ${name} creado con el email ${email} y la contraseña ${password}`);
};


module.exports = {
    getUsers,
    getDetail,
    createUsers
};

