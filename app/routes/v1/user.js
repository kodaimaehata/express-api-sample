var express = require('express');
var router = express.Router();

var sql = require('mssql');

var config = {
    server: 'your server url',    
    database: 'your db name',
    user:'your user',
    password:'your password',
    options :{
        encrypt: true,
    }
}

router.get('/',function(req,res){

    sql.connect(config,function(err){
        if(err) console.log(err);
        var request = new sql.Request();
        var sqlStatement = 'SELECT * FROM dbo.MUser';

        request.query(sqlStatement,function(err,recordset){
            if(err) console.log(err);
            res.send(recordset);
        });
    });
})

module.exports = router;
