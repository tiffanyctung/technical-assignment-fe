import shakeHand from './shakeHand';
import resultScreen from './resultScreen';

const playerGame = () => {
	let playerScore = 0;
	let compScore = 0;

	let playerImg = document.querySelector('.player-img img');
	let compImg = document.querySelector('.comp-img img');

	let playerValue = 'rock';
	let compValue = 'rock';

	// Both Sides Options

	const compOptions = ['rock', 'paper', 'scissors'];
	const playerOptions = document.querySelectorAll('.option-wrap div');
	const result = document.querySelector('.lightbox-wrapper');
	const resultWords = document.querySelector('.lightbox-wrapper h1');
	const compGameBtn = document.querySelector('.comp-game');
	const playerGameBtn = document.querySelector('.option-wrap');
	compGameBtn.style.display = 'none';
	playerGameBtn.style.display = 'flex';

	// Change Score

	const changeScore = () => {
		const playerScoreWrap = document.querySelector('.player-score h1');
		const compScoreWrap = document.querySelector('.comp-score h1');

		playerScoreWrap.textContent = playerScore;
		compScoreWrap.textContent = compScore;
	}
	
	changeScore();

	// Player Choose Option

	playerOptions.forEach(option=> {
		option.onclick = () => {
			const playerValue = option.getAttribute('option');
			const compRandom = Math.floor(Math.random() * 3);
			const compValue = compOptions[compRandom];

			battle(playerValue, compValue);
			shakeHand();

			setTimeout(function(){
				changeImg(playerValue, compValue);
			}, 1500);
			
			setTimeout(function() {
				resultScreen();
			}, 2000);
		}

		const changeImg = (playerValue, compValue) => {
			playerImg.src = `./src/img/${playerValue}.png`;
			compImg.src = `./src/img/${compValue}.png`;
		}

		const battle = (playerValue, compValue) => {
			// Draw Case

			if(playerValue === compValue) {
				result.classList.add('draw');
				resultWords.innerHTML = "It's a Draw";
				return;
			}

			// Rock Case

			if(playerValue === 'rock') {
				if(compValue === 'scissors') {
					result.classList.add('win');
					resultWords.innerHTML = "You Win!";
					playerScore++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				} else {
					result.classList.add('lose');
					resultWords.innerHTML = "You Lose";
					compScore++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				}
			}

			// Paper Case

			if(playerValue === 'paper') {
				if(compValue === 'rock') {
					result.classList.add('win');
					resultWords.innerHTML = "You Win!";
					playerScore++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				} else {
					result.classList.add('lose');
					resultWords.innerHTML = "You Lose";
					compScore++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				}
			}

			// Scissors Case

			if(playerValue === 'scissors') {
				if(compValue === 'paper') {
					result.classList.add('win');
					resultWords.innerHTML = "You Win!";
					playerScore++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				} else {
					result.classList.add('lose');
					resultWords.innerHTML = "You Lose";
					compScore++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				}
			}
		}
	});

	// Players Name

	let userInput = document.querySelector('.title-screen input');
	let username = userInput.value;

	const playerNames = () => {
		const playerName = document.querySelector('.left-wrap .score-wrap p');
		const compName = document.querySelector('.right-wrap .score-wrap p');

		playerName.textContent = username;
		compName.textContent = 'Computer';
	}

	playerNames();

	// Restart

	const restart = () => {
		const titleScreen = document.querySelector('.title-screen');
		const gameScreen = document.querySelector('.game-screen');
		const restartBtn = document.querySelector('.restart-btn');
		let errorMsg = document.querySelector('.title-screen .error-msg');

		restartBtn.onclick = () => {
			titleScreen.classList.remove('fadeOut');
			gameScreen.classList.remove('fadeIn');
			playerScore = 0;
			compScore = 0;
			playerValue = 'rock';
			compValue = 'rock';
			playerImg.src = './src/img/rock.png';
			compImg.src = './src/img/rock.png';
			username = '';
			userInput.value = username;
			errorMsg.textContent = '';
		}
	}

	restart();
}

export default playerGame;
