const Celsius = '99';
const Fahrenheit = (Celsius*1.8 + 32);{
    console.log(Celsius + "°C" +"is" + Fahrenheit + "°F")
}

const Fahren = '99';
const Cel = (Fahren/1.8 - 32);{
    console.log(Fahren + "°F" +"is" + Cel + "°C" )
}
const massLucas= 78;
const heightLucas= 1.69;

const massJohn=92;
const heightJohn=1.95;

const BMILucas=massLucas/heightLucas*2;
const BMIJohn=massJohn/heightJohn*2;

const LucasHigherBMI=BMILucas>BMIJohn;

console.log("Lucas's BMI is" + BMILucas + "John's BMI is" + BMIJohn + "Lucas has a higher\n\ BMI than John that is" +LucasHigherBMI);

const NetsAverage1= 96+108+89/3;
const KnicksAverage1= 88+91+110/3;
const NetsWin=NetsAverage1>KnicksAverage1;
const KnicksWin=KnicksAverage1>NetsAverage1;

console.log ("Nets score average is" + NetsAverage1 + "Knicks score average is" + KnicksAverage1 + "Nets win is" + NetsWin + "Knicks win is" + KnicksWin);