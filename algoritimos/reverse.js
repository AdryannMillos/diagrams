function solution(a, b, k) {
    const reverseB = b.reverse();
    let i = 0;
   let  count= 0;
    while(i<b.length){
      let conc = a[i].toString() + reverseB[i].toString();
      
      i++
      if(parseInt(conc) < k ){
        count++;
        
      }
    }
    console.log(count);
  }

solution([16, 1, 4, 2, 14], [7, 11, 2, 0, 15], 743)