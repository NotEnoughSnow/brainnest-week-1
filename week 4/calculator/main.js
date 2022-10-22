
const addBtn = document.querySelector("#add");
const multiplyBtn = document.querySelector("#multiply");
const substractBtn = document.querySelector("#substract");
const divideBtn = document.querySelector("#divide");

const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");

const equalBtn = document.querySelector("#equal");
const inputField = document.querySelector("#input");
const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#back");

let firstNum;
let secondNum;
let op;
let result;

let sum = (a,b) => a+b;
let substract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;

let operate = (a,b,op) =>  op(a,b);

function updateInputField(){
    firstNum = parseInt(inputField.value);
    inputField.focus();
}

function evaluate(parameters){
    let evaluatedParams = parameters;

    let i = evaluatedParams.indexOf(sum);
    let result = operate(evaluatedParams[i-1],evaluatedParams[i+1],evaluatedParams[i]);
    console.log("index "+i);
    console.log("result "+result);

    evaluatedParams.insert(i+2,result);

    return result * evaluate(evaluatedParams)
}

zeroBtn.addEventListener("click", () => {
    inputField.value += 0;

});
oneBtn.addEventListener("click", () => {
    inputField.value += 1;
});
twoBtn.addEventListener("click", () => {
    inputField.value += 2;
});
threeBtn.addEventListener("click", () => {
    inputField.value += 3;
});
fourBtn.addEventListener("click", () => {
    inputField.value += 4;
});
fiveBtn.addEventListener("click", () => {
    inputField.value += 5;
});
sixBtn.addEventListener("click", () => {
    inputField.value += 6;
});
sevenBtn.addEventListener("click", () => {
    inputField.value += 7;
});
eightBtn.addEventListener("click", () => {
    inputField.value += 8;
});
nineBtn.addEventListener("click", () => {
    inputField.value += 9;
});

addBtn.addEventListener("click", () => {
    op = sum;
    inputField.value += "+";
    updateInputField();
});
multiplyBtn.addEventListener("click", () => {
    inputField.value += "*";
    op = multiply;
    updateInputField();
});
substractBtn.addEventListener("click", () => {
    inputField.value += "-";
    op = substract;
    updateInputField();
});
divideBtn.addEventListener("click", () => {
    inputField.value += "/";
    op = divide;
    updateInputField();
});

equalBtn.addEventListener("click", () => {
    secondNum = parseInt(parseInt(inputField.value.match(/\d+$/)[0]));
    result = operate(firstNum,secondNum,op);
    inputField.value = result;
});

clearBtn.addEventListener("click", () => {
    inputField.value = "";
});

backBtn.addEventListener("click", () => {
    inputField.value = inputField.value.slice(0,-1);
});


