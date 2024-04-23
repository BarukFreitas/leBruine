const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('tudo funcionando')
});

app.listen(3000);