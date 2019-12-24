/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let total = nums.length;
  
    for(let i = 0; i < nums.length; i++) {
      total = total + i - nums[i];
    }
    return total;
};

console.log(missingNumber([3, 0, 5, 1]));