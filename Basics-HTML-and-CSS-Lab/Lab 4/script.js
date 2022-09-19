
var Tal = 
    {
        num1:Number, 
        num2:Number, 
    };
    
Tal.num1 = prompt("Tal 1");
Tal.num2 = prompt("Tal 2");

// variablerna tappar typen efter "prompt", detta återställer datatypen till Numeric för att beräkna summan korrekt
var sum = Tal.num1 * 1 + Tal.num2 * 1;

document.getElementById("output").innerHTML = (Tal.num1 + " + " + Tal.num2 + " = " + sum + "<br>");
document.getElementById("output").innerHTML += (Tal.num1 + " - " + Tal.num2 + " = " + (Tal.num1 - Tal.num2) + "<br>");
document.getElementById("output").innerHTML += (Tal.num1 + " * " + Tal.num2 + " = " + (Tal.num1 * Tal.num2) + "<br><br>");
document.getElementById("output").innerHTML += (Tal.num1 + " plus " + Tal.num2 + " är " + sum + "<br><br>");

console.log(Tal.num1 + " + " + Tal.num2 + " = " + sum);
console.log(Tal.num1 + " - " + Tal.num2 + " = " + (Tal.num1 - Tal.num2));
console.log(Tal.num1 + " + " + Tal.num2 + " = " + (Tal.num1 * Tal.num2));
console.log(Tal.num1 + " plus " + Tal.num2 + " är " + sum);

var Person = 
    {
        fname:String, 
        lname:String, 
        age:Number
    };

Person.fname = prompt("Förnamn");
Person.lname = prompt("Efternamn");
Person.age = prompt("Ålder");

console.log("Hej! Mitt namn är " + Person.fname + " " + Person.lname + " och jag är " + Person.age + " år gammal.");
document.getElementById("output").innerHTML += ("Hej! Mitt namn är " + Person.fname + " " + Person.lname + " och jag är " + Person.age + " år gammal.");
