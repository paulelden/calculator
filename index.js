// constants and variables

const bgColor = '2e91ca';
const buttonColor1 = '1A281F';
const buttonColor2 = 'orangered';
const fontColor = 'FCEFF9';

const clearButton = document.getElementById('clearButton');
const deleteButton = document.getElementById('delete');
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

 
// listeners

clearButton.addEventListener('click', clear);
