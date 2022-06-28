function lonelyinteger(a) {
 
    
    
    // for(var i = 0; i <a.length; i++){
    //     countInArray(a,1);
    // }
    // function countInArray(array, what) {
    //     var count = 0;
    //     for (var i = 0; i < array.length; i++) {
    //         if (array[i] === what) {
    //             count++;
    //         }
    //         console.log(count);
    //     }
        
    // }

      // Do XOR of all elements and return
    //   let res = a[0];
    //   for (let i = 1; i < a.length; i++) {
    //       res = res ^ a[i];
    //   }
    //   return res;
    let unique = a.filter(function(value){
        return a.indexOf(value) === a.lastIndexOf(value)
      })
      
      console.log(unique);
}

lonelyinteger([1,1,3,4,4,6,6]);