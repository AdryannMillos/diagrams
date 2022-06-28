function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            positive = positive+1;
        }
        if(arr[i]<0){
            negative = negative+1;
        }
        if(arr[i]===0){
            zero = zero+1;
        }
    }
    let positiveRatio = (positive/(arr.length)).toFixed(6);
    let negativeRatio = (negative/(arr.length)).toFixed(6);
    let zeroRatio = (zero/(arr.length)).toFixed(6);
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}
plusMinus([1,2,3,-4,0]);

function plusMinus(arr) {
    let positive = arr.filter(number => number > 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length;;
    let zeronums = arr.filter(number => number == 0).length / arr.length;;
    return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))
}