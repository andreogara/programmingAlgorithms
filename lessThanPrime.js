var countPrimes = function(n) {
    if (n < 3){
        return 0;
    }
    var i,j,k, primes = [], length = n;
    for (k = 0; k < length; k++){
        primes.push(false);
    }
    var count = 0;
    for (i = 2; i < n; i++ ){
        if (!primes[i]){
            count++;
            for (j = 2; j*i < n; j++){
                primes[i*j] = true;
            }
        }
    }
    return count;
};

console.log(countPrimes(499979));