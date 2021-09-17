const express = require('express');

const router = express.Router();

//importar archivos de rutas
const UsersRouters = require('./UsersRouter');

module.exports = () => {
    //vincular router de cada archivo de rutas
    UsersRouters(router);

    return router;
};