var lower = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";



var newPassWd = [];






var pWlenght =  parseInt(prompt("How many characters do you want to be in your password?"));


if (pWlenght < 8) {
    alert("All passwords must be between 8-128 characters.");
    prompt("How many characters do you want to be in your password?");
    
   }
   else if (pWlenght > 8 ); {


   }
upperC = confirm("Click ok to confirm including upper case letters."); 
lowerC = confirm("Click ok to confirm including lower case letters."); 
numericV = confirm("Click ok to confirm including numeric values."); 
specialC = confirm("Click ok to confirm including special characters."); 


if (upperC === true) {
   (newPassWd.push(caps));
}
 if (lowerC === true) {
    (newPassWd.push(lower));
 }
if (numericV === true) {
    (newPassWd.push(numeric));
 }
if (specialC = true) {
    (newPassWd.push(special));
 }


var newPWstr = newPassWd.join("");
 
var PassWD = "";


for (var i = 0; i < pWlenght; i++) {
var genChr = newPWstr.charAt(Math.floor(Math.random() * newPWstr.length));
PassWD = PassWD.concat(genChr);


}


alert("click generate password below to receive your new password");


function generatePassWD() {
   document.getElementById("passWD-text").textContent = PassWD;
}
function copy() {
     document.getElementById("passWD-text").select();
     document.execCommand("CopyPW");
     alert("Your password has been copied to clipbaord.")
  }
  
  
  console.log(PassWD);
  console.log(pWlenght);
  console.log(upperC);
  console.log(lowerC);
  console.log(numericV);
  console.log(specialC);
  console.log(newPassWd);
  console.log(newPWstr);
  console.log(genChr);