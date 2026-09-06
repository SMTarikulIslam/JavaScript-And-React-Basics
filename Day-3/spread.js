// Spread operator - three Dot 
// let newArr = [...oldArr]
// let newObj = {...oldObj}

let cart = ["fruits", "rice"];
//cart.push("egg");

let cart2 = [...cart, "egg"];
console.log(cart, cart2);


const personalInfo ={
    name: "samad",
    age: 22,
};

const contactInfo ={
    email:"smtarikulislam@gmail.com",
    phone: "01840066478"
};

const fullProfile = {
    ...personalInfo, 
    ...contactInfo,
    zip : 1212,
};

console.log(fullProfile);

