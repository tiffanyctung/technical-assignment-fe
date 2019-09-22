const resultScreen = () => {
	const result = document.querySelector('.lightbox-wrapper');
	const restartBtn = document.querySelector('.lightbox-wrapper .btn');
	
	result.classList.add('fadeIn');

	restartBtn.onclick = () => {
		result.classList.remove('fadeIn', 'win', 'lose', 'draw');
	}
}

export default resultScreen;
