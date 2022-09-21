
const btnClick = document.getElementById('btn1');
btnClick.addEventListener('click', nextTask);
let task = 0;
let arr = [];
init();

function init(){
    task = 0;
    arr = ["Putte", "Kalle", "Nisse", "Pelle", "Micke"]
}

function nextTask(){
    switch (++task){
     case 1:
        document.getElementById("output").innerHTML = ("Del " + task + " - Skapa en Array med fem namn:" + "<br><br>");
        document.getElementById("output").innerHTML += (arr + "<br><br>");
        break;

    case 2:
        document.getElementById("output").innerHTML = ("Del " + task + " - Ta bort \"Micke\" ur arrayen:" + "<br><br>");
        arr.pop();
        document.getElementById("output").innerHTML += (arr + "<br><br>");
        break;
        
    case 3:
        document.getElementById("output").innerHTML = ("Del " + task + " - Ändra \"Kalle\" till \"Micke\":" + "<br><br>");
        arr[1]="Micke";
        document.getElementById("output").innerHTML += (arr + "<br><br>");
        break;
        
    case 4:
        document.getElementById("output").innerHTML = ("Del " + task + " - Addera \"Jocke\":" + "<br><br>");
        arr.push("Jocke");
        document.getElementById("output").innerHTML += (arr + "<br><br>");
        break;
        
    case 5:
        document.getElementById("output").innerHTML = ("Del " + task + " - Sortera Arrayen i bokstavsordning:" + "<br><br>");
        arr.sort();
        document.getElementById("output").innerHTML += (arr + "<br><br>");
        break;
        
    case 6:
        document.getElementById("output").innerHTML = ("Del " + task + " - Vilken plats har \"Jocke\"?:" + "<br><br>");
        
        let ixJocke = arr.findIndex(hittaJocke);

        function hittaJocke(value) {
          return value === "Jocke";
        }

        document.getElementById("output").innerHTML += ("\"Jocke\" har plats " + ixJocke + "<br><br>");
        document.getElementById("output").innerHTML += (arr + "<br><br>");
        break;
    
    case 7:
        document.getElementById("output").innerHTML = ("Del " + task + " - Vi säger tack och hej till \"Jocke\":" + "<br><br>");
        arr.shift();
        document.getElementById("output").innerHTML += (arr + "<br><br>");
        break;

    case 8:
        document.getElementById("output").innerHTML = ("Del " + task + " - Skriv alla element i Consolen:" + "<br><br>");
        arr.forEach(namn => {            
            document.getElementById("output").innerHTML += (namn + "<br>");
            console.log(namn);
        });
        init();
        break;
    }
}