function searchMatrix(matrix, target){
    if(matrix == null || matrix.length < 1 || matrix[0].length < 1){
        return false;
    }

    var col = matrix[0].length - 1;
    var row = 0;
    while (col >= 0 && row <= matrix.length-1){
        if(target == matrix[col][row]){
            return true;
        }
        else if(target > matrix[col][row]){
            row++;
        }
        else if(target < matrix[col][row]){
            col--;
        }
    }
    return false;
}