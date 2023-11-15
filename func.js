/**
 * length: Should return the length of a string
 * slice( ): Returns a piece of a string
 * replace( ): Replaces the first instance of a matching character in a string
 * replaceAll( ): Replaces all instances of a matching character in a string
 * concat( ): Merges two strings together
 * charAt( ): Lets you access a character from a string
 */

// Initialize the string to be used throughout the code
var str = "PookieBear5000";

// Function to calculate the length of a string
function length(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        len++;
    }
    return len;
}

// Test the length function
console.log("Original: ", str);
console.log("Length: ", length(str));

// Function to get a character at a specific index in a string
function charAt(str, index) {
    if (index >= 0 && index < str.length) {
        return str[index];
    } else {
        return ''; // Return an empty string for out-of-bounds index
    }
}

// Test the charAt function
var ind = 5;
console.log("Char at ", ind, ": ", charAt(str, ind));

// Function to get a slice of a string between specified indices
function slice(str, begin, end) {
    var slice = "";
    for (var i = begin; i < end; i++) {
        slice += str[i];
    }
    return slice;
}

// Test the slice function
var begin = 6;
var end = 10;
console.log("The slice between ", begin, " and ", end, " is: ", slice(str, begin, end));

// Function to replace all occurrences of a character in a string
function replaceAll(str, replace, sym) {
    var replaced = "";
    for (var i = 0; i < length(str); i++) {
        if (str[i] === replace) {//replace wherever the letter is = replace
            replaced += sym;
        } else {
            replaced += str[i];
        }
    }
    return replaced;
}

// Test the replaceAll function
var rep = "0";
var sym = "$";
console.log("After replacing all ", rep, " with ", sym, " the string is: ", replaceAll(str, rep, sym));

// Function to replace the first occurrence of a character in a string
function replace(str, replace, sym) {
    var replaced = "";
    var count = 0;
    for (var i = 0; i < length(str); i++) {
        if (str[i] === replace && count < 1) {
            replaced += sym;
            count++;//add to count makes sure only reutrns first time
        } else {
            replaced += str[i];
        }
    }
    return replaced;
}

// Test the replace function
console.log("After replacing the first ", rep, " with ", sym, " the string is: ", replace(str, rep, sym));

// Function to concatenate two strings
function concat(str, add) {
    var joined = str;
    for (var i = 0; i < length(add); i++) {
        joined += add[i];
    }
    return joined;
}

// Test the concat function
var add = "pookiepookay";
console.log(str, " joined with ", add, " is: ", concat(str, add));
