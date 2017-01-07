function findAnagram(s,p){
   var hashMap = {};
   var result = [];
   for (var i = 0; i < p.length; i++){
       if (hashMap[p.charAt(i)]){
           hashMap[p.charAt(i)]++;
       }
       else{
           hashMap[p.charAt(i)] = 1;
       }
   }
   var left = 0, right = 0, count = p.length;
    while (right < p.length){
        if(hashMap[s.charAt(right)]){
            count--;
        }
        hashMap[s.charAt(right)]--;
        right++;
        if (count == 0){
            result.push(left);
        }
        if(right - left == p.length){
            if(hashMap[s.charAt(left)]){
                count++;
            }
            hashMap[s.charAt(left)]++;
            left++;
        }
    }
    return result;
}

console.log(findAnagram("amandaanm", "man"));