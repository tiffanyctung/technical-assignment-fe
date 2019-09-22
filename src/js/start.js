import playerGame from './playerGame';
import compGame from './compGame';

const start = () => {
	const startBtn = document.querySelector('.title-screen #start-btn');
	const compBtn = document.querySelector('.title-screen #comp-btn');
	const titleScreen = document.querySelector('.title-screen');
	const gameScreen = document.querySelector('.game-screen');
	let userInput = document.querySelector('.title-screen input');

	// Enter the Game Screen

	const changePage = () => {
		titleScreen.classList.add('fadeOut');
		gameScreen.classList.add('fadeIn');
	}

	// Enter Player Game

	startBtn.onclick = () => {
		let username = userInput.value;
		let errorMsg = document.querySelector('.title-screen .error-msg');

		if(username === '') {
			errorMsg.textContent = 'Please enter your name';
		} else {
			changePage();
			playerGame();
		}

		console.log(username);
	}

	// Enter Computer Game

	compBtn.onclick = () => {
		changePage();
		compGame();
	}
}

export default start;