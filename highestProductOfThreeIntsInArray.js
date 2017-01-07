function highestProdOfThree(arr){
    var len = arr.length;
    if(len < 3){
        return false;
    }
    var lowest = Math.min(arr[0], arr[1]),
        highest = Math.max(arr[0], arr[1]),
        highestProductOf2 = arr[0] * arr[1],
        lowestProductOf2 = arr[0] * arr[1],
        highestProductOf3 = arr[0] * arr[1] * arr[2];
    for (var i = 2; i < len; i++){
        var current = arr[i];
        highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * current, lowestProductOf2 * current);
        highestProductOf2 = Math.max(highestProductOf2, highest * current, lowest * current);
        lowestProductOf2 = Math.min(lowestProductOf2, lowest * current, highest * current);
        lowest = Math.max(lowest, current);
        highest = Math.max(highest, current);
    }
    return highestProductOf3;
}
