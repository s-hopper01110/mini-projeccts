//Background color change project
function colorRandomizer() {
	let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	return randomColor;
}

function randomizerButton() {
	document.getElementById('colorChange').style.backgroundColor = colorRandomizer();
}

//Quote Generator Project:
let quotes = [
	'Love For All, Hatred For None. – Khalifatul Masih III',
	'Every moment is a fresh beginning. – T.S Eliot',
	'Simplicity is the ultimate sophistication. – Leonardo da Vinci',
	'All limitations are self-imposed. – Oliver Wendell Holmes',
	'All limitations are self-imposed. – Oliver Wendell Holmes',
	'Yesterday you said tomorrow. Just do it. – Nike'
];

function quoteRandomizer() {
	let randomQuote = Math.floor(Math.random() * quotes.length);
	document.getElementById('quoteInput').innerHTML = quotes[randomQuote];
}

//Increment/Decrement Counter Project:
//Decrement:
let a = 0; //note: global variable
document.getElementById('numericalDisplay').innerHTML = a;


function decrementButton() {
	let b = (a -= 1);
	document.getElementById('numericalDisplay').innerHTML = b;
    
	if (b < 0) {
		document.getElementById('numericalDisplay').style.color = '#d5f7f3';
	}
}

function incrementButton() {
    let c = (a += 1);
    document.getElementById('numericalDisplay').innerHTML = c;
    
    if (c > 0) {
        document.getElementById('numericalDisplay').style.color = '#dec1f6'
    }
}
