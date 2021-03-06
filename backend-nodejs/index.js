'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

/*
Uso di promises: evita falle nella connessione o nell'uso di certi metodi in mongoDB.
Rappresenta il completamento di un'operazione asincrona.
*/
mongoose.Promise = global.Promise; 

/*Disattiva la forma antica di lavorare con certi metodi con il DB, in questo caso 'useFindAndModify'*/
mongoose.set('useFindAndModify', false);

//Connesione a mongoDB
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("La connessione al DB è avvenuta con successo!!");

        //Creare server e mettersi in ascolto di richieste http
        app.listen(port, ()=>{
            console.log("Server in esecuzione sulla porta http://localhost:"+port);
        });
});