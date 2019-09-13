var express  = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

console.log(process.env.port);
var port = process.env.port || 3000;

var router = require('./routes/v1/');
app.use('/api/v1/',router);


// app.get('/api/v1/',function(req,res){
//     res.json({
//         message:"Hello,world"
//     });
// });

app.listen(port);
console.log('listen on port ' + port);
