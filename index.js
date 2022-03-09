// constants and variables

const bgColor = '2e91ca';
const buttonColor1 = '1A281F';
const buttonColor2 = 'orangered';
const fontColor = 'FCEFF9';

const clearButton = document.getElementById('clearButton');
const deleteButton = document.getElementById('deleteButton');
const addButton = document.getElementById('addButton');
const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const zeroButton = document.getElementById('zeroButton');
const dotButton = document.getElementById('dotButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const enterButton = document.getElementById('enterButton');
const display = document.getElementById('display');

display.textContent = '1.75 / 2';

// functions

function add(a,b) {
    return (a + b);
}

function subtract(a,b) {
   return (a - b);
}

function multiply(a,b) {
    return (a * b);
}

function divide(a,b) {
    return (a / b);
}

function clear() {
   display.textContent = '0';
}

function del() {
    switch(display.textContent) {
        case '0':
            display.textContent = '0';
            break;
        case '1':
            display.textContent = '0';
            break;
        case '2':
            display.textContent = '0';
            break;
        case '3':
            display.textContent = '0';
            break;
        case '4':
            display.textContent = '0';
            break;
        case '5':
            display.textContent = '0';
            break;
        case '6':
            display.textContent = '0';
            break;
        case '7':
            display.textContent = '0';
            break;
        case '8':
            display.textContent = '0';
            break;
        case '9':
            display.textContent = '0';
            break;
        default:
            display.textContent = display.textContent.slice(0, -1);
    }
}

function decimal() {
    let char = display.textContent.slice(-1);
    if (char === '.') {
        // pass
    } 
    else {
        display.textContent += '.';
    }
}

function zero() {
    if (display.textContent === '0') {
        // pass
    }
    else {
        display.textContent += '0';
    }
}

function one() {
    if (display.textContent === '0') {
        display.textContent = '1';
    }
    else {
        display.textContent += '1';
    }
}

function two() {
    if (display.textContent === '0') {
        display.textContent = '2';
    }
    else {
        display.textContent += '2';
    }
}

function three() {
    if (display.textContent === '0') {
        display.textContent = '3';
    }
    else {
        display.textContent += '3';
    }
}

function four() {
    if (display.textContent === '0') {
        display.textContent = '4';
    }
    else {
        display.textContent += '4';
    }
}

function five() {
    if (display.textContent === '0') {
        display.textContent = '5';
    }
    else {
        display.textContent += '5';
    }
}

function six() {
    if (display.textContent === '0') {
        display.textContent = '6';
    }
    else {
        display.textContent += '6';
    }
}

function seven() {
    if (display.textContent === '0') {
        display.textContent = '7';
    }
    else {
        display.textContent += '7';
    }
}

function eight() {
    if (display.textContent === '0') {
        display.textContent = '8';
    }
    else {
        display.textContent += '8';
    }
}

function nine() {
    if (display.textContent === '0') {
        display.textContent = '9';
    }
    else {
        display.textContent += '9';
    }
}

function operate(){
    let result;
    let arr = display.textContent.split(" ");
    switch (arr[1]) {
        case '+':
            result = add(parseFloat(arr[0]), parseFloat(arr[2]));
            break;
        case '-':
            result = subtract(parseFloat(arr[0]), parseFloat(arr[2]));
            break;
        case '*':
            result = multiply(parseFloat(arr[0]), parseFloat(arr[2]));
            break;
        case '/':
            if(arr[2] === '0'){
                alert("Try again! Cannot divide by zero.")
            }
            else{
                result = divide(parseFloat(arr[0]), parseFloat(arr[2]));
            }  
            break;
    }
    display.textContent = "" + parseFloat(result.toFixed(10));
}

// listeners

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', del);
dotButton.addEventListener('click', decimal);

zeroButton.addEventListener('click', zero);
oneButton.addEventListener('click', one);
twoButton.addEventListener('click', two);
threeButton.addEventListener('click', three);
fourButton.addEventListener('click', four);
fiveButton.addEventListener('click', five);
sixButton.addEventListener('click', six);
sevenButton.addEventListener('click', seven);
eightButton.addEventListener('click', eight);
nineButton.addEventListener('click', nine);

enterButton.addEventListener('click', operate);
