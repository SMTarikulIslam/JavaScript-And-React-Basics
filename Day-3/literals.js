// Feel the real power of template literals 
// Math Expression

let price = 500;
let quantity = 3;

console.log(
    `Total price: ${price* quantity} taka\n pay the price to get it as your own`
);

// function call 
function getDiscount(price){
    return price*0.1;
};

console.log(`You saved: ${getDiscount} taka\nYour total bill is now${price * quantity}`);


let stock = 1;
console.log(`Status: ${stock>0?"In stock"+ " " + stock : "Out of stock"}`);
