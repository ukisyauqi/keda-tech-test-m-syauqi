// No. 1
function descendingSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// No. 2
function subArraySum(arr, num) {
  if (num <= 0) return 0;
  if (num > arr.length) return null;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  let maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}

// No. 3

function sumEvenNumbers(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += sumEvenNumbers(obj[key]);
    }
  }
  return sum;
}

module.exports = { descendingSort, subArraySum, sumEvenNumbers, a };
