function swapwithouttemp(a,b){
    b = b -a;
    a = a+ b;
    b = a-b;

    return a +""+ b;
}

console.log(swapwithouttemp(5,6));