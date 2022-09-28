// Init

let band;
let felBand;

// Functions

//Can't use DOM before HTML is loaded
function init() {
    btn1 = document.getElementById("btn1");
    band = document.getElementById("band");
    felBand = document.getElementById("felBand");
}


// Evaluate form
const evalForm = () => {
    if (band.selectedIndex === 0) {
        band.style.borderColor = "red";
        felBand.innerHTML = null;
        return false;
    } else if (band.selectedIndex < 4) {
        band.style.borderColor = "red";
        felBand.innerHTML = "Ett BRA band vad det...!";
        return false;
    } else {           
        band.style.borderColor = "";
        felBand.innerHTML = null;
        return true;
    }
}

const setButton = () => {
    if (evalForm()) {
        btn1.style.backgroundColor = "green";
    } else {        
        btn1.style.backgroundColor = "red";
    }
    return false;
}


