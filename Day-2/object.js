// Object 

let user = {
    userName: "Tarikul",
    age: 25,
    Address: "Dhaka",
};
console.log(user.userName);

delete user.Address;
console.log(user);

user.address = {
    city: "Barishal",
    area: "Jhalokathi",
};

console.log(user);

console.log(Object.entries(user));
console.log(Object.keys(user));