'use strict';

const livePeople = document.querySelectorAll('.population');

const arrayLivepeople = [...livePeople].map((number) => number.textContent);

const firstValidStr = arrayLivepeople.find((str) => str && /\d/.test(str));

const match = firstValidStr ? firstValidStr.match(/[^0-9]/) : null;

const parser = match?.[0] || '';

const strPeopl = arrayLivepeople.map((number) => number.replaceAll(parser, ''));

const numPepople = strPeopl
  .map((strNum) => Number(strNum))
  .filter((num) => !isNaN(num));

let totalPeople = numPepople.reduce((acum, number) => acum + number, 0);

let averagePeople;

if (numPepople.length === 0) {
  averagePeople = 0;
} else {
  averagePeople = totalPeople / numPepople.length;
}

function formater(number, par) {
  const num = Math.floor(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, par);

  return num;
}

totalPeople = formater(totalPeople, parser);
averagePeople = formater(averagePeople, parser);

document.querySelector('.total-population').textContent = totalPeople;
document.querySelector('.average-population').textContent = averagePeople;
