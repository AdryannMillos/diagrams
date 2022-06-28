function solution(paragrafos, largura) {
    let line = ''
    let space = 0
    let line2 = ''
    let beginning = 0
    let end = 0
    let b = ''
    let k = []
    let stars = 0
    let header = ''
    let c =[]
    while(stars < largura+2) {
        header = header + '*'
        stars += 1
    }
    c.push(header)
        for (let i = 0; i < paragrafos.length; i++) {
            for (let y = 0; y <paragrafos[i].length; y++) {
    
            if(paragrafos[i][y+1]){

                    line = line + paragrafos[i][y] + ' ' 
                }else{
                    line = line + paragrafos[i][y] + "\n"
                } 
        
                           
            }
                
        }
    
    let count = 0
    let z = line.split('\n')

    for (let i = 0; i < z.length; i++){
        if(z[i] !== ''){
            z[i].split('')
            count = 0
            for(let y =0; y< z[i].length; y++){
                count = count + 1
            }
            k.push(count)
                if(k[i] < largura){
                  space = largura - k[i]
                    if(space % 2 == 0){
                        line2 = addSpaceBeginning((space/2), z[i])
                       c.push(line2 = "*"+addSpaceEnd((space/2),line2)+"*")
                    }else{
                         beginning = Math.floor(space / 2)
                         end = Math.round(space / 2)
                        line2 = addSpaceBeginning(beginning, z[i])
                     c.push(line2 = "*"+addSpaceEnd(end, line2)+"*")
                    }
                }
                if(k[i] === largura){
                    c.push("*"+z[i]+"*")
                  }
                }if(k[i] > largura){
                    for(i = 0; i < paragrafos.length; i++){
                        for (let y = 0; y <paragrafos[i].length; y++) {

                        if(paragrafos[i][y+1]){
                             let compare = paragrafos[i][y].split('').length+paragrafos[i][y+1].split('').length +1
                             if(compare > largura){
                                 space =  largura - paragrafos[i][y].split('').length 

                                if(space % 2 == 0){
                                line2 = addSpaceBeginning((space/2),paragrafos[i][y])
                                line2 = "*"+addSpaceEnd((space/2),line2)+"*"
                                   c.push(line2)
                                }else{
                                     beginning = Math.floor(space / 2)
                                     end = Math.round(space / 2)
                                    line2 = addSpaceBeginning(beginning,paragrafos[i][y])
                                 c.push(line2 = "*"+addSpaceEnd(end, line2)+"*")
                                }
                             }else{

                                let last = paragrafos[i][y].replace(/ /g,"");
                                let pushingLast = c.map(el => el.replace(/ /g,"").includes(last))
                                if(!pushingLast.includes(true)){
                                    let compare = paragrafos[i][y].split('').length+paragrafos[i][y+1].split('').length +1;
                                    // console.log(compare)

                                    if(compare < largura){
                                        space =  largura - compare
                                       if(space % 2 == 0){
                                       line2 = addSpaceBeginning((space/2),paragrafos[i][y]+ ' ' + paragrafos[i][y+1])
                                          c.push(line2 = "*"+addSpaceEnd((space/2),line2)+"*")
                                       }else{
                                            beginning = Math.floor(space / 2)
                                            end = Math.round(space / 2)
                                           line2 = addSpaceBeginning(beginning,+ ' ' + paragrafos[i][y+1])
                                        c.push(line2 = "*"+addSpaceEnd(end, line2)+"*")
                                       }
                                }if(compare === largura){
                                    c.push("*"+z[i]+"*")
                                  }                             
                                }
                             }
                        } if(paragrafos[i][y+1] == undefined){
                            let last = paragrafos[i][y].replace(/ /g,"");
                           let pushingLast = c.map(el => el.replace(/ /g,"").includes(last))
                            
                            if(!pushingLast.includes(true)){
                                let compare = paragrafos[i][y].split('').length
                                if(compare < largura){
                                    space =  largura - paragrafos[i][y].split('').length 
                                   if(space % 2 == 0){
                                   line2 = addSpaceBeginning((space/2),paragrafos[i][y])
                                      c.push(line2 = "*"+addSpaceEnd((space/2),line2)+"*")
                                   }else{
                                        beginning = Math.floor(space / 2)
                                        end = Math.round(space / 2)
                                       line2 = addSpaceBeginning(beginning,paragrafos[i][y])
                                    c.push(line2 = "*"+addSpaceEnd(end, line2)+"*")
                                   }
                            }if(compare === largura){
                                c.push("*"+paragrafos[i][y]+"*")
                              }

                        }
                            
                       
                    }
                }
                }
        }
       
    }
    c.push(header)
    // return c
    console.log(c)
    }


function addSpaceBeginning(num, string){
    let count = 0
    let space = string
    while(count < num){
        space =' ' + space
        count += 1
    }
    return space 
}
function addSpaceEnd(num, string){
    let count = 0
    let space = string
    while(count < num){
        space = space + ' '
        count += 1
    }
    return space 
}

solution([["A","is the","first"], 
["letter","of the","english"], 
["alphabet"]], 15)
