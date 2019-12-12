/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 // solution 1
var searchInsert = function(nums, target) {
    return nums.includes(target) ? nums.indexOf(target) : nums.filter(elem => elem < target).length;
};

//solution 2
var searchInsert = function(nums, target) {
    for (let i = 0; i <nums.length; i++) {
        if(nums[i] === target) {
            return i;
        } else {
            nums.push(target);
            nums.sort((a, b) => a -b);
            return nums.indexOf(target);
        }
    }
}

// solution 3
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target);
    if(index > -1) return index;

    if(nums[0] > target) return 0;
    if(nums[nums.length -1] < target) return nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target && nums[i+1] > target) {
            return i + 1;
        }
    }
}
