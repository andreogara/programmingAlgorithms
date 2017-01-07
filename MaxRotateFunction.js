var maxRotateFunction = function(A) {
    var len = A.length,
        currentMax = 0,
        i;
    for (i = 0; i < len; i++){
        var start = len-i;
            reduce(A, start);
    }

    function reduce(a, p, l){
        arrMax = Number.MIN_VALUE;
        if (++p == l){
            p = 0;
        }

    }
    return currentMax;
};

console.log(Number.MIN_VALUE);