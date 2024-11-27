const express = require('express');
const router = express.Router();
const {queryUsers, findUser} = require('./read.controller');

// Ruta para consultar usuarios
router.get('/users', queryUsers);


router.get('/users/:nroDocumento', findUser);
module.exports = router;
