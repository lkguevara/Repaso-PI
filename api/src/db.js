// requerir el paquete de sequelize y dotenv
const { Sequelize } = require('sequelize');
require('dotenv').config();

// importar los modelos
const UserModel = require('./models/UserModel');
const PostModel = require('./models/PostModel');

// importar las variables de entorno 
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// crear la conexión a la base de datos 
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false, // Es para no hacer console.log de las consultas que se hacen a la base de datos
    }
);

// definir los modelos
UserModel(sequelize);
PostModel(sequelize);

// crear las relaciones
const { User, Post } = sequelize.models;

User.hasMany(Post, { as: 'posts' }); // un usuario puede tener muchos posts
Post.belongsTo(User, { as: 'user' }); // un post pertenece a un usuario




// exportar la conexión
module.exports = {
    ...sequelize.models,
    conn: sequelize
}

