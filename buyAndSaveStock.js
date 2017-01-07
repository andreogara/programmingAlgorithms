function buyAndSell (prices){
    if(prices.length < 2){
        return false;
    }

    var currentMin = prices[0],
        maxProfit = prices[1]-prices[0];
    for (var i = 1; i < prices.length; i++){
        var currentPrice = prices[i];
        maxProfit = Math.max(maxProfit, currentPrice-currentMin);
        currentMin = Math.min(currentMin, currentPrice);
    }
    return maxProfit;
}
