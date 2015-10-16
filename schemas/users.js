var mongoose = require('mongoose');


module.exports = mongoose.model('Users', {

  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  created_at: Date,
  updated_at: Date
});
