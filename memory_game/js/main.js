console.log("Up and running!");
let cards = ["queen","queen","king","king"];
let cardsInPlay = []; 
let cardOne =  cards[0];
cardsInPlay.push(cardOne); 
console.log("User flipped " + cardOne);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
function checkForMatch (){
   if (cardsInPlay[0] === cardsInPlay[1]) {
   	alert("You found a match!");
   }
   else {
   	alert("Sorry, try again.");
   }

}
function flipCard (cardId){
	flipCard.call(0);
	flipCard.call(2);
if (cardsInPlay.length === 2) {
	checkForMatch.call();
 } 
console.log("user flipped" + cards[cardId]);
cardsInPlay.push(cards[cardId]);
}
