const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define(
        'User', 
    {
    id: {
        type: DataTypes.UUID, // UUID es un tipo de dato que se usa para identificar de forma única a un usuario. números y letras separadas por guiones.
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // UUIDV4 es un método que genera un UUID de forma aleatoria
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, // no puede ser nulo
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    }, 
    {
        timestamps: false, // cada vez que se crea un usuario, no se va a crear una fecha de creación y una fecha de actualización
    }
);
}