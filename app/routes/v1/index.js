var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.json({message: 'Hello, World!'});
})

router.use('/article',require('./article.js'));
router.use('/user',require('./user.js'));

module.exports = router;