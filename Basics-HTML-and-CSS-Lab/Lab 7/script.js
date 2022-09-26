// Init
const btnClick = document.getElementById('btn1');
btnClick.addEventListener('click', nextTask);
let task = 0;
const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");
const task3 = document.getElementById("f1");
const output = document.getElementById("output");

// Functions
const calcCube = () => {
    let cube = task3.bredd.value * task3.hojd.value * task3.djup.value;
    output.innerHTML = "Kubens volym är "  + cube + " liter";
}

// Show result
function nextTask(){
    switch (++task){
     case 1:
        task1.innerHTML = ("Denna paragraf är ny och fräsch");
        break;

    case 2:
        task2.href = "https://google.com";
        task2.innerHTML = "Länk till google.com";
        task = 0;
        break;
    }
};

