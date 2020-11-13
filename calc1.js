const input = document.getElementById('input_field');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('#symbol');
const result = document.getElementById('result');
const reset = document.getElementById('reset');


for (i=0; i<numbers.length; i++){
	numbers[i].addEventListener('click', screenDisplay)
}

function screenDisplay(e){
	input.innerText += e.target.innerText;
}

for (i=0; i<operators.length; i+=1){
	operators[i].addEventListener('click', operation);
}

function operation(e) {
	let screenInput = e.target.innerText;
	let timesIndex = operators[0].innerText;
	let divideIndex = operators[1].innerText;
	
	if (screenInput === timesIndex) {
		screenInput = timesIndex.replace(timesIndex, '*');
	}else if (screenInput === divideIndex) {
		screenInput = divideIndex.replace(divideIndex, '/');
	}
	
	input.innerText += screenInput;
}

result.addEventListener('click', equation);

function equation(e){
	
	if (e.target.innerText === '=' && input.innerText === ''){
		input.innerText = [''];
	}else if ('*' === input.innerText[0] || '/' === input.innerText[0]){
		input.innerText = 'MathError';
	}else{
		input.innerText = eval(input.innerText);
	}
}

reset.addEventListener('click', clear);

function clear(){
	input.innerText = '';
}
