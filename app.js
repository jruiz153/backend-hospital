require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();
//Configurar CORS
app.use(cors());
//Base de datos
dbConnection();

var port = process.env.PORT;

//ruta por defecto
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo 2'
    })
});

app.route('/Node').get(function(req, res) {
    res.send("Entre por node");
});

app.route('/Angular').get(function(req, res) {
    res.send("Entre por Angular");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});