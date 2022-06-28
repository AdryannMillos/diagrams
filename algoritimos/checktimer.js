function solution(tempo) {
    const hours = tempo.slice(0,2);
    const minutes = tempo.slice(3,5);

    const intHours = parseInt(hours);
    const intMinutes = parseInt(minutes);

    if((0 <= intHours) && (intHours < 24)){
        if((0 <= intMinutes) && (intMinutes < 60)){
            console.log(true)
        }  
       else{ console.log( false)};      
    }else{
        console.log( false);
    }
}


solution("24:00")