"use strict"
function getArrayParams(arr) { 
  let min, max, sum, avg; 
  sum = 0; 
  min = Infinity;
  max = -Infinity;
  
  for (let i = 0; i < arr.length; ++i) {
    if(arr[i]>max) {
      max = arr[i];
    }if(arr[i]<min) {
      min = arr[i];
    }
    
    sum += arr[i]; 
}
  avg = sum / arr.length; 
  return { min: +min.toFixed(2), max: +max.toFixed(2), avg: +avg.toFixed(2) }; 
}

function summElementsWorker(...arr) { 
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i]; 
  } 
  return +sum.toFixed(2); 
} function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++){
      const result = func(...arr[i]); 
      if (result > maxWorkerResult) {
          maxWorkerResult = result; 
      }
  }

  return maxWorkerResult; 
}

function differenceEvenOddWorker(...arr) { 
  let odd = 0; 
  let even = 0; for (let i = 0; i < arr.length; ++i) {
    if(0== arr[i] % 2) {
      even += arr[i];
    }else {odd += arr[i]; }
  
  } 
  return even - odd; 
}
function differenceMaxMinWorker(...arr) {
  return +(Math.max(...arr) - Math.min(...arr)).toFixed(2);
}

function averageEvenElementsWorker(...arr) { 
  let sumEvenElement = 0; 
  let countEvenElement = 0; 
  for (let i = 0; i < arr.length; ++i) {
    if(0== arr[i] % 2)  { 
          sumEvenElement += arr[i]; 
          countEvenElement += 1; 
      } 
  } 
  return  sumEvenElement / countEvenElement; 
}
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++){
      const result = func(...arr[i]); 
      if (result > maxWorkerResult) {
          maxWorkerResult = result; 
      }
  }

  return maxWorkerResult; 
}