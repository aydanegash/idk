
 //welcome message
var password= "";
//Array of different charachters that can be used in password
var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerCaseletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                        "o","p","q","r","s","t","u","v","w","x","y","z"];

var specialCharachters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_",
                            "=","+",",",".","<",">","/","?",";",":"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var charactherChoicesAll = capitalLetters,lowerCaseletters, specialCharachters, numbers;


// functin to create password 
var createNewPassword = function() {

    var choiceCreatePassword = alert("Get ready to get a new random computer generated password!");
    //var of the prompts/confirm so user can pick what characteristics their password has
var numberOfcharachters = prompt("Between 8 to 128 characters, how many charachters would you like your password to have?");
if(numberOfcharachters <8 || numberOfcharachters >128 ) {
    prompt("Password length must be between 8 and 128 charachters. How Many characters would you like your password to have?");   
} else {
    console.log("User password will be " + numberOfcharachters + " characters long.");  
};
 var length = numberOfcharachters;

// confirm for use of capital letters; console log user choice.
var useOfcapitalLetters = confirm("Click OK to include capital letters.");
if (useOfcapitalLetters === true){
    console.log("Capital letters will be included.");
} else {
    console.log("Capital letters will NOT be included.");
};

//confirm for use of lower case letters; console log user choice.
var useOflowerCaseLetters = confirm("Click OK to include lower case letters.");
if (useOflowerCaseLetters === true){
    console.log("Lowercase letters will be included.");
} else {
    console.log("Lowercase letters will NOT be included.");
};

//confirm for use of special charachters; console log user choice.
var useOfSpecialCharachters = confirm("Click OK to use special charachters.");
if (useOfSpecialCharachters=== true){
    console.log("Special characters will be included.");
} else {
    console.log("Special characthers will NOT be included.");
};

//confim for use of number; console log user choice.
var useOfNumbers = confirm("Click   OK to use numbers.");
if (useOfNumbers === true){
    console.log("Numbers will be included.");
} else {
    console.log("Numbers will NOT be included.");
};


function generatePass() {
    for (i=0;i<len;i++) {
        password+=capitalLetters.charAt(Math.floor(Math.random()*capitalLetters.length));
        password+=lowerCaseletters.charAt(Math.floor(Math.random()*lowerCaseletters.length));
        password+=specialCharachters.charAt(Math.floor(Math.random()*specialCharachters.length));
        password+=numbers.charAt(Math.floor(Math.random()*numbers.length));
    };

    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    console.log(password);
    return password;
};


};





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
