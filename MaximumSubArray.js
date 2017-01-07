function MaxSubArray(array){
    if(array.length < 2){
        if(array.length < 1){
            return 0;
        }
        else{
            return array[0];
        }
    }
    var maxUntilHere = array[0];
    var maxSubArray = array[0];
    for (var i = 1; i < array.length; i++){
        maxUntilHere = Math.max(maxUntilHere+array[i], array[i]);
        maxSubArray = Math.max(maxSubArray, maxUntilHere);
    }
    return maxSubArray;
}