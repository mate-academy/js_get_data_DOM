'use strict';

const spanWithPopulation = document.querySelectorAll('.population');

let totalPopulation = 0;
let averagePopulation = 0;
const countOfCountries = [...spanWithPopulation].length;

for (let i = 0; i < countOfCountries; i++) {
    totalPopulation+= 
    +spanWithPopulation[i].childNodes[0].textContent.replaceAll(',', '')
}

averagePopulation = totalPopulation / countOfCountries;
document.querySelector('.average-population').innerHTML = 
`${averagePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
document.querySelector('.total-population').innerHTML = 
`${totalPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
