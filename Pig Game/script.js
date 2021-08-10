'use strict';

// Initialize the starting conditions
const scores = [0,0];
let currentScore = 0; 
let activePlayer = 0;
let isPlaying;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');


const init = () => {
	//Setting the values to 0 for player 1 and player 2. 
	//Also hide the dice shown when opening the page
	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;
	diceEl.classList.add('hide');
	isPlaying = true;
};


const switchPlayer = () => {
		document.getElementById(`current--${activePlayer}`).textContent = 0; // set the current point is 0 for the current player as he rolled dice as 1
		currentScore = 0; // set the score as 0 
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;	// If the current player is 0 then change it to 1 otherwise	
		player0El.classList.toggle('player--active'); // toggle will remove if the class is available or it will add if the class is unavailable
		player1El.classList.toggle('player--active'); //player--active is the class here which toggle between the players to hold the session
};



init();

//Click on New Game 

btnNew.addEventListener('click', function () {
	init();
});


//Click on Roll Dice button

btnRollDice.addEventListener('click', function () {
	if(isPlaying) {
		//1. Generate the random number for dice
		const diceRollingNumber = Math.trunc(Math.random() * 6 ) + 1;
		// console.log(`Rolled number is ${diceRollingNumber}`); 

		//2. Display the dice with the generated number
		diceEl.classList.remove('hide');
		diceEl.src = `dice-${diceRollingNumber}.png`
		
		//3. Check the rolled dice is 1 or not. if it is 1, 
		//then it should set the current point is 0 for the player
		if(diceRollingNumber !== 1) {
			currentScore += diceRollingNumber;
			//Add the generated number to current point for the player who is playing now
			document.getElementById(`current--${activePlayer}`).textContent = currentScore;
			// current0El.textContent = currentScore; // This needs to be changed for each player

		}else { // switch the player
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', function () {
	//1. Save the current point to the player
	scores[activePlayer] += currentScore; // scores[0] = scores[0] + activePlayer
	document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

	//2. Check if the score more than 100
	if(scores[activePlayer] >= 20) {
		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		//btnRollDice.classList.add('hide');
		//btnHold.classList.add('hide');
		isPlaying = false;
	}

	//3. Switch the players
	switchPlayer();

});

