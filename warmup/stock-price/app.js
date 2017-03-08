
var stockPrices = [4, 3,5,7,456,8];

var getMaxProfit = function (prices) {
    var difference = 0;
    for (var i = 0; i < prices.length; i++) {
        for (var j = 1 + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > difference) {
                difference = prices[j] - prices[i];
            }
        }
    }
   console.log (difference);
};

getMaxProfit(stockPrices); 