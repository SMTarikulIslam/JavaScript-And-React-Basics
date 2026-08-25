// if else, switch case, ternary.

// if else example with age: 

let age = 15;


if (age>=18){
    console.log("voter");
}
else{
    console.log("Not a voter");
}





let marks = 70;


// if else 

if (marks>=80){
    console.log("A+");
}
else if(marks >= 70){
    console.log("A");
}
else if(marks >= 60){
    console.log("A-");
}

else{
    console.log("Need Improvement");
}

//switch case

switch(true){
    case marks>=80:
        console.log("A+");
        break;
    case marks>=70:
        console.log("A");
        break;
    case marks>=60:
        console.log("A-");
        break;
    default:
        console.log("Need Improvement");
        break;
}

//ternary condition ? true: false;


age>18? console.log("voter"): console.log("Not voter");