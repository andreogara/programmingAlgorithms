function findTwoSum(arr, target){
    var map = {};
    for (var i = 0; i < arr.length; i++){
        var currnum = arr[i];
        var diff = target - currnum;
        if (map[diff] || map[diff] == 0){
            return [map[diff], i];
        }
        else{
            map[currnum] = i;
        }
    }
    console.log(map);
    return -1;
}

console.log(findTwoSum([0, 4, 3, 0], 0));