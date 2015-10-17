//
// Form for Creating new users
//

var userNewForm = function (){

  var submit = document.getElementById("submitId");

  submit.onclick = function(e){
    e.preventDefault();
    var emailValue = document.getElementById("emailId").value,
        passwordValue = document.getElementById("passwordId").value;

    console.log(emailValue);
    console.log(passwordValue);
  }


  console.log(email);
  console.log(password);
  console.log(submit);
  console.log("carepicha");
}

module.exports = userNewForm();
