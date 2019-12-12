/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 // solution 1
var removeElement = function(nums, val) {
    let length = 0;
    
    for (let i = 0; i < nums.length; i++){ 
        if(nums[i] !== val) {
            length++;
        }
    }
    return length;
};

// solution 2
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
}

// solution 3
var removeElement = function(nums, val) {

    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1);
    }
}

console.log(removeElement([3, 2, 2, 3], 3));

