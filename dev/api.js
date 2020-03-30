var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/blockchain', function(req,res){
   
});

app.post('/transaction', function(req,res){

});

app.get('/mine', function(req,res){

});

app.listen(3000, function(){
    console.log('listening port 3000');
});