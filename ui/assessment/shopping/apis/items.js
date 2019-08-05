const server = require('express').Router();
const iService = require('../services/itemservices').itemService;
const itemService = new iService();
const setContentHeader = require('../services/utils').setContentHeader;

// get all projects
server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        items : itemService._all()
    }));
});

// add a new project
server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        items : itemService._add(req.body)
    }));
});

module.exports.itemRoutes = server;