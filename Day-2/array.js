// Array

let nickName =["Tarikul", "Islam", "Rifat", "Emon", "Sayem", "Kibria"];
let number = [100,200,300,400,450,655];
console.log(nickName);
console.log(number);
console.log(nickName[2], nickName[4], number[5]);

nickName.push("Arif");
nickName.push("Pranto");
nickName.push("Ishtiaq");

console.log(nickName);
nickName.pop();
nickName.pop();
console.log(nickName);

nickName.unshift("Farsit");
console.log(nickName);

nickName.shift();
console.log(nickName);

nickName.splice(1,0,"Abul");
console.log(nickName);

nickName.splice(2,1,"DeshiMula");
console.log(nickName);