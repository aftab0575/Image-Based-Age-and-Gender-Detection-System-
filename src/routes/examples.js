const express =require('express');

const routerExamples =express.Router();

routerExamples.get('/', function(req,res){
    res.sendFile(__dirname + './examples/index.html');
});

module.exports=routerExamples;