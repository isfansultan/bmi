function buttonClick() {
    let space = document.getElementById('space')
    space.innerHTML = '<input type="number" id="num1" placeholder="mass in kg"> <br> <input type="number"  id="num2" placeholder="height in METERS"> <br> <button onclick="calculate()" style="background-color: white; border-radius: 4px;" > calculate </button> <br> <h1 id="result"></h1>'
}

function calculate() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let result = document.getElementById('result');

    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    result.innerHTML =   value1 / (value2 * value2);
}