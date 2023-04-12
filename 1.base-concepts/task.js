"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    arr.push(-b/(2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2 * a));
    arr.push((-b - Math.sqrt(discriminant) )/(2 * a))
  } else {
    arr.push()
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let pBet = (percent / 100 / 12);
  let sumCredit = (amount - contribution);
  let monthly = sumCredit * (pBet + (pBet / (((1 + pBet) ** countMonths) - 1)));
  let totalAmount = (monthly * countMonths);
  
  return Number(totalAmount.toFixed(2))
}