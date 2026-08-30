let student ={
    studentName: "Rahim",
    id: 102,
    marks: {
        bangla: 75,
        english: 82,
        math: 90,
    },
};

let totalMarks = 0;
let totalSubject = 0;
for (const subject in student.marks){
    totalMarks += student.marks[subject];
    totalSubject++;
}

console.log(totalMarks, totalSubject);


let avg = (totalMarks / totalSubject).toFixed(2);


if (avg>=80){
    console.log("Passed with distinction. Got  ", avg, "%");
}
else {
    console.log ("Fail korche porashunai focus dite hobe");
}

// Task: koto gulo iteam kinchen and koto tk bill hoyeche shese BDT te dekhate hobe print kore:



let cart = [
    { productName: "Shirt", price: 1200, quantity: 2 },
    { productName: "Pants", price: 1800, quantity: 1 },
    { productName: "Socks", price: 150, quantity: 3 },
];

let totalItems = 0;
let totalBill = 0;

cart.forEach(item => {
    totalItems += item.quantity;
    totalBill += item.price * item.quantity;
});

console.log("Total Items:", totalItems);
console.log("Total Bill:", totalBill + " BDT");
