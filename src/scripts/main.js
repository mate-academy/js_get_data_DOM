'use strict';
const populationsAll = document.body.children[0].children[1].children

let total = 0
let amountOfCountries=0


for(let el of populationsAll){
    let population = (el.children[1].textContent)
    let populationNum = +(population.replace(/,/g, ''))
    total= total+populationNum
    amountOfCountries +=1
}

let average = (total/amountOfCountries).toLocaleString('en-US')
let totalWithSeparator = total.toLocaleString('en-US')


let totalPopulation = document.querySelector('.total-population')
totalPopulation.innerHTML = totalWithSeparator;
let averagePopulation = document.querySelector('.average-population')
averagePopulation.innerHTML = average;
// write your code here
