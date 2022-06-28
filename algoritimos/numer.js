function solution(a) {
    let b = []
    c= []
    for(let i = 0; i < a.length; i++) {
        let number = a[i]
        let string = number.toString()
         b.push(string.slice(0,1))
         if(string.slice(1,2) !== ''){
            b.push(string.slice(1,2))
         }
    }
    let arrayOccurrences = b.map(el => getOccurrence(b, el))
    const greaterOcorrence = Math.max(...arrayOccurrences);
    let numberToPush = b.filter(element => (getOccurrence(b, element) == greaterOcorrence))
    for(let i = 0; i < numberToPush.length; i++){
       const int = parseInt(numberToPush[i])
                while(!c.includes(int)){
            c.push(int)
        }
    }    
    c.sort(function(a,b){
        if(a>b){return 1;}
        if(a<b){return -1;}
        return 0;    })
   console.log(c)
}
function getOccurrence(array, value) {
    return array.filter((v) => (v == value)).length;
}

solution([25, 2, 3, 57, 38, 41])