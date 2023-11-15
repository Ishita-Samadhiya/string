/**
 * length: Should return the length of a string
 * slice( ): Returns a piece of a string
 * replace( ):Replaces the first instance of a matching character in a string
 * replaceAll( ): Replaces all instances of a matching character in a string
 * concat( ): Merges two strings together
 * charAt( ): Lets you access a character from a string
 */
var str = "PookieBear5000";
function length(str){
    var len =0;
    for(var i =0; i<str.length; i++){
        len++;
    }
    return len;
}
console.log("Orgiinal: ", str);
console.log("Length: ", length(str));

function charAt(str, index){
    if (index >= 0 && index < str.length) {
        return str[index];
    } else {
        return ''; 
    }
}
var ind = 5;
console.log("Char at ", ind, ": ", charAt(str, ind));

function slice(str, begin, end){
    var slice = "";
    for(var i = begin; i<end; i++){
        slice += str[i];
    }
    return slice;
}
var begin = 6;
var end = 10;
console.log("The slice between ", begin, " and ", end, " is: ", slice(str, begin, end));

function replaceAll(str, replace, sym){
    var replaced = "";
    for(var i = 0; i<length(str); i++){
        if(str[i] === replace){
            replaced += sym;
        }else{
            replaced += str[i];
        }
    }
    return replaced;
}
var rep = "0";
var sym = "$";
console.log("After replacing all ", rep, " with ", sym, " the string is: ", replaceAll(str, rep, sym));

function replace(str, replace, sym){
    var replaced = "";
    var count =0;
    for(var i = 0; i<length(str); i++){
        if(str[i] === replace && count <1){
            replaced += sym;
            count ++;
        }else{
            replaced += str[i];
        }
    }
    return replaced;
}
console.log("After replacing the first ", rep, " with ", sym, " the string is: ", replace(str, rep, sym));

function concat(str, add){
    var joined = str;
    for(var i = 0; i<length(add); i++){
        joined += add[i];
    }
    return joined;
}
var add= "pookiepookay";
console.log(str, " joined with ", add, " is: ", concat(str, add));