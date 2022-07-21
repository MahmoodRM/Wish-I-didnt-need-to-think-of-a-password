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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

function generatePassword() {
    
    characterLength= prompt(
        "How many characters would you like your password to contain?"
        )
    
    if (characterLength < 8 || characterLength > 128 || !characterLength.match(/^[0-9]+$/)) {
      console.log(characterLength)
      alert("Please select a valid number length, between 8 and 128 characters.")
      characterLength = prompt (
        "How many characters would you like your password to contain?"
        )
    }
        
      
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
    
    for (var i = 0; i < characterLength; i++) {
    
      var char = Math.floor(Math.random() * passwordChars.length)
      createdPassword += passwordChars[char]
    }
    return createdPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

