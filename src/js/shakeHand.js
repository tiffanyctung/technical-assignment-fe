const shakeHand = () => {
	const handWrap = document.querySelectorAll('.hand-wrap');
	
	handWrap.forEach(handImg=> {
		handImg.classList.add('shake');

		setTimeout(function() {
			handImg.classList.remove('shake');
		}, 1500);
	});
}

export default shakeHand;
