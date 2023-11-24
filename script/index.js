//made an array the will enable me to count true
const array= [true, true, false, true, true, true, false, false];

const countTrueValues = (r) => r.filter(Boolean).length;

const trueCount = countTrueValues(array);

console.log(`Number of true values: ${trueCount}`);
const button = document.getElementById("button");
button.addEventListener('click', function () {
    displayResult.value=trueCount
})
const displayResult= document.getElementById("Value")
// document.getElementById("button").addEventListener("click", displayResult);
