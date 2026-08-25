/* SCOPE: JavaScript Scope
Layer1: Global Scope
Layer2: Local Scope 
Layer3: Function Scope
Layer4: Block Scope
*/

let age;
function sayAge(){
    age =21;

}

sayAge();
console.log(age);



if(true){
    let age;
}


function sayAge(){
    age = 21;
}

sayAge();
console.log(age);