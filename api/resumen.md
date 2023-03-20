# Primera parte
1. inicializar npm init -y
2. instalar dependencias npm i express axios nodemon morgan sequelize pg pg-hstore dotenv
3. configurar nodemon en el package.json. "start": "nodemon index.js"
4. crear una carpeta index.js
5. npm start y validar que este funcionando.

# Segunda parte 
1. crear una carpeta src (fuente) y posterior un archivo app.js para configurar el servidor. 
2. En el archivo app.js, requerir express y morgan, crear una constante para el servidor, instanciar morgan y exportar el servidor.
3. En el archivo index.js requerir app y configurar el puerto.

# Tercera parte (modularizar)
1. crear una carpeta routes y un archivo index.js
2. en el archivo index.js requerir { Router } de express y crear una constante router, instanciar Router y exportar router.
3. Instanciar las rutas que se van a usar, en este ejemplo, users y posts.
4. Crear los archivos users.js y posts.js en la carpeta routes.
5. En el archivo users.js y post.js requerir router y exportar router, asimismo, crear las rutas que se van a usar.

# Cuarta parte (Handlers)
El handler es una funcion que se encarga de manejar las peticiones que llegan a las rutas. Se encarga de recibir los request, unificar datos, devolver la respuesta.
El handler nunca interactua con la base de datos, solo con los datos que llegan del request y los datos que se devuelven en la respuesta.

1. crear una carpeta handlers y los archivos necesarios.
2. En cada archivo creado se van a indicar la manera de obtener los datos que se necesitan para interactuar con la base de datos y la respuesta que se va a devolver.
<!-- 
    Hay 3 formas de obtener información: 
    1. por params... /:id
    2. por body... req.body
    3. por query... ?name=juan


-->

# Quinta parte (Controladores)
El controlador es una funcion que se encarga de interactuar con la base de datos o api. Se encarga de recibir los datos del handler, interactuar con la base de datos y devolver los datos al handler.







