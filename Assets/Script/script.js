// Variables
var generateBtn = document.querySelector("#generate")

var lCaseChars = "abcdefghijklmnopqrstuvwxyz"
var uCaseChars = "ABCDEFGHIJKLMNOPQRSTUZWXYZ"
var numberChars = "0123456789"
var specialChars = "!#$%&'()[]{}*+-_.,:;<=>?@^`~"

var passwordChars = ""
var createdPassword = ""

var characterLength 
var lowercase 
var uppercase 
var numbers 
var special 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// Password generating function
function generatePassword() {
    
    characterLength= prompt("How many characters would you like your password to contain?");
    
    // terminates prompt if cancel is chosen
    if (!characterLength) {
        return;
    }

    // criteria for password length
    // While loops to prevent prompt bypassing the requirements if repeated
    while (characterLength < 8) {
        console.log(characterLength)
        alert("Password must be atleast 8 characters.");
        characterLength= prompt(
            "How many characters would you like your password to contain?"
            )
    }
     
    while (characterLength > 128) {
        console.log(characterLength)
        alert("Password must not exceed 128 characters.");
        characterLength= prompt(
            "How many characters would you like your password to contain?"
            )
    }

    // ensures that a number is written and not a character
    while (!characterLength.match(/^[0-9]+$/)) {
        console.log(characterLength)
        alert("Please select a valid number length.");
        characterLength= prompt(
            "How many characters would you like your password to contain?"
            )
    }

        
    // Confirmations of criteria for character types 
    lowercase = confirm(
        "Would you like your password to contain Lowercase characters?"
    )
    uppercase = confirm(
        "Would you like your password to contain Uppercase characters?"
    )
    numbers = confirm (
        "Would you like your password to contain Numbers?"
    )
    special = confirm (
        "Would you like your password to contain Special characters?"
    )

    // Adds selected characters to var containing all desired characters
    if (lowercase) {
      passwordChars += lCaseChars
    }
    if (uppercase) {
      passwordChars += uCaseChars
    }
    if (numbers) {
      passwordChars += numberChars
    }
    if (special) {
        passwordChars += specialChars
    }
    
    console.log (passwordChars)

    // Returns a random password with desired characters
    for (var i = 0; i < characterLength; i++) {
    
      var char = Math.floor(Math.random() * passwordChars.length)
      createdPassword += passwordChars[char]
    }
    return createdPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

