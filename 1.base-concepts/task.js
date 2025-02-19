"use strict"
function solveEquation(a, b, c) {
  let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return 'Уравнение не имеет реальных корней';
    } else if (discriminant === 0) {
        return 'Уравнение имеет один корень: ' + (-b / (2 * a));
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return 'Уравнение имеет два корня: ' + root1 + ' и ' + root2;
    }
  let arr = [];
  arr.push(root1, root2);
  return arr;
}


"use strict";
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentageRate = parseFloat( percent / 100 / 12 );
  let loanBody =amount - contribution;
  let monthlyPayment = loanBody * (percentageRate + (percentageRate / ((1 + percentageRate)**countMonths - 1)));
  let fullCount = monthlyPayment * countMonths;
return fullCount.toFixed(2);
}
console.log (calculateTotalMortgage(10, 1000, 50000, 12));
