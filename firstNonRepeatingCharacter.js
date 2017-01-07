function firstNonRepeatingCharacter(s){
    if (s == ""){
        return -1;
    }
    var len = s.length;
    var frequencyMap = {};
    for (var i = 0; i < len; i++){
        var currChar = s.charAt(i);
        if(frequencyMap[currChar] != undefined){
            frequencyMap[currChar].push(i);
        }
        else{
            frequencyMap[currChar] = [i];
        }
    }
    for (var f in frequencyMap){
        if(frequencyMap[f].length == 1){
            return frequencyMap[f][0];
        }
    }
    return -1;
}

console.log(firstNonRepeatingCharacter("loveleetcodecode"));