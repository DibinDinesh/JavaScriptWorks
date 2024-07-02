
var arr=[10,11,12,13,14,15]

var result=arr.map((num)=>num**2)
console.log(result);

var cubes=arr.map((n1)=>n1**3)
console.log(cubes);


// if num<12 num-1
//  if num>12 num+1
// if num 12 12

var mapes=arr.map((num)=>num<12 ? num-1 : num>12 ? num+1 : num)
console.log(mapes);

