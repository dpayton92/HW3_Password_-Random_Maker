// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.innerHTML

// Write password to the #password input
function writePassword() {
  console.log(1);
  var password = "";
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
  var passwordText = document.querySelector("#password");
  for (i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random()
      * str.length + 1);

    password += str.charAt(char)
    console.log(password)
    
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







