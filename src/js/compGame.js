import shakeHand from './shakeHand';
import resultScreen from './resultScreen';

const compGame = () => {
	let comp1Score = 0;
	let comp2Score = 0;

	let playerImg = document.querySelector('.player-img img');
	let compImg = document.querySelector('.comp-img img');

	let comp1Value = 'rock';
	let comp2Value = 'rock';

	// Both Sides Options

	const comp1Options = ['rock', 'paper', 'scissors'];
	const comp2Options = ['rock', 'paper', 'scissors'];
	const result = document.querySelector('.lightbox-wrapper');
	const resultWords = document.querySelector('.lightbox-wrapper h1');
	const compGameBtn = document.querySelector('.comp-game');
	const playerGameBtn = document.querySelector('.option-wrap');
	compGameBtn.style.display = 'block';
	playerGameBtn.style.display = 'none';

	// Change Score

	const changeScore = () => {
		const comp1ScoreWrap = document.querySelector('.player-score h1');
		const comp2ScoreWrap = document.querySelector('.comp-score h1');

		comp1ScoreWrap.textContent = comp1Score;
		comp2ScoreWrap.textContent = comp2Score;
	}
	
	changeScore();

	// Player Choose Option

	compGameBtn.onclick = () => {
		const comp1Random = Math.floor(Math.random() * 3);
		const comp1Value = comp1Options[comp1Random];
		const comp2Random = Math.floor(Math.random() * 3);
		const comp2Value = comp2Options[comp2Random];

		battle(comp1Value, comp2Value);
		shakeHand();

		setTimeout(function(){
			changeImg(comp1Value, comp2Value);
		}, 1500);
		
		setTimeout(function() {
			resultScreen();
		}, 2000);
	}

		const changeImg = (comp1Value, comp2Value) => {
			playerImg.src = `./src/img/${comp1Value}.png`;
			compImg.src = `./src/img/${comp2Value}.png`;
		}

		const battle = (comp1Value, comp2Value) => {
			// Draw Case

			if(comp1Value === comp2Value) {
				result.classList.add('draw');
				resultWords.innerHTML = "It's a Draw";
				return;
			}

			// Rock Case

			if(comp1Value === 'rock') {
				if(comp2Value === 'scissors') {
					result.classList.add('win');
					resultWords.innerHTML = "Computer 1 Wins!";
					comp1Score++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				} else {
					result.classList.add('lose');
					resultWords.innerHTML = "Computer 2 Wins!";
					comp2Score++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				}
			}

			// Paper Case

			if(comp1Value === 'paper') {
				if(comp2Value === 'rock') {
					result.classList.add('win');
					resultWords.innerHTML = "Computer 1 Wins!";
					comp1Score++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				} else {
					result.classList.add('lose');
					resultWords.innerHTML = "Computer 2 Wins!";
					comp2Score++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				}
			}

			// Scissors Case

			if(comp1Value === 'scissors') {
				if(comp2Value === 'paper') {
					result.classList.add('win');
					resultWords.innerHTML = "Computer 1 Wins!";
					comp1Score++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				} else {
					result.classList.add('lose');
					resultWords.innerHTML = "Computer 2 Wins!";
					comp2Score++;
					setTimeout(function() {
						changeScore();
					}, 2000);
					return;
				}
			}
		}

		// Players Name

		const compNames = () => {
			const comp1Name = document.querySelector('.left-wrap .score-wrap p');
			const comp2Name = document.querySelector('.right-wrap .score-wrap p');

			comp1Name.textContent = 'Computer 1';
			comp2Name.textContent = 'Computer 2';
		}

		compNames();

		// Restart

		const restart = () => {
			const titleScreen = document.querySelector('.title-screen');
			const gameScreen = document.querySelector('.game-screen');
			const restartBtn = document.querySelector('.restart-btn');
			let errorMsg = document.querySelector('.title-screen .error-msg');

			restartBtn.onclick = () => {
				titleScreen.classList.remove('fadeOut');
				gameScreen.classList.remove('fadeIn');
				comp1Score = 0;
				comp2Score = 0;
				comp1Value = 'rock';
				comp2Value = 'rock';
				playerImg.src = './src/img/rock.png';
				compImg.src = './src/img/rock.png';
				errorMsg.textContent = '';
			}
		}

		restart();
}

export default compGame;
