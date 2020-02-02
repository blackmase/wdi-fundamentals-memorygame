console.log("Up and running!");
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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
function flipCard (){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {
	checkForMatch.call();
 } 
cardsInPlay.push(cards[cardId].rank);
console.log("user flipped" + cards[cardId].rank);
console.log(cardImage);
console.log(suit);
}
function createBoard (){
	for (let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();