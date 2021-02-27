
 alert("Would you like to create a random computer generated password?");



//var of the prompts/confirm so user can pick what charachteristics their password has
var numberOfcharachters = prompt("Between 8 to 16 charachters, how many charachters would you like your password to have?");

var useOfcapitalLetters = confirm("Would you like to include capital letters?");

var useOflowerCaseLetters = confirm("Would you like to include lower case letters?");

var useOfSpecialCharachters = confirm("Would you like to use special charachters?");

var useOfNumbers = confirm("Would you like to use numbers?");


//Random computer choices for the charachters
var index = Math.floor(Math.random() * capitalLetters.length)
capitalLetters[index]

var index = Math.floor(Math.random() * lowerCaseletters.length)
lowerCaseletters[index]

var index = Math.floor(Math.random() * specialCharachters.length)
specialCharachters[index]

var index = Math.floor(Math.random() * numbers.length)
numbers[index]


 

//Array of different charachters that can be used in password
var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerCaseletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                        "o","p","q","r","s","t","u","v","w","x","y","z"];

var specialCharachters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_",
                            "=","+",",",".","<",">","/","?",";",":"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

 