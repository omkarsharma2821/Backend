const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    price : Number,
    brand : String,
    model : String,
    category : String
});

module.exports = model('laptop', myschema);