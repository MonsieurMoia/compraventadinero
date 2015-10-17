//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = require('../../schemas/usersSchema.js');

//---------------------------------------------------
// Charlie
// Schema para usuarios
var user = new Schema(userSchema);

// modelo para usuarios
var User = mongoose.model('User', user);

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

User.newUser = function(email, password){

  console.log("Me estoy corriendo");
  // create a new user
  var newUser = User({
    email: email,
    password: password,
    admin: true
  });

  // save the user
  newUser.save(function(err) {
    if (err)
    {
      throw err;
      console.log('Errrrrrooooooor');
    }
    console.log('User created!');
  });
}


module.exports = User;

//---------------------------------------------------
