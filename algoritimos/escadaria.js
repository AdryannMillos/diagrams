function staircase(n) {
    let count = 1;
    let text = "#";
    let space = " ";
    while(count<=n){
        if(count === n){
            console.log(text.repeat(count));
        }
       else{
        console.log(space.repeat(n-count-1),text.repeat(count));

       }
        count++
    }
}

staircase(6);