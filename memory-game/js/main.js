

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


let playerScore = 0;

let computerScore = 0;

function updateScore(score){

	return score + 1;
} 


let cardsInPlay = [];


function flipCard(){

	let cardId = this.getAttribute('data-id');

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src", cards[cardId].cardImage);

	if(cardsInPlay.length === 2){
	
	if (cardsInPlay[0] === cardsInPlay[1]){
		
		alert("You found a match!");

		playerScore = updateScore(playerScore);

		document.getElementById('player-score').innerHTML = playerScore;

		setTimeout (function(){reset()}, 1000);
		
		setTimeout (function(){createBoard()}, 1000);
	

		} else { alert("Sorry, try again");

		computerScore = updateScore(computerScore);

		document.getElementById('computer-score').innerHTML = computerScore;
		
		setTimeout (function(){reset()}, 1000);
		
		setTimeout (function(){createBoard()}, 1000);
		
		}
	}
}

function reset(){
 	
 	for (let i = 0; i < cards.length; i++){
 	
 	let cardPlayed = document.querySelector('img');
 	
 	document.getElementById('game-board').removeChild(cardPlayed);
	
	}
}


function shuffleCards(arr){

	let newOrder;

	for (let i = arr.length - 1; i > 0; i--){

		newOrder = Math.floor(Math.random() * (i + 1));

		temp = arr[i];

		arr[i] = arr[newOrder];

		arr[newOrder] = temp;
	}
	return arr;
}


function createBoard(){

	shuffleCards(cards);

	for (let i = 0; i < cards.length; i++){
    
    let cardElement = document.createElement('img');
    
    cardElement.setAttribute('src', "images/back.png");

    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);

    cardsInPlay = [];
	
	}
}

createBoard();