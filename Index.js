let cardsArray = [];
let isAlive = false;
let sum = 0;
let message = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let Player = document.getElementById("player-el");
let hasblackjack = false;
const player = {
  name: "Victor",
  chips: `100$`,
};

Player.textContent = player.name + " :" + player.chips;

function startGame() {
  isAlive = true;
  let firstcard = getRandomcard();
  let secondcard = getRandomcard();
  cardsArray = [firstcard, secondcard];
  sum = firstcard + secondcard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cardsArray.length; i++) {
    cardsEl.textContent += cardsArray[i] + " ";
  }
  sumEl.textContent = "Sum:" + sum;
  sum <= 20
    ? (message.textContent = " Do you want to draw a newcard")
    : sum === 21
    ? ((message.textContent = "You have blackjacked"), (hasblackjack = true))
    : ((message.textContent = "game over"), (isAlive = false));
}
function getRandomcard() {
  let randy = Math.floor(Math.random() * 13) + 1;
  if (randy === 1) {
    return 11;
  } else if (randy > 10) {
    return 10;
  } else {
    return randy;
  }
}

function newCard() {
  if (isAlive === true && hasblackjack === false) {
    let card = getRandomcard();
    sum += card;
    cardsArray.push(card);
    renderGame();
  }
}



// const airbnb = [
//   {
//     name: "Intercontinetal Hotel",
//     price: 2000,
//     fullyBooked: true,
//     hasAircondition: false,
//     customers: 50,
//   },
//   {
//     name: "continetal Hotel",
//     price: 1000,
//     fullyBooked: false,
//     hasAircondition: true,
//     customers: 1000,
//   },
//   {
//     name: "Premier Hotel",
//     price: 5000,
//     fullyBooked: false,
//     hasAircondition: false,
//     customers: 3000,
//   },

// ];

// airbnb.map((i)=>{
//     console.log()
//     console.log(i.name);
//     console.log(i.customers);
// })

// let hands = ["rocks", "paper", "scissor"];

// function random() {
//   let randy = Math.floor(Math.random() * 3);
//   return hands[randy];
// }

//  console.log(random());

