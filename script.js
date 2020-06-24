// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // GIVEN I need a new, secure password
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// generatePassword function should be below, which RETURNS the password variable at the bottop which is passed into the function above
function generatePassword() {

  // Password Prompt
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // in this case, we should probably use a function to turn the length into a number
  var passwordLength = parseInt(prompt("How many characters will this password be?"));

  // Password length will fail if greater than 128, less than 8 and is Not a number. Will loop until user gets it right. 
  // we need a prompt here and ask for the length from the user
  // check IF the input number is < 8 and > 128 
  while( passwordLength > 128 
    || passwordLength < 8 
    || isNaN(passwordLength)){
    passwordLength = parseInt(prompt("Please choose a number greater than 8 and less than 128 for your password length."));
  }

    // Boolean to pass into for each desired character type. 
    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    // we need a confirm to ask the user if they want to use lowercase
    // we need a confirm to ask the user if they want to use uppercase
    // we need a confirm to ask the user if they want to use numeric
    // we need a confirm to ask the user if they want to use special characters
    var specialCharacters = confirm("Would you like to use Symbols?");
    var numbers = confirm("How about numbers?");
    var caseLower = confirm("Lower case letters?");
    var caseUpper = confirm("Upper case letters?");

    // While loop that works if all above variables are false, loops until user gets it right.
    // THEN my input should be validated and at least one character type should be selected
    // each prompt needs to be validated...
    while(!caseUpper && !caseLower && !numbers && !specialCharacters){
      alert("Password will not be strong enough, please select one parameter.");
      var specialCharacters = confirm("Would you like to use Symbols?");
      var numbers = confirm("How about numbers?");
      var caseLower = confirm("Lower case letters?");
      var caseUpper = confirm("Upper case letters?");
    }
  // Variables with all characters possilbe to be selected
  // end of "collected all the data here" *************************
  // using the number from above and the 4 booleans
    var special = ["!","@","#","$","%","^","&","*"];
    var nombre = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // This is THE variable that facilitates the whole process.
    var useable = [];

    if (specialCharacters === true){
      useable = useable.concat(special);
    }
    if (numbers === true){
      useable = useable.concat(nombre);
    }
    if (caseLower === true){
      useable = useable.concat(lower);
    }
    if (caseUpper === true){
      useable = useable.concat(upper);
    } 

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // all the information is gathered (all prompts are finished getting input)
  // all the HARD logic goes here ????????

  for (var i = 0; i < passwordLength; i++){
    var pwGenerator = useable[Math.floor(Math.random()*useable.length)]
    password = password + pwGenerator;
    console.log(password)
  }
  // return password
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // either do an alert with password... or just check to see if my variable has a password
return(password)
// *********************** end function logic **********************

}

// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
