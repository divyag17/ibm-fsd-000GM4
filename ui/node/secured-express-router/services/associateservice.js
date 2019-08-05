const associate = require('../db/associate').associate;
class associateservice{
    // users=[];
    constructor(){
        this.associate = associate;
    }
    _all(){
        return this.associate;
    }
    _add(associate){
        this.associate.push(associate);
        return this.associate;
    }
    // _nextId(){
    //     return this.users.length + 1;
    // }
}

module.exports.associateservice = associateservice;