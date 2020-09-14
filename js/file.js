const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMult = document.getElementById('buttonMult');
const buttonSplit = document.getElementById('buttonSplit');

function onButtonPlusClick() {
	const input1 = document.getElementById('number1');
	const input2 = document.getElementById('number2');
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);
	const result = number1 + number2;
	alert(`Получится число ${result}`);
}

function onButtonMinusClick() {
	const input1 = document.getElementById('number1');
	const input2 = document.getElementById('number2');
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);
	const result = number1 - number2;
	alert(`Получится число ${result}`);
}

function onButtonMultClick() {
	const input1 = document.getElementById('number1');
	const input2 = document.getElementById('number2');
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);
	const result = number1 * number2;
	alert(`Получится число ${result}`);
}

function onButtonSplitClick() {
	const input1 = document.getElementById('number1');
	const input2 = document.getElementById('number2');
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);
	const result = number1 / number2;
	alert(`Получится число ${result}`);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMult.addEventListener('click', onButtonMultClick);
buttonSplit.addEventListener('click', onButtonSplitClick);
