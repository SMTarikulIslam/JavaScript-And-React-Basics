let students =[
    {name: "Rahim", marks: 85},
    {name: "karim", marks: 45},
    {name: "Fahim", marks: 70},
]

let fruits = ["Apple", "Banana", "Mango", "Jackfruit"];
//find
let customFruits = fruits.find((f)=> f.length>5);
console.log(customFruits);

let findFr = fruits.includes("Mango"); //true false
console.log(findFr);

let studentCheck = students.every((s)=>s.marks>40);
console.log(studentCheck);