"use strict"
function solveEquation(a, b, c) {
  
  let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return arr.splice(0);
    } else if (discriminant === 0) {
        return (-b / (2 * a));
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return root1 + ', ' + root2;
    }
  
    let arr = [];
arr.push(parseFloat(solveEquation(a, b, c)));
return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentageRate = parseFloat( percent / 100 / 12 );
  let loanBody =amount - contribution;
  let monthlyPayment = loanBody * (percentageRate + (percentageRate / ((1 + percentageRate)**countMonths - 1)));
  let fullCount = monthlyPayment * countMonths;
return fullCount.toFixed(2);
}

