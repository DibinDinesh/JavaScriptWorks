
var colors=["red","green","blue","yellow"]

var colorsCopy=[...colors,"cyan","purple"]// ... spread operator,without using that create a same reference

// colors.pop() //-remove last element

console.log(colors);
console.log(colorsCopy);

var user={name: "hari" , email : "hari@gmail.com",password:"password@123",isActive:true}
var userCopy={...user}
    
userCopy.isActive=false
console.log(user) ;
console.table (userCopy)


var product={id:1,name: "m32" , brand : "samsung@",price:12000,isActive:false}

var productCopy={...product,isActive:true}

console.log(productCopy);
console.table (product)

