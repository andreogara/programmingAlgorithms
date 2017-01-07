function letterCombo(digits){
    var maps = {
        "0":"0",
        "1":"1",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
var queue = [];
queue.push("");
    for (var i = 0; i < digits.length; i++){
        var len = queue.length;
        while(len-- > 0){
            var element = queue.shift();
            var array = maps[digits.charAt(i)].split("");
            for (var j = 0; j < array.length; j++){
                queue.push(element+array[j]);
            }
        }
    }
    return queue;
}

console.log(letterCombo("25"));
