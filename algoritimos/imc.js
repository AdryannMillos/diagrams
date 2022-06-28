function imc(weight, height) {
let square = height * height;
let calc = weight / square;

calc = calc.toFixed(2);

if(calc < 18.6){
console.log(`Seu imc é ${calc}, você está desnutrido`);
}
else if(calc < 24.9 && calc >= 18.6){
    console.log(`Seu imc é ${calc}, você está no peso ideal`);
}
else{
    console.log(`Seu imc é ${calc}, você está com sobrepeso`);
}
}

imc(60, 1.60)