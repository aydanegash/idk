
 //welcome message
//var password= "";
//Array of different charachters that can be used in password
var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerCaseletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                        "o","p","q","r","s","t","u","v","w","x","y","z"];

var specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_",
                            "=","+",",",".","<",">","/","?",";",":"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var characterChoicesAll = capitalLetters,lowerCaseletters, specialCharacters, numbers;
var passwordtextbox = document.getElementById("password");
var passwordHolder = document.getElementById("passwordHolder");
var password = "";

// functin to create password 
var createNewPassword = function() {

    var choiceCreatePassword = alert("Get ready to get a new random computer generated password!");
    //var of the prompts/confirm so user can pick what characteristics their password has
var numberOfcharacters = prompt("Between 8 to 128 characters, how many charachters would you like your password to have?");
if(numberOfcharacters <8 || numberOfcharacters >128 ) {
    prompt("Password length must be between 8 and 128 charachters. How Many characters would you like your password to have?");   
} else {
    console.log("User password will be " + numberOfcharacters + " characters long.");  
};
 var length = numberOfcharacters;

// confirm for use of capital letters; console log user choice.
var useOfcapitalLetters = confirm("Click OK to include capital letters.");
if (useOfcapitalLetters === true){
    password += capitalLetters;
    console.log("Capital letters will be included.");
} else {
    console.log("Capital letters will NOT be included.");
};

//confirm for use of lower case letters; console log user choice.
var useOflowerCaseLetters = confirm("Click OK to include lower case letters.");
if (useOflowerCaseLetters === true){
    password += lowerCaseletters;
    console.log("Lowercase letters will be included.");
} else {
    console.log("Lowercase letters will NOT be included.");
};

//confirm for use of special charachters; console log user choice.
var useOfSpecialCharacters = confirm("Click OK to use special charachters.");
if (useOfSpecialCharacters=== true){
    password += specialCharacters;
    console.log("Special characters will be included.");
} else {
    console.log("Special characters will NOT be included.");
};

//confim for use of number; console log user choice.
var useOfNumbers = confirm("Click   OK to use numbers.");
if (useOfNumbers === true){
    password += numbers;
    console.log("Numbers will be included.");
} else {
    console.log("Numbers will NOT be included.");
};

console.log (passwordHolder.value = password(length.value, characterChoicesAll));




};


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
