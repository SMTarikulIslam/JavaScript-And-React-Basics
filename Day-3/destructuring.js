//Destructuring 
const student ={
    name: "Nadim",
    age: 20,
    address: "Dhaka"
}

// old
const oldName = student.name

// New 
const {age, address, name} = student;

console.log(name);
const student1 ={
    name : "Rahim",
    age: 20,
    address: {
        city: "Dhaka",
        zip : 1212,
    },
    hobbies : ["Gardening", "Painting"],
}

const{
    name, address: {city: stdCity}, hobbies:{firsthobby}
} = student1;

console.log(firsthobby, stdCity);

//Nested and name alias;
const {
    name:stuName,
    address:{city, zip},
}  = student1;

console.log(name);

const arr =["Red", "Green", "Black"];

const [first, second, third] = arr;
console.log(second);
console.log(third);