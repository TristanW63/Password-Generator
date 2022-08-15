//Dom elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const ranadomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
    const length = lengthEl.ariaValueMax;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length);
});

// generate password function

function generatePassword(lower, upper, number,symbol,length){
    let generatePassword ='';

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}];

    console.log('typesArr: ', typesArr);

}


// generator funcitions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*()_+-=,.<>/{}[]';
    return symbols[Math.floor(Math.random() * symbols.length)];
}