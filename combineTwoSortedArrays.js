function combineArray(array1, array2){
    var result = [];
    while(true){
        var a1 = array1[0], a2 = array2[0];
        if(!a1 && a2){
            Array.prototype.push.apply(result, array2);
            return result;
        }
        else if(a1 && !a2){
            Array.prototype.push.apply(result, array1);
            return result;
        }
        else if(!a1 && !a2){
            return result;
        }
        if (a1 < a2){
            result.push(array1.shift());
        }
        else if(a2 < a1){
            result.push(array2.shift());
        }
        else{
            result.push(array1.shift());
            result.push(array2.shift());
        }
    }
}


console.log(combineArray([1,2], [6,7]));