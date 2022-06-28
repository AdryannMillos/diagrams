
function cardinalitySort(nums) {

    const binaryArr = nums.map((item)=> item.toString(2));
    let countNumberOne = binaryArr.map(
        (item)=> item.split('').filter((value)=> value == 1).length
         );
        

console.log(countNumberOne.sort());
}


cardinalitySort([1,2,3,4,5]);