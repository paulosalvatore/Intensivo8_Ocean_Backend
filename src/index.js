const express = require('express');
const app = express();
const data = require('../data/data.json');

app.get('/', function (req, res) {
    const musica = {
        nome: "Sweet Child O'Mine",
        artista: "Guns n' Roses"
    };

    res.send(musica.nome);
});

app.get('/lugares', function (req, res) {
    res.send(data);
});

app.listen(3000);
