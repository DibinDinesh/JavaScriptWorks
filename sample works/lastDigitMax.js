var num1=167;

var num2=872;

if (num1%10 > num2%10){

    console.log(num1,"is largest");
}
else{

    console.log(num2,"is largest");

}

// --------OR----------------

var num1=167;

var num2=872;

console.log(num1%10 > num2%10 ? num1 : num2,"is largest");

// ----------------OR------------------------


var num1=167;

var num2=872;

var num1lastDigit=num1%10;

var num2lastDigit=num2%10;

if (num1lastDigit>num2lastDigit){

    console.log(num1lastDigit,"is largest");
}
else{

    console.log(num2lastDigit,"is largest");

}


