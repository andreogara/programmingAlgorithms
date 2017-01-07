var isPrime = function(num){
    var limit = Math.sqrt(num);
    var divisor = 2;
    if(num <= 1){
        return false;
    }
    if (num == 2 || num == 3){
        return true;
    }

    while(divisor <= limit){
        if (num % divisor === 0){
            return false;
        }
        else{
            divisor++;
        }
    }
    return true;
};


console.log(isPrime(7));