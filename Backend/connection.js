const mongoose = require('mongoose');
const url = "mongodb+srv://omkarsharma2821:omkar123@cluster0.jwxneht.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('Database connected');

}).catch((err) => {
    console.log('err');

});

console.log('Another statement');

