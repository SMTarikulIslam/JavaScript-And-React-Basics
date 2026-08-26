// Object inside object


let user = {
    userName: "Tarikul",
    age: 25,
    Address: {
    city: "Barishal",
    area: "Jhalokathi",
    zipcode: 8403,
    },
};


console.log(user["Address"]["zipcode"]);
console.log(user.Address.zipcode);


let entry = Object.entries(user);
console.log(entry[0][1]);

let students = [
    {
        studentName: "Fahim",
        id: 102, 
    },

    {
        studentName: "Shahim",
        id: 103, 
        Address: {
            area: "Badda",
            thana: "Vatara", 
            lane: "Embassy lane"
        },
    },
];

console.log(students[2].studentName);
