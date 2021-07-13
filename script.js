// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    let revString = "";
    for (let i = 0; i < str.length + 1; i++) {
        revString += str.substr(str.length - [i], 1);

    }
    console.log(revString);
}


reverseString("antreas galanos");


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    let revString = "";
    for (let i = 0; i < str.length + 1; i++) {
        revString += str.substr(str.length - [i], 1);

    }
    if (str == revString) {
        return true;
    } else {
        return false;
    };
}

console.log(isPalindrome("racecar"))


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    let string = int.toString();

    let revString = "";
    for (let i = 0; i < string.length + 1; i++) {
        revString += string.substr(string.length - [i], 1);
    }
    revString = Number(revString);
    console.log(revString)
}

reverseInt(123456789);


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    str.split(" ");
    console.log(str)
    for (let i = 0; 0 < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase()
    }
    str.join(" ");
    console.log(str);
}

capitalizeLetters("i love javascript");