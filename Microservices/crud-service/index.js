const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
//let dbConnected = false;

mongoose.connect("mongodb://mongo:27017")
    .then(() => {
        console.log("Conexión a MongoDB exitosa");
    })
    .catch(err => {
        console.error("Error al conectar a MongoDB:", err);
    });

app.use((req, res, next) => {
    if (mongoose.connection.readyState != 1) {
        return res.status(503).json({ message: "El servicio de base de datos no está disponible" });
    }
    next();
});


app.get("/", (req, res) => {
    res.status(200).json({});
})
const createRoutes = require("./crud/create.route");
app.use('/crear', createRoutes);


try {
    app.listen(3010);
    console.log("Servidor corriendo en el puerto 3010");
} catch (error) {
    console.log("Error al iniciar el servidor", error);
}


