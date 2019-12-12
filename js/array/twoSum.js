/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // solution1
var twoSum = function(nums, target) {
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
       if(map.hasOwnProperty(nums[i])) {
           return [ map[nums[i]], i];
       } 
       const compliment = target - nums[i];
       map[compliment] = i;
    }
};

// solution2
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const compliment = map[target - num];
        if(compliment !== undefined) {
            return [i, compliment];
        }
        map[num] = i;
    }

}

