'use strict'

//Importare moduli di node per creare il server
var express = require('express');
var bodyParser = require('body-parser');

//Eseguire express (http)
var app = express();

//Importare file di routes

//Middlewares (strato che si esegue prima di caricare la route)
app.use(bodyParser.urlencoded({extended:false})); //permette di usare il body-parser
app.use(bodyParser.json()); //converte qualsiasi tipo di richiesta in json per prima cosa

//CORS (permette richieste dal frontend)


//Add prefix a rute

//indirizzo prova api rest
app.get('/provando', (req, res)=>{
    //console.log("Ciao mondo");
    return res.status(200).send(
        {
            corso: 'Master in Frameworks js',
            corsista: 'Adrian Medina',
            web: 'arandom.000webhostapp.com'
        }
    );
});

//Export module
module.exports = app;