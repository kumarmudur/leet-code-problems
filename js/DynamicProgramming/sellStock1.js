/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let result = 0;
   for (let i = 0; i < prices.length; i++) {
       for (let j = i + 1; j < prices.length; j++) {
           if (prices[i] < prices[j]) {
               result = Math.max(result, prices[j] - prices[i]);
           }
       }
   }
   return result;
};

var maxProfit1 = function(prices) {
    const priceLen = prices.length;
    if (priceLen === 0) return 0;
    let result = 0, i = 0, j = 1, currentMin = prices[0];
    while(j < priceLen) {
        result = Math.max(prices[j] - currentMin, result);
        currentMin = Math.min(prices[j], currentMin);
        ++j;
    }
    return result;
}

maxProfit1([7,1,5,3,6,4]);