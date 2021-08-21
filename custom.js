let road = document.querySelector('#road'),
	vCar = document.querySelector('#vCar'),
	score = 0;
document.addEventListener('animationiteration', () => {
	let randomNumber = Math.floor(Math.random() * 2) * 100;
	let randomNumbe2r = Math.floor(Math.random() * 2) * 10;
	vCar.style.backgroundImage = randomNumbe2r == 10 ? "url(villian.png)" : "url(villian3.png)";
	vCar.style.left = randomNumber + 'px';
});
var carPosition = 2;
const btn = document.querySelector('#road');
btn.addEventListener('click', function (e) {
	if (carPosition % 2) {
		document.querySelector("#ourCar").style.left = "100px"
		carPosition -= 1;
	} else {
		document.querySelector("#ourCar").style.left = "0px"
		carPosition += 1;
	}
});
let CheckStatus = () => {
	setInterval(function () {
		let vCar = document.querySelector('#vCar'),
			ourCar = document.querySelector('#ourCar');
		let villainLeft = parseInt(window.getComputedStyle(vCar).getPropertyValue('left'));
		let villainTop = parseInt(window.getComputedStyle(vCar).getPropertyValue('top'));
		let ourCarPos = parseInt(window.getComputedStyle(ourCar).getPropertyValue('left'));
		console.log(villainLeft);
		console.log(villainTop);
		console.log(ourCarPos);
		score++;
		document.querySelector("#score").innerHTML = `Score: ${score}`;
		if (ourCarPos == villainLeft && villainTop > 400) {
			//  document.querySelector('body').style.display = 'none';
		}
	}, 2000);

}

CheckStatus();

/* Data Fetch */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var autoData = JSON.parse(this.responseText);
		document.querySelector('h1').innerHTML = autoData.title,
			document.querySelector(".game-btn").innerHTML = autoData.btnTxt,
			document.querySelector(".header-link").href = autoData.aLink[0],
			document.querySelector("h2").innerHTML = autoData.vehicle.carTitle,
			document.querySelector(".reduced").innerHTML = autoData.vehicle.innerTxt,
			document.querySelector(".model").innerHTML = autoData.vehicle.carModel,
			document.querySelector(".kms").innerHTML = autoData.vehicle.kms;
		switch (autoData.country) {
			case 2:
				document.querySelector(".price").innerHTML = autoData.vehicle.price[1];
				document.querySelector('.start-img').src = autoData.logoUrl[1];
				break;
			case 7:
				document.querySelector(".price").innerHTML = autoData.vehicle.price[2];
				document.querySelector('.start-img').src = autoData.logoUrl[2];
				break;
			default:
				document.querySelector(".price").innerHTML = autoData.vehicle.price[0];
				document.querySelector('.start-img').src = autoData.logoUrl[0];
		}
		document.querySelector(".start-img").src = autoData.vehicle.carUrl,
			document.querySelector(".vehicle-link").href = autoData.aLink[1];
		

	}

};
xmlhttp.open("GET", 'data.json', true);
xmlhttp.send();
var listNew = document.querySelector('.lists').childNodes;
setTimeout(() => {

	const TimeFinc = (val) => {
		setTimeout(() => {
			//	console.log(listNew[val]);
			listNew[val].style.opacity = 1;
		}, 150 * val);

	}
	for (var i = 0; i < listNew.length; i++) {
		TimeFinc(i);
	}




}, 1000);





