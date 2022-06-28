// function miniMaxSum(arr) {
//   let numericOrder = arr.sort(function(a,b){
//         if(a>b){return 1;}
//         if(a<b){return -1;}
//         return 0;
//     });
//     let maxSum = numericOrder[numericOrder.length - 1] + numericOrder[numericOrder.length - 2] + numericOrder[numericOrder.length - 3] + numericOrder[numericOrder.length - 4];
//     let minSum = numericOrder[0] + numericOrder[1] + numericOrder[2] + numericOrder[3];
//     console.log(maxSum, minSum);
// }

// miniMaxSum([1,2,7,6,5])

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  console.log((sum - maxVal) + ' ' + (sum - minVal));
}

miniMaxSum([1,-3,5,-99])