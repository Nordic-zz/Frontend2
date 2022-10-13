const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
let response = new Response;
let cardDiv = document.createElement("div");
let cardImg = document.createElement("img");
cardDiv.appendChild(cardImg);
document.body.appendChild(cardDiv);

const createCard = (img) => {    
    cardImg.src=img;
}

const getNewCard = () => {
    console.log("getNewCard")
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            createCard(data.cards[0].image)
        })
}

const btnClick = document.getElementById("myBtn").addEventListener("click", getNewCard); 