var num=135;

var sum=0

while(num!=0){

    let digit=num%10;

    

    num=Math.floor(num/10)

    sum=sum+digit


}

console.log(sum);
