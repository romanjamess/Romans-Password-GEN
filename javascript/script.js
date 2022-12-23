// Assignment Code


var generateBtn = document.querySelector("#generate")
 

generateBtn.addEventListener("click", writePassword);

//declare variables 

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
var confirmLength = prompt("How many characters would you like your password to contain?");

if (confirmLength <= 7 || confirmLength > 128) {
  alert("Password length must be between 8-128 characters Try again");
  var confirmLength = prompt("How many characters would you like your password to contain?");
}


var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter= confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLowerCase= confirm("Click OK to confirm if you would like to include lowercase characters");
   var confirmUpperCase= confirm("Click OK to confirm if you would like to include uppercase characters");
   // this a the actual function 
var options =[]
  if ( confirmSpecialCharacter){ 
    options = options.concat(specialChar)
  }
  if ( confirmNumericCharacter){ 
    options = options.concat(number)
  }
  if ( confirmLowerCase){ 
    options = options.concat(Lower)
  }
  if ( confirmUpperCase){ 
    options = options.concat(Upper)
  }
  var password = ''
  //the for loop function where its working through 
  for (i =0; i<confirmLength; i++) {
    password +=options [Math.floor(Math.random()* options.length)]

  }
 return password
  

  



}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  

// Add event listener to generate button
 // generateBtn.addEventListener("click", writePassword);



 //1. prompt the user for the password criteria 
 // a. password length  8 < 128 
 // b. lowercase, uppercase, numbers, special characters
 //2. validate the input 
 //3. generate the password based on criteria 
 // 4. display password to the page 


