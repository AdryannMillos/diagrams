function birthdayCakeCandles(candles) {
    let count = 0;
    let numericOrder = candles.sort(function(a,b){
        if(a>b){ return 1;}
        if(a<b){ return -1;}
        return 0;
    });

    let bigger = numericOrder[numericOrder.length-1];

    for(let i = 0; i<numericOrder.length; i++) {
        if(bigger === numericOrder[i]) {
            count = count + 1;
        }
    }
    return count;
}

birthdayCakeCandles([3,3,4,5,5,1,9,9,9,7]);