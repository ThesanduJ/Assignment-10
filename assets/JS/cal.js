let cDisplay = "0";
let displayValue = false;

function displayInCal(value) {
    if (cDisplay === "0" || displayValue) {
        cDisplay = value;
    } else {
        cDisplay += value;
    }
    displayValue = false;
}
