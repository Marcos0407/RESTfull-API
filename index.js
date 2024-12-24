const express = require('express');
const consign = require('consign');
const boryParser = require('body-parser');

let app = express();

app.use(boryParser.urlencoded({extended: false}));
app.use(boryParser.json());


consign().include('routes').include('utils').into(app);


app.listen(3000, '127.0.0.1', ()=> {

    console.log('Servidor rodando');

})