
var weightInKg=75 ;
var heightIncm=165;

var heightInMeter=heightIncm/100;

var bmi=Math.round(weightInKg/(heightInMeter**2));

console.log(bmi);

if (bmi>=30){
    console.log(bmi,"Obese");
}

else if(bmi<30){
    console.log(bmi,"OverWeight");
}
else if(bmi<25){
    console.log(bmi,"Normal");
}
else if(bmi<19){
    console.log(bmi,"UnderWeight");
}