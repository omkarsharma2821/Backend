const {Schema, model} = require('../connection');

const myschema = new Schema({
    color : String,
    price : Number,
    brand : String,
    category : String,
    category : String
});

module.exports = model('t-shirt', myschema);