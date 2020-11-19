var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  let dataArr = [
    {name : 'Bao' , age : 20},
    {name : 'teo' , age : 30},
  ]
  res.json({
    data : dataArr
  })
});

module.exports = router;
