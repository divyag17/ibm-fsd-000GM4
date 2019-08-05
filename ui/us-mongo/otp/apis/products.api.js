const server = require('express').Router();
const PService = require('../services/product.service').ProductService;
const pService = new PService();

// apis
server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'Product Service is Running'
    });
});

server.get('/',(rq,rs)=>{
    pService.fetchProducts((err,products)=>{
        if(err){
            rs.status(500).json({
                message : 'Unable to process your request'
            });
        }else{
            rs.status(200).json({
                products : products
            });
        }
    })
});
server.post('/addproduct',(rq,rs)=>{
    pService.addproduct(rq.body,(err,res)=>{
        if(err){
            rs.status(402).json({
                message : 'Unable to proceess the request',
                trace : err
            });
        }else{
            rs.status(200).json({
                message : 'product created successfully',
                product : res 
            });
        }
    });
});

module.exports = {
    server
}