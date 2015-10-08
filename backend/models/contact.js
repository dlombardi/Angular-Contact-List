var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var contactSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
});

var Contact = Mongoose.model("Contact", contactSchema);

module.exports = Contact;
