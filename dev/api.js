var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/blockchain', function(req,res){
   res.send(bitcoin);
});

app.post('/transaction', function(req,res){
    const blockIndex = bitcoin.createNewTransaction(req.body.ammount, req.body.sender, req.body.recipient);
    res.json({note: `transaction will be added ${blockIndex}.`});
});

app.get('/mine', function(req,res){

});

app.listen(3000, function(){
    console.log('listening port 3000');
});