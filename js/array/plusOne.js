/**
 * @param {number[]} digits
 * @return {number[]}
 */

 // solution 1
var plusOne = function(digits) {
    for (let i = digits.length - 1; 0 <= i; i--) {
        if(digits[i] === 9) {
           digits[i] = 0;
        } else {
            digits[i] += 1;
            return digits;
        }
    }
    return [1, ...digits];
};

// solution 2
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) return digits;
    }
    digits.unshift(1);
    return digits;
}
