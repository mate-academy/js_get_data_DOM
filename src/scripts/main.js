'use strict';

function strToDigitArr(string_){
    const arrString = string_.split('');
    const arrDigit = arrString.filter(letter => /^[0-9]$/.test(letter))
    return arrDigit;
}

const span_ = document.querySelectorAll('span');
const populationOnly = [...span_].filter(item =>item.matches('.population'))
const len_ = populationOnly.length
const digitArrs = populationOnly.map(item => strToDigitArr(item.innerText))
const arrDigits = digitArrs.map(item => Number(item.join('')))
const total = arrDigits.reduce((a, b) => a + b, 0)
const aver = total / len_
const totalD = total.toLocaleString()
const averD = aver.toLocaleString()
const totalResult = document.querySelector('.total-population')
const averagResult = document.querySelector('.average-population')
totalResult.innerHTML = totalD
averagResult.innerHTML = averD
