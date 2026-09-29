function multiply() {

    const val1 = document.getElementById("firstNum").value;
    const val2 = document.getElementById("secondNum").value;
    const resultElement = document.getElementById("resultText");

    if (val1 === "" || val2 === "") {
        resultElement.innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    resultElement.innerText = num1 * num2;
}

function divide() {

    const val1 = document.getElementById("firstNum").value;
    const val2 = document.getElementById("secondNum").value;
    const resultElement = document.getElementById("resultText");

    if (val1 === "" || val2 === "") {
        resultElement.innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (num2 === 0) {
        resultElement.innerText = "Không thể chia cho 0!";
        return;
    }

    resultElement.innerText = num1 / num2;
}