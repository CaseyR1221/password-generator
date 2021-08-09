// Assignment Code
var generateBtn = document.querySelector("#generate");

const generatePassword = () => {
  // Array of special characters to be included in password
  const specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
  // Array of numeric characters to be included in password
  const numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Array of lowercase characters to be included in password
  const lowerCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Array of uppercase characters to be included in password
  const upperCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //
  let empty = [];
  let charChoices = [];
  let generatedPassword = [];
  let cases = 0;

  let passwordLength = prompt("Enter length of password");

  while(passwordLength < 8 || passwordLength > 128){
      passwordLength = prompt("You must choose a number between 8 and 128");
      console.log("Password must be 8 charaters or longer. Please enter a valid length.");
  }

  let containsSpecialCharacters = confirm("Click OK to confirm special characters in your password");
  
  console.log(containsSpecialCharacters);

  if(containsSpecialCharacters) {
    cases += 1;
  }

  let containsNumberCharacters = confirm("Click OK to confirm including numeric characters");
  
  console.log(containsNumberCharacters);

  if(containsNumberCharacters) {
    cases += 10;
  }

  let containsUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters");
  
  console.log(containsUpperCasedCharacters);

  if(containsUpperCasedCharacters) {
    cases += 100;
  }
  
  let containsLowerCasedCharacters = confirm("Click OK to confirm including lower characters");
  
  console.log(containsLowerCasedCharacters);

  if(containsLowerCasedCharacters) {
    cases += 1000;
  }
  
  switch(cases) {
    case 1:
      charChoices = empty.concat(specialCharacters);
      break;
    
    case 10:
      charChoices = empty.concat(numCharacters);
      break;

    case 11:
      charChoices = empty.concat(specialCharacters, numCharacters);
      break; 

    case 100:
      charChoices = empty.concat(upperCharacters);
      break;

    case 101:
      charChoices = empty.concat(specialCharacters, upperCharacters);
      break;

    case 110:
      charChoices = empty.concat(numCharacters, upperCharacters);
      break; 
    
    case 111:
      charChoices = empty.concat(specialCharacters, numCharacters, upperCharacters);
      break;

    case 1000:
      charChoices = empty.concat(lowerCharacters);
      break;

    case 1001:
      charChoices = empty.concat(specialCharacters, lowerCharacters);
      break;

    case 1010:
      charChoices = empty.concat(numCharacters, lowerCharacters);
      break;

    case 1011:
      charChoices = empty.concat(specialCharacters, numCharacters, lowerCharacters);
      break;

    case 1100:
      charChoices = empty.concat(upperCharacters, lowerCharacters);
      break;

    case 1101:
      charChoices = empty.concat(specialCharacters, upperCharacters, lowerCharacters);
      break;

    case 1110:
      charChoices = empty.concat(numCharacters, upperCharacters, lowerCharacters);
      break;

    case 1111:
      charChoices = empty.concat(specialCharacters, numCharacters, upperCharacters, lowerCharacters);
      break;
  }

  console.log(charChoices);

  // loop through included characters array *passwordLen* number of times
  for (let i = 0; i < passwordLength; i++) {
    // randomly select an index from the array
    let randomIndex = Math.floor(Math.random() * (charChoices.length));
    
    // get value of the randomly chosen character and store it
    let char = charChoices[randomIndex];
  
    // add the randomly chosen character from the included array to the generated password
    generatedPassword.push(char);
  }

  console.log(generatedPassword);
  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
