'use strict';

//  looking for span element value by class name
const elements = document.getElementsByClassName('population');
//  making array that filed by element value
const data = [].map.call(elements, elem => elem.textContent);
//  deleting comma in array items
const newArr = data.map(stringItem => stringItem.replace(/[,]/g, ''));
//  transforming array elements to number
const intArr = newArr.map(item => Number(item));
//  calculating total
const total = intArr.reduce((sum, current) => sum + current, 0);
//  calculating avarage
const avarage = total / intArr.length;

//  creating comma separator function
function separator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//  replacing elements in HTML
document.getElementsByClassName('total-population')[0].innerHTML = separator(total);
document.getElementsByClassName('average-population')[0].innerHTML = separator(avarage);
