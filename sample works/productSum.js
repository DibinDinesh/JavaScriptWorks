
var num=153;

var original=num;

var total=0;

while(num!=0){

    let digit=(num%10);

    total=total+digit**3


    num=Math.floor(num/10);


}
console.log(total);
console.log(original==total ? "armstrong" : "not armstrong");

// -----OR---------------


var num=155;

var total=0;

while(num!=0){

    let digit=(num%10);

    let cube=digit**3

    num=Math.floor(num/10);

    total=total+cube

}
console.log(total);

// -----------------OR----------------
// -------squre using number count----------------------


var num=9484;

var original=num;

var total=0;

var num_count=String(num).length

while(num!=0){

    let digit=(num%10);

    total=total+digit**num_count


    num=Math.floor(num/10);


}
console.log(total);
console.log(original==total ? "armstrong" : "not armstrong");
