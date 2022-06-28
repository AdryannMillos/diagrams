function solution(arr) {
    let b = []
    let g = ''
    let d = ''
    for (var i = 0; i < arr.length; i++) {
        
       const letterArray = arr.map(el => el.slice(i,i+1)) 
        b.push(letterArray)        
    }
    g = b.join()
    let z = g.split(',')
    for (let i = 0; i <z.length; i++){
        
        d = d + z[i] 
    }
    console.log(    d
    )
}

solution(["Daisy", "Rose", "Hyacinth", "Poppy"])