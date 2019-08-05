const items = require('../db/items').items;
const Email = require('./email.service').Email;
const setContentHeader = require('../services/utils').setContentHeader;
const email =new Email();
class itemService{
    constructor(){
        this.items = items;
    }
    _all(){
        return this.items;
    }
    _add(items){
        this.items.push(items);
        return this.items;
    }
    
}

module.exports.itemService = itemService;