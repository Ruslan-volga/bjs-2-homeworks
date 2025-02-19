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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentage = parseFloat( percent / 100 / 12 );
 let time = parseFloat( countMonths * 12 );
 let fullCount = (amount - contribution) * (percentage + (percentage / (((1 + percentage)**countMonths) - 1)))
 return fullCount.toFixed(2);
}
