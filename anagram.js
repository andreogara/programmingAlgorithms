var groupAnagrams = function(strs) {
    if(!strs[0]){
        return [[""]];
    }
    else{
        var hashMap = {},
            returnArray = [],
            len = strs.length,
            i,
            words;
        for (i = 0; i < len; i++){
            var key = strs[i].split("").sort().join("");
            if (hashMap[key]){
                hashMap[key].push(strs[i]);
            }
            else{
                hashMap[key] = [];
                hashMap[key].push(strs[i]);
            }
        }
        for (words in hashMap){
            returnArray.push(hashMap[words]);
        }

        return returnArray;
    }
};

