// Init
const btnClick = document.getElementById('btn1');
btnClick.addEventListener('click', nextTask);
let task = 0;
const output = document.getElementById("output");

// Functions
const hello = () => {console.log("Hello World!");}
const greet = (namn) => {console.log("Hej " + namn + ", hur mår du?");}
const calc = (tal1, tal2) => {return tal1 * tal2}
const tip = (notan, dricks) => {return notan * (dricks/100 + 1)}

// Show result
function nextTask(){
    switch (++task){
     case 1:
        hello();
        output.innerHTML = ("Hello World!" + "<br><br>");
        break;

    case 2:
        let namn = prompt("Vad heter du?");
        greet(namn);
        output.innerHTML = ("Hej " + namn + ", hur mår du?" + "<br><br>");
        break;
        
    case 3:
        let tal1 = prompt("Ange två tal" + "\n" + "Tal1");
        let tal2 = prompt("Tal 2");

        output.innerHTML = (tal1 + " * " + tal2 + " = " + calc(tal1, tal2) + "<br><br>");
        break;
        
    case 4:
        let notan = prompt("Lägg till dricks på notan, vad slutade kalaset på?");
        let dricks = prompt("Hur många procent vill du ge i dricks?");
        //since you can't convert a String to localeString(!) we need to convert the string to number first
        notan = +notan;
        
        output.innerHTML = (
            "<pre>" 
            + "Restaurant IN I DIMMAN"
            + "<br>"
            + "======================"
            + "<br><br>"
            + "Nota" + "\t" + notan.toLocaleString("sv-SE", {style: "currency", currency: "SEK"})
            + "<br>"
            + "Dricks" + "\t" + dricks + "%"
            + "<br>"
            + "______________________"
            + "<br>"
            + "Totalt" + "\t" + tip(notan, dricks).toLocaleString("sv-SE", {style: "currency", currency: "SEK"}) 
            + "<br>"
            
            + "______________________"
            + "</pre>"
        );
        task = 0;
        break;
    }
}

