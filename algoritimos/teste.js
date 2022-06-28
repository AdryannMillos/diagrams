function findMedian(arr) {
    let numericOrder = arr.sort(function(a,b) { 
        if(a>b) return 1;
        if(a<b) return -1;
    });
    let medianNumber = Math.floor((numericOrder.length)/2)
    return numericOrder[medianNumber];
}

findMedian([0,1,2,4,3,6,5, -1, -2]);