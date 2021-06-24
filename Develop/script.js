// Array of special characters to be included in password
const specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
// Array of numeric characters to be included in password
const numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
const lowerCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of uppercase characters to be included in password
const upperCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

const generatePassword = () => {
  let passwordLength = prompt("Enter length of password");

  while(passwordLength < 8 || passwordLength > 128){
      passwordLength = prompt("You must choose a number between 8 and 128");
      console.log("Password must be 8 charaters or longer. Please enter a valid length.");
  }

  let containsSpecialCharacters = confirm("Click OK to confirm special characters in your password");
  console.log(containsSpecialCharacters);
  let containsNumberCharacters = confirm("Click OK to confirm including numeric characters");
  console.log(containsNumberCharacters);
  let containsUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters");
  console.log(containsUpperCasedCharacters);
  let containsLowerCasedCharacters = confirm("Click OK to confirm including lower characters");
  console.log(containsLowerCasedCharacters);
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
