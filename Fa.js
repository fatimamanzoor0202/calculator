function add() {
    const num1 = document.getElementById("row1").value;
    const num2 = document.getElementById("row2").value;
    document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}
function substrack() {
    const num1 = document.getElementById("row1").value;
    const num2 = document.getElementById("row2").value;
    document.getElementById("result").innerHTML = Number(num1) - Number(num2);
}
function multiplication() {
    const num1 = document.getElementById("row1").value;
    const num2 = document.getElementById("row2").value;
    document.getElementById("result").innerHTML = Number(num1) * Number(num2);
}
function division() {
    const num1 = document.getElementById("row1").value;
    const num2 = document.getElementById("row2").value;
    document.getElementById("result").innerHTML = Number(num1) / Number(num2);
}
function modulus() {
    const num1 = document.getElementById("row1").value;
    const num2 = document.getElementById("row2").value;
    document.getElementById("result").innerHTML = Number(num1) % Number(num2);
}

