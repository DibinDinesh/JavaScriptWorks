
var num =11;

var isPrime=true

for (i=2;i<num;i++){

    if (num%i==0){

        isPrime=false

        break

    }
}

console.log(isPrime);