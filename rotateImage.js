function rotate(matrix){
    var len = matrix.length,
        mid = Math.ceil(len/2);
    for (var i = 0; i < mid; i++){
        for (var j = i; j < len-i-1; j++){
            var temp = matrix[i][j];
            matrix[i][j] = matrix[len-j-1][i];
            matrix[len-j-1][i] = matrix[len-i-1][len-j-1];
            matrix[len-i-1][len-j-1] = matrix[j][len-i-1];
            matrix[j][len-i-1] = temp;
        }
    }
    return matrix;
}

console.log(rotate([[1,2,3],[4,5,6], [7,8,9]]));