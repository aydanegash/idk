
//Array of different characters that can be used in password
    var capitalLetters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

    var lowerCaseletters = ['abcdefghijklmnopqrstuvwxyz'];

    var specialCharacters = ['~!@#$%^&*+='];

    var numbers = ["1234567890"];
    
    var generateBtn = document.querySelector("#generate");
    
//writing new password
var writeNewaPassword = function() {
    var password = createNewPassword();
    var passwordHolder = document.querySelector("#passwordHolder");
    passwordHolder.value = password;
}; 


// functin to create password 
var createNewPassword = function() {
        var password ='';  
        var basePassword = [""];
        var choiceCreatePassword = alert("Get ready to get a new random computer generated password!");
        //var of the prompts/confirm so user can pick what characteristics their password has
        var length = prompt("Between 8 to 128 characters, how many characters would you like your password to have?");
            if(length <8 || length >128 ) {  
                prompt("Password length must be between 8 and 128 characters. How Many characters would you like your password to have?");   
            } else {
                console.log("User password will be " + length + " characters long.");  
        };

    // confirm for use of capital letters; console log user choice.
    var useOfcapitalLetters = confirm("Click OK to include capital letters.");
        if (useOfcapitalLetters === true){
            basePassword += capitalLetters;
            var randomCapitalLetter = function capitalLower() {
                return String.capitalLetters(Math.floor(Math.random() *26));
            }
            console.log("Capital letters will be included.");
        } else {
            console.log("Capital letters will NOT be included.");
        };

    //confirm for use of lower case letters; console log user choice.
    var useOflowerCaseLetters = confirm("Click OK to include lower case letters.");
        if (useOflowerCaseLetters === true){
            basePassword += lowerCaseletters;
            var randomLowerCaseLetter = function randomLower() {
                return String.lowerCaseletters(Math.floor(Math.random() *26));
            }
            console.log("Lowercase letters will be included.");
        } else {
            console.log("Lowercase letters will NOT be included.");
        };

    //confirm for use of special charachters; console log user choice.
    var useOfSpecialCharacters = confirm("Click OK to use special charachters.");
        if (useOfSpecialCharacters=== true){
            basePassword += specialCharacters;
            var randomSpecialCharacters = function randomSpecial() {
                return String.specialCharacters(Math.floor(Math.random() *10));
            }
            console.log("Special characters will be included.");
        } else {
            console.log("Special characters will NOT be included.");
        };

    //confim for use of number; console log user choice.
    var useOfNumbers = confirm("Click OK to use numbers.");
        if (useOfNumbers === true){
            basePassword += numbers;
            var randomNumbers= function randomNum() {
                return String.numbers(Math.floor(Math.random() *10));
            }
            console.log("Numbers will be included.");
        } else {
            console.log("Numbers will NOT be included.");
        };

        for (var i= 0; i < length; i++) {
            password += basePassword.charAt(Math.floor(Math.random() * basePassword.length));
        }
        
        return password;
};
 

    //console.log (passwordHolder.value = password(length.value, characterChoicesAll));
    

    // console.log(password(characterChoicesAll));
    // console.log(password.join(''));
    // return password.join('');


generateBtn.addEventListener("click", writeNewaPassword);
// console.log(generatePass(12, charactherChoicesAll));

// function generatePass(length, charactherChoicesAll) {
//     var password = "";
//     for (var i = 0; i<1; i++){
//         password += charactherChoicesAll.charAt(Math.floor(Math.random() * charactherChoicesAll.length));
//     }
//     return password;
// }; 

//https://www.youtube.com/watch?v=i6cX05cyIgc



//If user chooses to use capital letters


//if user chooses to use lower case letters


//if user chooses to use special charachters


//if user chooses to use numbers


// var createNewPasswordAgain = window.confirm("Would you like to create a new computer generated password again?");

// // If user pressed OK, run the function again
// if (createNewPasswordAgain) {
//   createNewPassword();
//     }
// };


//  //start over
