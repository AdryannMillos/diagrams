function solution(s){
    const vogais = ["a","e","i","o","u"];
  let count = 0;
  let arr =  s.toLowerCase().split('')
for(let i = 0; i< arr.length; i++){
  if(vogais.includes(arr[i])){
    count = count+1
  }else{
    count = count +2
  }
  
  
  }
  console.log(count);
  }
// adicionei lower casa
  solution("ADRIANA")