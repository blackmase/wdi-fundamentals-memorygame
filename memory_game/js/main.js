console.log("Up and running!");
let cards = ["queen","queen","king","king"];
let cardOne =  cards[0];
let cardTwo = cards[1];
let cardsInPlay = []; 
cardsInPlay.push("queen"); cardsInPlay.push("king");
if (cardsInPlay.length === 2) {
   if (cardsInPlay[0] === cardsInPlay[1]) {
   	alert("You found a match!");
   }
   else {
   	alert("Sorry, try again.");
   }
} 
console.log("User flipped " + cardOne + " " + cardTwo);
