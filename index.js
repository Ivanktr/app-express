var express =require('express');
var app = express();

app.get('/',c_inicio);
app.get('/saludo',c_saludo)

function c_inicio(req,res){
    res.send('<h1>Express Inicio</h1>')
}

function c_saludo(req,res){
    res.send('<h1>Hola express - Ivan Oscco</h1>')
}

function c_server(req,res){
    console.log('port:1020')
}

var server = app.listen(1020,c_server);