

var products=[

    {id:1,title:"samasungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:35000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"moto edge 40",price:23000,brand:"moto"},
    {id:6,title:"moto ede40 neo",price:25000,brand:"moto"},
    {id:7,title:"iphone13",price:140000,brand:"apple"},
    {id:8,title:"iphone13pro",price:150000,brand:"apple"},
  
]

// total number of product
console.log(products.length);

// print all mobile title

var productName=products.map(p=> p.title)
console.log(productName);

// print all mobile name availble under rs 35k

var mobilePriceFilter=products.filter(p=> p.price<35000).map(p=> p.title)

console.log(mobilePriceFilter);

// print all samsung mobile availble under 50k

var samsungMobileFilter=products.filter(p=> p.brand == "samsung" && p.price < 50000).map(p=> p.title)
console.log(samsungMobileFilter);

// costly product

var costlyProduct=products.reduce((p1,p2)=> p1.price > p2.price ? p1 : p2)
console.log(costlyProduct.title);

// sort product with price ordered by desc

products.sort((p1,p2)=> p2.price - p1.price)
console.log(products.map(p=> p.title));

// product name available in price range of 25k - 35k

var priceFilter=products.filter(p=> p.price >= 25000 && p.price <= 35000).map(p=> p.title)
console.log(priceFilter);