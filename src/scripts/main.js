'use strict';

//  creating parseNumber function
function parseNumber(item) {
  let newItem = item.replace(/[,]/g, '');
  return Number(newItem);
}

//  looking for span element value by class name
const elements = document.getElementsByClassName('population');
//  making array that filed by element value
const data = [...elements].map(elem => elem.textContent);
//  deleting comma in array items and transforming to number
const newArr = data.map(parseNumber);
//  calculating total
const total = newArr.reduce((sum, current) => sum + current, 0);
//  calculating avarage
const avarage = total / newArr.length;

//  creating comma separator function
function separator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//  replacing elements in HTML
document.getElementsByClassName('total-population')[0].innerHTML = separator(total);
document.getElementsByClassName('average-population')[0].innerHTML = separator(avarage);
