var arr=["program","project","profile","profession","django","python"]


arr.sort((w1,w2)=>w1.length - w2.length )
console.log(arr);

// ---------SHORTEST--------------------

var shor=arr.reduce((w1,w2)=> w1.length< w2.length ? w1 : w2)
console.log(shor);


