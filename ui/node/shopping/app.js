const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./apis/items').itemRoutes;
const cartRoutes = require('./apis/cart').cartRoutes;
const Email = require('./services/email.service').Email;
const emailService = new Email();
server.use(parser.json());

server.get('/status',(rq,rs)=>{
    emailService.send();
    rs.status(200).json({
        message : 'Service is running'
    });
});
// apply cors
server.use(cors());
server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});
server.use('/items',itemRoutes);
server.use('/cart',cartRoutes);

// PORT Binding
server.listen(1269,()=>{
    console.log('Server started at 1269');
});
