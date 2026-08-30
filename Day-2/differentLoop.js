// for of, for in

let techStack = ["JS", "TS", "node", "react", "psql"];

for(let tech of techStack){
    console.log("Leaning:", tech);
}

let obj = {
    name: "Mr.X",
    age: 100,
    address:"Dhaka",
};

for(let ele in obj){
    console.log(ele, "->", obj[ele]);
}

// Break statement
let marks =50;
for (let i = marks; i<=100; i++){
    if(i>60){
        break;
    }
    console.log(i);
}

// Continue statement

for (let i =1; i<15; i++){
    if(i%2 !=0){
        continue;
    }
    console.log(i); 
}