function fizzBuzz(n) {
    let i = 1;
    while(i<=n) {
        if(i%5 === 0 && i%3 != 0) {
            console.log('Buzz');
        }if(i%3 === 0 && i%5 != 0) {
            console.log('Fizz')
        }if(i%5 ===0 && i%3 ===0 && i){
            console.log('FizzBuzz');
        }
        if(i%5 != 0 && i%3 != 0){
            console.log(i);
        }
            
        i++;
    }
}

fizzBuzz(15)