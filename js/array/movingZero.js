/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // solution1
var moveZeroes = function(nums) {
    let pos = 0;
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            newArray.push(nums[i]);
            pos++;
        }
    }
    for (let i = pos -1; i > 0; i--) {
        newArray.push(0);
    }
};

// solution 2
var moveZeroes = function(nums) {
    for (i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0) {
            nums.push(nums.splice(i, 1));
        }
    }
    return nums;
 }

// solution 3
var moveZeroes = function(nums) {

    if(nums.includes(0)) {
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] !== 0) {
                nums[j] = nums[i];
                if(i > j) nums[i] = 0;
                j++;
            }
        }
    }
    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));