"use strict"
"use strict"
function solveEquation(a,b,c){
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
  if (discriminant > 0){
      arr =  [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
      arr = [- b / (2 * a)];
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentageRate = parseFloat( percent / 100 / 12 );
  let loanBody =amount - contribution;
  let monthlyPayment = loanBody * (percentageRate + (percentageRate / ((1 + percentageRate)**countMonths - 1)));
  let fullCount = monthlyPayment * countMonths;
return fullCount.toFixed(2);
}

typeof calculateTotalMortgage === "string";

