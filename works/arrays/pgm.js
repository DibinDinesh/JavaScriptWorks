var arr=[12,13,14,15,16,17]

// print square of all numbers

function square(num) {
    return  num**2
}

var result =arr.map(square)

console.log(result);

// print cube of all numbers--------------------------------

function cube(num){
    return num**3
}
var cudeResult=arr.map(cube);

console.log(cudeResult);

