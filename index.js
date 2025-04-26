// Array of titles for the results
const headings = [
  "Length (Meter/Feet)",
  "Volume (Liters/Gallons)",
  "Mass (Kilograms/Pounds)",
];
// Arrays of units
const metricUnits = ["meters", "liters", "kilos"];
const imperialUnits = ["feet", "gallons", "pounds"];
const convertBtn = document.getElementById("convert-btn");
// Array of elements with the result class
const resultArray = Array.from(document.querySelectorAll(".result"));
// Array of constants to convert the units
const metricConstants = [3.2808, 0.2642, 2.2046];
const imperialConstants = [0.3048, 3.7854, 0.4536];



convertBtn.addEventListener("click", function() {
    addHeadings();
    addResult();
});

function converter(input, constant) {
    return (input * constant).toFixed(3);
}

function addResult() {
    const input = Number(document.getElementById("input").value);
    for (let i=0; i<metricConstants.length; i++) {
        resultArray[i].innerHTML += `<p>${input} ${metricUnits[i]} = 
        ${converter(input, metricConstants[i])} ${imperialUnits[i]} | ${input}
        ${imperialUnits[i]} = ${converter(input, imperialConstants[i])}
        ${metricUnits[i]}</p>`;
    }
}
function addHeadings() {
    for(let i=0; i<headings.length; i++) {
        resultArray[i].innerHTML = `<h3>${headings[i]}</h3>`;

    }    
}

