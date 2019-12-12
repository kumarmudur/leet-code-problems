
/**
 * @param {number[]} nums
 * @return {number}
 */

 // solution 1
var removeDuplicates = function(nums) {
    let mySet = new Set(nums);
    let newArray = [ ...mySet];
    return newArray.length;
};

// solution 2
var removeDuplicates = function(nums) {

    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[length]) {
            length++;
            nums[length] = nums[i];
        }
    }
    return length + 1;
};

