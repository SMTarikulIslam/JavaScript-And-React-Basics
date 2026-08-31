//mini_project 

let students =[
    { id:101, name:"Tarikul", age:20, department: "CSE"},
    { id:102, name: "Islam", age: 22, department: "EEE"},
];

function addStudnet(name, age, dept){
   let newID = students.length>0? students[students.length-1].id+1 :101 ;

   let newStudent = {
    id: newID,
    name: name,
    age: age, 
    department: dept,
   };
   students.push(newStudent);
   console.log("Student added successfully");
}

addStudnet("Fahim", 25, "AI");
console.log(students);

function getAll(){
    for (const student of students){
        console.log(student);
    }
}

getAll();

function findStudent(id){
    let foundStudent = null;

    for (let student of students){
        if(student.id == id){
            foundStudent = student;
            break;
        }

    }

    if(foundStudent){
        console.log("Found student: ", foundStudent); 
    }
    else{
        console.log("404 not found");
    }
}

findStudent(102);


function deleteStudent(id){
   let targetStudent = -1;
   for (let i =0; i<students.length; i++){
    if (students[i].id ==id){
        targetStudent = i;
        break;
    }
   }
    if(targetStudent!= -1){
        let deletedStudent = students.splice(targetStudent, 1); 
        console.log(`deleted ${deletedStudent[0].name} id:${targetStudent} deleted`)
    }
    else{
        console.log("404 not found");
    }
}

deleteStudent(101);
getAll();

