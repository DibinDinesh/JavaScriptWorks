
var str1="dcba";

var str2="bcad";

var sorttedstring1=str1.split("").sort().join("")

var sorttedstring2=str2.split("").sort().join("")

console.log(sorttedstring1);

console.log(sorttedstring2);

console.log(sorttedstring1==sorttedstring2 ? "anagram": " not anagram");