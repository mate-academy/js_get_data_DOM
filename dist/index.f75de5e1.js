"use strict";
const allPopulation = document.querySelectorAll(".population");
const allPopulationArray = Array.from(allPopulation);
const allAveragePopulation = document.querySelectorAll(".average-population");
const allAveragePopulationArray = Array.from(allAveragePopulation);
const allTotalPopulation = document.querySelectorAll(".total-population");
const allPopulationNumbers = allPopulationArray.map((element)=>element.textContent.replace(/,/g, "")).map((text)=>{
    const number = parseInt(text, 10);
    return isNaN(number) ? null : number;
}).filter((number)=>number !== null);
let totalPopulation = 0;
for(let i = 0; i < allPopulationNumbers.length; i++)totalPopulation += allPopulationNumbers[i];
const totalPopulationFormatted = totalPopulation.toLocaleString("en-US");
const averagePopulationValue = totalPopulation / allPopulationNumbers.length;
const averagePopulation = averagePopulationValue.toLocaleString("en-US");
allAveragePopulationArray.forEach((element)=>{
    if (element.textContent === "Calculate it!") element.textContent = averagePopulation;
});
allTotalPopulation.forEach((element)=>{
    if (element.textContent === "Calculate it!") element.textContent = totalPopulationFormatted;
});

//# sourceMappingURL=index.f75de5e1.js.map
