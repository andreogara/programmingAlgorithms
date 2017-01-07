"use strict";
function reverseWords(str){

    if (str.replace(/\s/g, "").length < 1){
        return "";
    }

    str = str.replace(/^\s+|\s+$/gm, "").replace(/\s{2,}/g, " ");

    function reverse(s, start, end){
        while(start < end){
            if(s[start] == " "){
                start++;
            }
            var temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }

        return s.join(" ");
    }

    var strArray = str.split(" ");
    var len = strArray.length;
    var start = 0;
    var end = len-1;
    return reverse(strArray, start, end);

}

console.log(" ann  ne ".replace(/\s{2,}/g, " "));