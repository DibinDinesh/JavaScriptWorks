var text="pneumonoultramicroscopicsilicovolcanoconiosis"

var vowels="aeiou"
var vowelCount=0

var consonantCount=0

for (let ch of text){

    if (vowels.includes(ch)){
        vowelCount+=1
    }
    else{
        consonantCount+=1
    }

    
}

console.log(`vowelCount=${vowelCount}`);
console.log("consonantCount=",consonantCount);
console.log("Total Characters",text.length);