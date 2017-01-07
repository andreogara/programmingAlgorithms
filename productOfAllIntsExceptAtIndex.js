function getProductOfAllIntExceptAtIndex(array){
    var productOfAllIntsExceptAtIndex = [];
    var len = array.length;
    var productsSoFar = 1;
    for (var i = 0; i < len; i++){
        productOfAllIntsExceptAtIndex[i] = productsSoFar;
        productsSoFar *= array[i];
    }
    productsSoFar = 1;
    for (var j = len-1; j >= 0; j--){
        productOfAllIntsExceptAtIndex[j] *= productsSoFar;
        productsSoFar *= array[j];
    }
    return productOfAllIntsExceptAtIndex;
}

console.log(getProductOfAllIntExceptAtIndex([2,3,6]));