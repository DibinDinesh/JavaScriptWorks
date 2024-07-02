
var arr=["program","project","profile","profession","django","python"]

// convert all object to uppercase----------------------

var upperCaseStrings=arr.map(w=>w.toUpperCase())
console.log(upperCaseStrings);

//  print length of each string  object in the array-------------------

var stringLength=arr.map(w=>w.length)
console.log(stringLength);


// --------------------------------------------------------
// --------------------------------------------------------

// return words starting with "pro"

var startsWiths=arr.filter(w=>w.startsWith("pro"))

console.log(startsWiths);