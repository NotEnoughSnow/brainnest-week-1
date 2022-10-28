
const addBtn = document.querySelector("#add");
const multiplyBtn = document.querySelector("#multiply");
const substractBtn = document.querySelector("#substract");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#back");
const number = document.getElementsByClassName("number");

const inputField = document.querySelector("#input");
const resultField = document.querySelector("#secondary_input");


let firstNum;
let secondNum;
let op;
let result;

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", () => {
        inputField.value += parseInt(number[i].textContent);

        if(op != undefined) {
            calculate();
            resultField.value = result;
        }
    });
  }

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

function calculate(){
    
    secondNum = parseInt(parseInt(inputField.value.match(/\d+$/)[0]));
    result = operate(firstNum,secondNum,op);
}

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
    calculate();
    inputField.value = result;
    resultField.value = "";
    op = undefined;
    firstNum = result;
});

clearBtn.addEventListener("click", () => {
    inputField.value = "";
});

backBtn.addEventListener("click", () => {
    inputField.value = inputField.value.slice(0,-1);
});


