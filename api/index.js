// require servidor y base de datos
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = 3001;

server.listen(PORT, () => {
    conn.sync({force: false}) // force true me permite borrar la base de datos y crearla de nuevo
    console.log(`Server is listening on port ${PORT}`);
    }
);

