// Optional chaining a Nullish coalescing (?...,??, Safe property access)

let user1 ={
    name: "Rahim",
    address: {
        city: "Dhaka",
    },
}

let user2 ={
    name: "karim",
    //no address
};
// optional chaining ?
console.log(user1?.address?.city);
console.log(user2?.address?.city);

//nullish collescing ??

console.log(user2?.address?.city?? "Barishal");
