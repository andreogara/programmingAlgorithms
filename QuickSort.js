function QuickSort(a){
    if(a.length < 2){
        return a;
    }
    var pivot = a[0],
        lesser = [],
        greater = [];
    for (var i = 1; i < a.length; i++){
        if (a[i] < pivot){
            lesser.push(a[i]);
        }
        else{
            greater.push(a[i]);
        }
    }
    return QuickSort(lesser).concat(pivot, QuickSort(greater));
}

console.log(QuickSort([2,3,4,5,11,22,44,11,22,87,54,34,63,45,28,93,45,67]));