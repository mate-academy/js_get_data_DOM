'use strict';

const data = [...document.getElementsByClassName("population")].map(it => +it.innerText.replaceAll(',', ''));

const total = data.reduce((a, b) => a + b);
const totalFormated = total.toLocaleString();

const average = total / data.length;
const averageFormated = average.toLocaleString();

document.getElementsByClassName("total-population")[0].innerText = totalFormated;
document.getElementsByClassName("average-population")[0].innerText = averageFormated;
