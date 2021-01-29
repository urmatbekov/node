const products = [
    {name:"mandarin",price:145},
    {name:"pamidor",price:120},
    {name:"kivi",price:45},
    {name:"badyryn",price:15},
    {name:"kapusta",price:20},
]

const cheapProducts = products.filter((item)=> item.price < 70)
console.log(cheapProducts.length)