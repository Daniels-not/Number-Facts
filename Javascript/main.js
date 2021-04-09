let numberInput = document.getElementById('numberInput');
let fact = document.getElementById('fact');
let facttext = document.getElementById('facttext');

numberInput.addEventListener('input', getfactnumber);

function getfactnumber() {
	let number = numberInput.value;
	try {
		fetch('http://numbersapi.com/' + number)
			.then(response => response.text())
			.then(data => {
				if (number != '') {
				fact.style.display = 'block';
				facttext.innerText = data;
				}
			})
	} catch(error) {
		// statements
		console.log(error);
	}
}

//get the year fact `http://numbersapi.com/${number}/year`