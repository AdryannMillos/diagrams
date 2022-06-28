function rle(string) {
  let arr = [];
  string = string.split("");
  let hasNumber = hasNumbers(string);
  if(string == ''){ return("oi")};

  hasNumber == false ? encoding(string, arr) : decoding(string, arr);
}

function hasNumbers(string) {
  let arr = string.map((item) => !isNaN(item));

  return arr.includes(true) ? true : false;
}

function encoding(string, arr) {
  for (let i = 0; i < string.length; i++) {
    let count = 1;
    if (string[i + 1] != undefined) {
      while (string[i] === string[i + 1]) {
        count++;
        i++;
      }
      count === 1 ? arr.push(string[i]) : arr.push(count + string[i]);
    } else {
      arr.push(string[i]);
    }
  }

  return console.log(arr.reduce((accum, curr) => accum + curr));
}

function decoding(string, arr) {
  if(string === '') return '';
  for (let i = 0; i < string.length; i++) {
    if (string[i + 1] != undefined) {
    while(!isNaN(string[i]) && !isNaN(string[i+1])){
       arr.push(string[i])
    }
  }
  }

  return console.log(arr.reduce((accum, curr) => accum + curr));
}

rle("12w");
