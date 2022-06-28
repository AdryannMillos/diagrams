function timeConversion(s) {
    // let toArray = s.split('');
    // let concat = "";
    // if(toArray[0] == 1 && toArray[1] == 2 && toArray.includes('P')){
    //     toArray.pop();
    //     toArray.pop();
    //     return toArray.join('');   
    // }
    // if(toArray.includes('P')){
    //     concat = toArray[0]+toArray[1];
    //     let toInt = parseInt(concat) + 12;
    //     let toString = toInt.toString();
    //     let toArrayString = toString.split('');
    //     toArray[0] = toArrayString[0];
    //     toArray[1] = toArrayString[1];
    //     toArray.pop();
    //     toArray.pop();
    //     return toArray.join('');
    // }
    // if(toArray[0] == 1 && toArray[1] == 2 && toArray.includes('A')){
    //     toArray[0] = '0';
    //     toArray[1] = '0';
    //     toArray.pop();
    //     toArray.pop();
    //     return toArray.join('');
    // }
    
    //     toArray.pop();
    //     toArray.pop();
    //     return toArray.join('');    
    const arr = s.slice(0,8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
         (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
         (arr[0] == 12 ? '00' : arr[0]);
    console.log(arr.join(':'));
}

timeConversion("09:10:00PM");



