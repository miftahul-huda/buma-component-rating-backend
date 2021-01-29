var express = require('express');
var router = express.Router();
const path = require('path');



router.get('/uploadedmolist', function (req, res){
    var dir = __dirname;
    var p = path.resolve( dir, "../public/pages/", "uploadedmolist");
    res.render(p )
})


module.exports = router;