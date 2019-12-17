/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let maxNum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if(maxNum < nums[i]) {
            maxNum = nums[i];
        }
    }
    return maxNum;
};

var thirdMax = function(nums) {
    let max1, max2, max3;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === max1 || nums[i] === max2 || nums[i] === max3) continue;

        if(max1 === undefined || nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (max2 === undefined || nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        } else if(max3 === undefined ||  nums[i] > max3) {
            max3 = nums[i];
        }
    }
    return max3 === undefined ? max1 : max3;
}

console.log(thirdMax([3, 2, 8, 4, 1]));