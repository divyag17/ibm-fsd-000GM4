const server = require('express').Router();
const cService = require('../services/cartservices').cartService;
const cartService = new cService();
const setContentHeader = require('../services/utils').setContentHeader;

// get all projects
server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        cart : cartService._all()
    }));
});

// add a new project
server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
       cart : cartService._add(req.body)
    }));
});

server.post('/buy',(req,res)=>{
    cartService.buy(req.body);
})

module.exports.cartRoutes = server;