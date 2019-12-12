/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // solution 1
var containsDuplicate = function(nums) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if(hashMap[nums[i]] !== undefined) {
            return true;
        } 
        hashMap[nums[i]] = true;
    }
    return false;
};

// solution 2
var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;
}

// solution 3
var containsDuplicate = function(nums) {
    return nums.sort().some((a, i) => a === nums[i - 1]);
}


console.log(containsDuplicate([1,2, 3, 4]));