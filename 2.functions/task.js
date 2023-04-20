function getArrayParams(...arr) {
  let min = Infinity;
  min = Math.min(...arr);
  let max = -Infinity;
  max = Math.max(...arr);
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
   sum = sum + arr[i];
  }
  let a = sum / arr.length;
  let avg = Number(a.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let min = Infinity;
  min = Math.min(...arr);
  let max = -Infinity;
  max = Math.max(...arr);
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
   sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let min = Infinity;
  min = Math.min(...arr);
  let max = -Infinity;
  max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = max - min;
  }
  return sum;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult
}
