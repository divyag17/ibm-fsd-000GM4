const routes = require('express').Router();
const UserService = require('../services/user.service').UserService;
const userService = new UserService();
const UserConstants = require('../utils/utils').UserConstants;

routes.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : UserConstants.messages.userServiceStatus
    });
});

routes.get('/',(rq,rs)=>{
    userService.fetchUsers((users)=>{
        rs.status(200).json({
            message : 'game loaded',
            users : users
        })
    });    
});
// add a new user
routes.post('/add',(rq,rs)=>{
    userService.add(rq.body,(err,result)=>{
        if(err){
            rs.status(400).json({
                message : 'Unable to process the request'
            });
        }else{
            rs.status(200).json({
                message : 'user added ',
                result : result
            });
        }
    });
});
// routes.post('/add',(rq,rs)=>{
//     userService.add(rq.body,(err,result)=>{
//         if(err){
//             rs.status(400).json({
//                 message : 'Unable to process the request'
//             });
//         }else{
//             rs.status(200).json({
//                 message : 'game loaded',
//                 result : result
//             });
//         }
//     });
// });
routes.post('/update',(rq,rs)=>{
    userService.update(rq.body,(err,result)=>{
        if(err){
            rs.status(400).json({
                message : 'Unable to process the request'
            });
        }else{
            rs.status(200).json({
                message : 'data updated Successfully',
                result : result
            });
        }
    });
});


module.exports = {
    userRoutes : routes
}