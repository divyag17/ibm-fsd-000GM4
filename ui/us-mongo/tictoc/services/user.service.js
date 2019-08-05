const MongoClient = require('mongodb').MongoClient;
const UserConstants = require('../utils/utils').UserConstants; 
class UserService {

    fetchUsers(callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('tic').find({}).toArray((error,users)=>{
                if(!error){
                    console.log(users);
                    callback(users);
                }
            });
        });
    }
    add(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('tic').insert(_user,(err,response)=>{
                callback(err,response);
            });
        });
    }
    update(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('tic').updateOne({
               
            },{
                $set: _user
                
            },(err,data)=>{
                callback(err,{
                    message : 'data updated'
                })
            })
        })
    }
}

module.exports = {
    UserService
}