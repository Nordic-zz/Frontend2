const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

const tableCard = document.getElementById("tableCard");
const player = document.getElementById("player");
const bank = document.getElementById("bank");
const scorePlayerDiv = document.getElementById("scorePlayer");
const scoreBankDiv = document.getElementById("scoreBank");
const result = document.getElementById("result");

let response = new Response;
let scorePlayer = 0;
let scoreBank = 0;
let aces = [];

const createCardPlayer = (img, value) => { 
    const cardImg = document.createElement("img");
    player.appendChild(cardImg);
    cardImg.src=img;
    scorePlayer += value;
    if (scorePlayer > 21) {        
        if (aces.length > 0) {
            scorePlayer -= 13;
            aces.pop();
        }
        if (scorePlayer > 21) {        
            result.innerHTML = 'The Bank wins!';
        }
    }
    scorePlayerDiv.innerText = 'Player: ' + scorePlayer;
}

const createCardBank = (img, value) => { 
    const cardImg = document.createElement("img");
    bank.appendChild(cardImg);
    cardImg.src=img;
    scoreBank += value;

    if (scoreBank < 17) {
        getNewCardBank();
    } else {        
        if (scoreBank > 21) {   
            if (aces.length > 0) {
                scoreBank -= 13;
                aces.pop();
            }
            if (scoreBank > 21) {   
                result.innerHTML = 'The Player wins!';
            }
        } else {
            if (scorePlayer > scoreBank) {        
                result.innerHTML = 'The Player wins!';
            } else {            
                result.innerHTML = 'The Bank wins!';
            }
        }
    }
    scoreBankDiv.innerText = 'Bank: ' + scoreBank;
}

translateCard = (card) => {
    switch (card) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
            card = card * 1;
            break;
        case 'JACK':
            card = 11;
            break;
        case 'QUEEN':
            card = 12;
            break;
        case 'KING':
            card = 13;
            break;
        case 'ACE':
            card = 14;
            aces[aces.length] = 'ACE';
            break;
        default:
            card = 0;
    }
    return card;
}

const getNewCardPlayer = () => {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            createCardPlayer(data.cards[0].image, translateCard(data.cards[0].value))
        })
}

const getNewCardBank = () => {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            createCardBank(data.cards[0].image, translateCard(data.cards[0].value))
        })
}

const restartGame = () => {
    player.innerHTML = '';
    bank.innerHTML = '';
    result.innerHTML = '';
    
    scorePlayer = 0;
    scoreBank = 0;
    scorePlayerDiv.innerText = 'Player: ' + scorePlayer;
    scoreBankDiv.innerText = 'Bank: ' + scorePlayer;
    
}

const cardClick = document.getElementById("cardBtn").addEventListener("click", getNewCardPlayer); 
const stopClick = document.getElementById("stopBtn").addEventListener("click", getNewCardBank); 
const newClick = document.getElementById("newBtn").addEventListener("click", restartGame); 