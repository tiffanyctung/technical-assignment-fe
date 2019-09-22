const titleScreen = () => {
	const heading = document.querySelector('.title-screen h1');
	const inputField = document.querySelector('.title-screen input');
	const btnWrap = document.querySelector('.title-screen .btn-wrap');

	// Fade In Animation

	window.onload = () => {
		const fadeInAni = (item, delay) => {
			setTimeout(function() {
				item.classList.add('fadeIn');
			}, delay);
		};

		fadeInAni(heading, 300);
		fadeInAni(inputField, 600);
		fadeInAni(btnWrap, 900);
	};
}

export default titleScreen;
