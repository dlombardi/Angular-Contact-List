var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/users', function(req, res, next) {
  res.send(req.body);
  console.log("ok");
});

module.exports = router;
