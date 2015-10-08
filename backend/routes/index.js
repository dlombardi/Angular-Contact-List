var express = require('express');
var router = express.Router();
var Contact = require("../models/contact");

/* GET home page. */


router.get('/', function(req, res, next) {
  Contact.find({}, function(err, contacts){
    res.send(contacts);
  })
});

router.post('/', function(req, res, next) {
  Contact.save(req.body)
});

module.exports = router;
