
// smartsub(10,5)=> 5
// smartsub(5,10)=> 5


function smartSub(num1,num2){
    return num1>num2 ? num1-num2:num2-num1;
}

console.log(smartSub(5,10));