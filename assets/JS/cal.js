let cDisplay = "0";
let displayValue = false;

function displayInCal(value) {
    if (cDisplay === "0" || displayValue) {
        cDisplay = value;
    } else {
        cDisplay += value;
    }
    displayValue = false;
    updateCurrentDisplay();
}

function updateCurrentDisplay() {
    const dValue = $("#display");
    dValue.text(cDisplay);
}

function cal() {
    const output = eval(cDisplay);
    clearTheDisplay();
    cDisplay += output.toString();
    updateCurrentDisplay();

    displayValue = true;
}

function clearAll() {
    cDisplay = "0";
    displayValue = false;
    updateCurrentDisplay();
}

function clearTheDisplay() {
    cDisplay = "";
    displayValue = false;
    updateCurrentDisplay();
}
