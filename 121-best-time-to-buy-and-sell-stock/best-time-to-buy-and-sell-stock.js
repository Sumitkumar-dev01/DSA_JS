/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let max_profit = 0
    for(let i=1; i<prices.length;i++){
        if(prices[i]-min>max_profit){
            max_profit = prices[i]-min;
        }
        if(prices[i]<min){
            min = prices[i]; 
        }
    }
    return  max_profit
};