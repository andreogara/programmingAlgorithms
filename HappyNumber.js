"use strict";
function isHappy(n){
    if(n <= 0){
        return false;
    }
    while(n >= 10){
        let sum = 0;
        while(n != 0){
            sum += (n%10)*(n%10);
            n = Math.floor(n/10);
        }
        n = sum;
    }
    return n == 1 || n == 7
}
console.log(isHappy(19));


