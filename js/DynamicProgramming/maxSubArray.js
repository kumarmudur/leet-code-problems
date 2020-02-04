// solution1 brute force 

var maxSubArray = function(nums) {
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let tmp = nums[i];
        max = Math.max(tmp, max);
        for (let j = i + 1; j < nums.length; j++) {
            tmp += nums[j];
            max = Math.max(tmp, max);
        }
    }
    return max;
}


// solution 2
var maxSubArray1 = function(nums) {
    let currentSum = nums[0];
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], nums[i] + currentSum);
        max = Math.max(max, currentSum);
    }
    return max;
}

maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]);