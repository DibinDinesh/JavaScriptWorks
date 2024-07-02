
var str1="ABCDE"

var str2="abcdef"
// AaBbCcdef
var mergedString=""

for (let i=0; i<str1.length; i++ ){
    mergedString+=str1[i]+str2[i];
    
}

console.log(mergedString);

// ----------------------------------------



// To achieve the desired output of merging str1 and str2 alternately, you can adjust the loop to iterate over both strings simultaneously. However, since the lengths of str1 and str2 might not be equal, you need to ensure that you handle the case where one string is longer than the other. Here's the corrected code:

var str1 = "ABCDE";
var str2 = "abcdef";
var mergedString = "";

// Determine the length of the shorter string
var minLength = Math.min(str1.length, str2.length);

// Merge strings alternately up to the length of the shorter string
for (let i = 0; i < minLength; i++) {
    mergedString += str1[i] + str2[i];
}

// If one string is longer than the other, append the remaining characters
if (str1.length > str2.length) {
    mergedString += str1.slice(minLength);
} else if (str2.length > str1.length) {
    mergedString += str2.slice(minLength);
}

console.log(mergedString);

// -----------------------------------------------

let text1 = "Hello";
let text2 = "world!";
let text3 = "Have a nice day!";
let result = text1.concat(" ", text2, " ", text3);
console.log(result);

// -----------------------------------------------