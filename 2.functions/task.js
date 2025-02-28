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

function summElementsWorker(arr) { 
  var sum = 0; 
  for (var i = 0; i < arr.length; i++) { 
    sum += arr[i]; 
  } 
  return +sum.toFixed(2); 
}

function differenceMaxMinWorker (arr) { 
  min = Infinity;
  max = -Infinity;
  
  for (let i = 0; i < arr.length; ++i) {
    if(arr[i]>max) {
      max = arr[i];
    }if(arr[i]<min) {
      min = arr[i];
    }
  }
  
  return  +(max - min).toFixed(2); 
}
function differenceMaxMinWorker(...values) {
  return Math.max(...values) - Math.min(...values);
}

function averageEvenElementsWorker(arr) { 
  let sumEvenElement = 0; 
  let countEvenElement = 0; 
  for (let num of arr) { 
      if (0 == num % 2) { 
          sumEvenElement += num; 
          countEvenElement += 1; 
      } 
  } 
  return  sumEvenElement / countEvenElement; 
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
      const result = func(...arr); 
      if (result > maxWorkerResult) {
          maxWorkerResult = result; 
      }
  }

  return maxWorkerResult; 
}

function summElementsWorker(arr) { 
  var sum = 0; 
  for (var i = 0; i < arr.length; i++) { 
    sum += arr[i]; 
  } 
  return +sum.toFixed(2); 
}

function differenceMaxMinWorker (arr) { 
  min = Infinity;
  max = -Infinity;
  
  for (let i = 0; i < arr.length; ++i) {
    if(arr[i]>max) {
      max = arr[i];
    }if(arr[i]<min) {
      min = arr[i];
    }
  }
}
function differenceMaxMinWorker(...arr) {
  return Math.max(...arr) - Math.min(...arr);
}

function averageEvenElementsWorker(arr) { 
  let sumEvenElement = 0; 
  let countEvenElement = 0; 
  for (let num of arr) { 
      if (0 == num % 2) { 
          sumEvenElement += num; 
          countEvenElement += 1; 
      } 
  } 
  return  sumEvenElement / countEvenElement; 
}