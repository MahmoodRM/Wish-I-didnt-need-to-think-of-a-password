// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Variable Section
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordReturn = document.querySelector ("#password");
var generator = document.querySelector ("#generate");

// Generate Function
function createPassword () {

var password = "";
var passwordSelect = "";

//Character Length Selection
var passwordLength = window.prompt ("What length would you like your password to be?");
    if (
// Character Validity Checker
    passwordLength >128 ||  passwordLength <8 ) { window.alert ("Please enter a valid number, between 8 and 128.");
    return;}
// Include Number Selection
var characterSettings0 = window.confirm ("Include numbers?");
    console.log (characterSettings0);

    if (characterSettings0) {passwordSelect += numbers;} 
    console.log (passwordSelect);
// Include Special Character Selection      
var characterSettings1 = window.confirm ("Include special characters?");
    console.log (characterSettings1);

    if (characterSettings1) {passwordSelect += special;} 
    console.log (passwordSelect);
// Include Lowercase Letters Selection      

var characterSettings2 = window.confirm ("Include lowercase letters?");
    console.log (characterSettings2);

    if (characterSettings2) {passwordSelect += lowercase;} 
    console.log (passwordSelect);
// Include Uppercase Letters Selection      
var characterSettings3 = window.confirm("Include uppercase letters?");
    console.log (characterSettings3);

    if (characterSettings3) {passwordSelect += uppercase;} 
    console.log (passwordSelect);

// Has the Minimum Criteria Been Met?
    
    if (passwordSelect === "") {window.alert("You must choose at least one option of character types to include!");}

// Character Randomizer Functions

    if (passwordLength >8 && passwordLength <128) {
    for (var i = 0; i < passwordLength; i++) {
    password += passwordSelect.charAt(Math.floor(Math.random() * passwordSelect.length));};
              
// place this generated password in the local storage
    localStorage.setItem ("password", password);
var password = localStorage.getItem ("password");
    console.log (password);
    return password;
    };
    };

// Push Information Back to HTML Textbox

    function displayPassword () {
var password = createPassword ();
var passwordReturn = document.querySelector ("#password");
    passwordReturn.value = password;
    };

// Link to Generator Element
var generator = document.querySelector ("#generate");

// Event Listener to HTML Generate Button
    generator.addEventListener("click", displayPassword);