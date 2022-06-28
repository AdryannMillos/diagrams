function matchingStrings(strings, queries) {
    // arr = [];
//    strings.forEach(string => {
//      (queries.indexOf(string) > -1) ? arr.push(string) : '' 
//     })
//     console.log(arr);
// for(let i = 0; i < queries.length; i++){
//     const count = strings.filter(string => string === queries[i]).length
//     return (count)
// }

return queries.map(x=>strings.filter(y=>y===x).length)

}

matchingStrings(['aba','caba','aba','pito'],['aba','lulu','caba']);