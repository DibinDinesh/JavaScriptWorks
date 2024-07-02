
// Array{
//     push
//     pop
//     unshift-add object to the beginning
//     shift -remove the element from starting
//     includes-
// }


var colors=["green","red","blue"]

console.log(colors);

colors.push("yellow")//color push to last
console.log(colors);
// ----------------POP----------------------------
var popped_obj=colors.pop()//remove last element

console.log(colors);

// ------------------SHIFT------------------------------

colors.shift()
console.log(colors);
// ----------------UNSHIFT--------------
colors.unshift("green")
console.log(colors);
// -------------INCLUDES------------------

console.log(colors.includes("red"));

// ----------------------------------------------