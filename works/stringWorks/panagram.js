var text="The quick brown fox jumps over the lazy dog".toLowerCase()

var alpha="abcdefghijklmnopqrstuvwxyz".toLowerCase()

var isPanagram=true;

for (let ch of alpha){
    if(!text.includes(ch)){

        ispanagram=false
        break

    }
}
console.log(isPanagram);