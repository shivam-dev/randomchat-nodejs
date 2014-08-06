var mongoose = require("mongoose");
var port = '27017';
console.log("port mongo : "+port);
mongoose.connect('mongodb://127.0.0.1:'+port+'/users');

module.exports = mongoose.connection;


