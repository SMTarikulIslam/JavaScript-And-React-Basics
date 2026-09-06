//rest : rest is add more value in function
//function

function add(...numbers){
    //console.log(numbers);

    let total = 0;
    for (const sum of numbers){
        total += sum;
    }
    return total;
}

// console.log(add(1,2,3,4,5,6,100));
// object 
const obj = {
    name : "Tonmoy",
    age: 27,
    address: "Dhaka",
    occupation: "Developer",
}

const {name,...remaining} = obj;
//consol.log(remaining);
// array
const arr =[1,2,3,100,200];
const [, , , ...rest] = arr;
console.log(rest);

function something(one, ...something){
    console.log(one, remaining);
}

console.log(something("first",1,2,3,4,5,6,7));

