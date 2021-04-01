var express =require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes)
app.get('/productos',c_productos)

function c_inicio(req,res){
    res.send('<h1>Bienvenido</h1>')
}

function c_clientes(req,res){
    res.send('<h1>Clientes: </h1><br><h1>Ivan Oscco</h1> <br> <h1>Adrian Lujan</h1> <br> <h1>Jafet Carrasco </h1>')
}

function c_productos(req,res){
    res.send('<h1>Productos: </h1><br><h1>Xiamo Redmi Note 8</h1> <br> <h1>Huawei P40 Lite</h1> <br> <h1>Samsung S30</h1>')
}

function c_server(req,res){
    console.log('port:5000')
}

var server = app.listen(5000,c_server);
