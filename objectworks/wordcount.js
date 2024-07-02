
var text="hello hai hello hai hello hello"

wc={}

text.split("").map(w => w in wc ? wc[w]+=1 : wc[w]=1)

console.log(wc);

// // ==============OR-------------------------

// for (let w of text){
//     w in wc ? wc[w]+=1 : wc[w]=1
// }
// console.log(wc);