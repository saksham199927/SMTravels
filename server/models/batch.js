//first of all we make a connection from node.js to mongodb
// then type this code for making schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema(
    {name :{
        type: String
    },
    email :{
        type: String
    },
    password :{
        type: String
    },
    address :{
        type: String
    },
    city :{
        type: String
    },
}
);

module.exports=mongoose.model('user',user);//here we are creating the collection superheros of the variable superhero
