/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let a = 1, b = 2, next;

  for (let i = 3; i <= n; i++) {
      next = a + b;
      a = b;
      b = next;
  }
  return n === 1 ? a : b;
};

var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

console.log(climbStairs(5));