
var pointFrequency=1
function displayNumber(event){

    const operators=["+","-","*","/","."]

    var textBox=document.querySelector("#result") //textbox extraction method
    
    // extractacurrentExpression
    let currentExpression=textBox.value;

    // extractDisplayNumber
    let displayNumber=event.target.value

    if(displayNumber=="." && pointFrequency==1){

        pointFrequency=0
    }

    else if(displayNumber=="." && pointFrequency==0){

        return
    }

    if(operators.includes(displayNumber) && displayNumber!="."){

        pointFrequency=1
    }

    // extract last character from currentExpression
    let curExpLastChar=currentExpression.slice(-1)

    // check for displayNumber and curExpLastChar are operators
    if (operators.includes(displayNumber) && operators.includes(curExpLastChar)){

        // remove the last character from currectExpression
        currentExpression=currentExpression.slice(0,-1)

    }

    textBox.value=currentExpression+displayNumber

    
    




    // let num=event.target.value;

    // document.querySelector("#result").value+=num
}

function clearBox(event){

    document.querySelector("#result").value=(" ")

}

function removeLast(event){

    document.querySelector("#result").value

}

function evaluateExpression(){
    let currentExpression=document.querySelector("#result").value;

    let result=eval(currentExpression)

    if(result.toString().split("").includes(".")){
        pointFrequency=0
    }
    else{
        pointFrequency=1
    }

    document.querySelector("#result").value=result


}


function backSpace(){
    let currentExpression=document.querySelector("#result").value;

    let result=currentExpression.slice(0,-1)

    document.querySelector("#result").value=result
}

