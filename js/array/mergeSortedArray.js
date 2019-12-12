/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 // solution 1 naive approch
var merge = function(nums1, m, nums2, n) {
    
    let mergedArray = [];
    let arr1 = [], arr2 = [];

    for (let i = 0; i < m; i++) {
        arr1.push(nums1[i]);
    }

    for(let i = 0; i < n; i++) {
        arr2.push(nums2[i]);
    }

    mergedArray = [ ...arr1, ...arr2];
    mergedArray.sort((a, b) => a - b);
    return mergedArray;
};

// solution 2 array method
var merge = function(nums1, m, nums2, n) {
    nums2.splice(n, nums2.length - n);
    nums1.splice(m, nums1.length - m, ...nums2);
    return nums1.sort((a, b) => a -b);
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));