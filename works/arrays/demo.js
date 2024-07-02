
var expences=[10000,15000,45000,50000]
//              0      1    2     3

for (i=0; i<expences.length; i++){
    console.log(expences[i]);
    
}

// --------OR-----------------------
var str=expences.join(" ")

for (let exp of str){
}

console.log(str);

// /------------------------------------------------
// -------------OR---------------------------------

for (let exp of expences){
}

console.log(expences);

// -----------------------------------------------------

expences[0]=30000
console.log(expences);