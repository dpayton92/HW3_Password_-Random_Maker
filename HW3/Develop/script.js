// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.innerHTML

// Write password to the #password input
function writePassword() {
  console.log(1);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




 


