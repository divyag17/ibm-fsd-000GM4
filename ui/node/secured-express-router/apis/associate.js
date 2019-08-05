const server = require('express').Router();
const AService = require('../services/associateservice').associateservice;
const associateservice = new AService();
const setContentHeader = require('../services/utils').setContentHeader;

// get all projects
server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        associate : associateservice._all()
    }));
});

// add a new project
server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        associate: associateservice._add(req.body)
    }));
});

module.exports.associateRoutes = server;