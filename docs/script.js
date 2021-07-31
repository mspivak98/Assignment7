const Celsius = '99';
const Fahrenheit = (Celsius*1.8 + 32);
let result1= `The celsius is ${Celsius}°C converted to Fahrenheit it is ${Fahrenheit} °F`;
console.log(result1);
const Fahren = '99';
const Cel = (Fahren/1.8 - 32);
let result2=`The fahrenheit is ${Fahren}°F converted to Celsius it is ${Cel}°C`;
console.log(result2);

const massLucas= 78;
const heightLucas= 1.69;

const massJohn=92;
const heightJohn=1.95;

const BMILucas=massLucas/heightLucas*2;
const BMIJohn=massJohn/heightJohn*2;
let BMILucasR=`Lucas's BMI is ${BMILucas}`;
let BMIJohnR=`John's BMI is ${BMIJohn}`;
console.log(BMILucasR,BMIJohnR);
const LucasHigherBMI=BMILucas>BMIJohn;
if (BMILucas>BMIJohn) {
    console.log('Lucas has the higher BMI');
}
else {
    console.log('John has the higher BMI')
}



const NetsAverage1= (296/3);
const KnicksAverage1= (289/3);
let NetsAverage= `The Nets had an average score of ${NetsAverage1}`;
let KnicksAverage=`The Knicks had an average score of ${KnicksAverage1}`
console.log (NetsAverage,KnicksAverage);
if (NetsAverage1>KnicksAverage1) {
    console.log('The Nets won');
}
else if (NetsAverage1=KnicksAverage1) {
    console.log('Its a draw');
}
else {
    console.log ('The Knicks Win')
}
console.log ('Bonus 1');
let NetsAverage2= (310/3);
let KnicksAverage2=(327/3);
let NetsAverage2R= `The Nets had an average score of ${NetsAverage2}`;
let KnicksAverage2R= `The Knicks had an average score of ${KnicksAverage2}`;
console.log (NetsAverage2R,KnicksAverage2R);
if (NetsAverage2>100) {
    console.log ('The Nets qualify to win with over 100 minimum points average');
}
if (KnicksAverage2>100) {
    console.log('The Knicks qualify to win with over 100 minimum points average');
}
if (NetsAverage2>KnicksAverage2){
    console.log('The Nets win')
}
else {
    console.log ('The Knicks win')
}
console.log ('Bonus 2');
let NetsAverage3 =(310/3);
let KnicksAverage3 =(310/3);
let NetsAverage3R= `The Nets had an average score of ${NetsAverage3}`;
let KnicksAverage3R= `The Knicks had an average score of ${KnicksAverage3}`;
console.log (NetsAverage3R,KnicksAverage3R);
if (NetsAverage3>100) {
    console.log ('The Nets qualify to win with over 100 minimum points average');
}
if (KnicksAverage3>100) {
    console.log('The Knicks qualify to win with over 100 minimum points average');
}
if (NetsAverage3=KnicksAverage3) {
    console.log ('Its a draw');
}
else if (NetsAverage3>KnicksAverage3) {
    console.log('The Nets win');
}
else {
    console.log ('The Knicks win');
}