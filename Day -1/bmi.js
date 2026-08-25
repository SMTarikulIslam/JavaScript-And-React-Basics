// input from terminal

const weight = process.argv[2];
const height = process.argv[3];

function calculateBMI(weight, height){
    const bmi = weight / (height * height);
    return bmi;
}

console.log(calculateBMI(weight, height));


// bmi er opor depend WHO er bmi koto hole take underweight, overweight, fit. Either the person is under weight or overweight or fit. 