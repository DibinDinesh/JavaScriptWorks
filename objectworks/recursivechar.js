
var text="ABCBDDE"

wc={}

for (let ch of text){
    if (ch in wc){
        console.log(ch,"Is first recursive character");
        break
    }
    else{
        wc[ch]=1
    }
}