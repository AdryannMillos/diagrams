function getFactorials(n) {
    if (n === 0) {
      return 1;
    }
    return n * getFactorials(n - 1);
  }

  function getFactorialSequence(inicial, final) {
    let arr = [];
    for(let i = inicial; i <= final; i++) {
        arr.push(getFactorials(i));
    }
    return arr;
  }
  
  let $factoralArr = getFactorialSequence(0,9);
  let result = [];
  let value = 500000
   for (let i = 0; i < $factoralArr.length; i++) {
       value -= $factoralArr[i];
   }
   console.log(value);

//    console.log(resultFinal);
