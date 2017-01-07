function sorter(a,b){
    return a-b;
}
function threeSum(nums){
    nums.sort(sorter);
    console.log(nums);
    var len = nums.length,
        map = [],
        bucket=[],
        i,
        j,
        k,
        sum;
    for (i = 0; i < len - 2; i++){
        if (i > 0 && nums[i] == nums[i-1]){
            continue;
        }
        j = i+1;
        k = len-1;
        while(j < k){
            sum = nums[i]+nums[j]+nums[k];
            if(sum > 0){
                k--;
                while(nums[k] == nums[k+1] && j < k){
                    k--;
                }
            }
            else if(sum < 0){
                j++;
                while(nums[j] == nums[j-1] && j < k){
                    j++;
                }
            }
            else{
                bucket = [];
                bucket.push(nums[i], nums[j], nums[k]);
                map.push(bucket);
                k--;
                while(nums[k] == nums[k+1] && j < k){
                    k--;
                }
                j++;
                while(nums[j] == nums[j-1] && j < k){
                    j++;
                }
            }
        }
    }
    return map;
}
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));