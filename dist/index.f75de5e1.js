"use strict";
const allPopulation = [
    ...document.querySelectorAll(".population")
];
const allAveragePopulation = document.querySelectorAll(".average-population");
const allPopulationNumbers = allPopulation.map((element)=>element.textContent.replace(/,/g, "")).map((text)=>{
    const number = parseInt(text, 10);
    return isNaN(number) ? null : number;
}).filter((number)=>number !== null);
const totalPopulation = allPopulationNumbers.reduce((total, number)=>{
    return total + number;
}, 0);
const totalPopulationFormatted = totalPopulation.toLocaleString("en-US");
const averagePopulationValue = totalPopulation / allPopulationNumbers.length;
const averagePopulation = averagePopulationValue.toLocaleString("en-US");
allAveragePopulation.forEach((element)=>{
    if (element.textContent === "Calculate it!") element.textContent = averagePopulation;
});
const totalElement = document.querySelector(".total-population");
if (totalElement && totalElement.textContent === "Calculate it!") totalElement.textContent = totalPopulationFormatted;

//# sourceMappingURL=index.f75de5e1.js.map
