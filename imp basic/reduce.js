var arr=[10,11,12,13,14,15,16]

// largest-----------------------------------

var largest=arr.reduce((n1,n2)=>n1>n2 ? n1 : n2)
console.log(largest);

// min--------------------------------------

var numMin=arr.reduce((n1,n2)=>n1<n2 ? n1 : n2)
console.log(numMin);

// -------------TOTAL---------------------

var tot=arr.reduce((num1,num2)=>num1+num2)
console.log(tot);

// -----------PRODUCT--------------------

var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product);

