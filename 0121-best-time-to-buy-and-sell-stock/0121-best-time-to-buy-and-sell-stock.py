class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit =0
        minNum = prices[0]
        for i in range(1,len(prices)):
            cost = prices[i]-minNum
            profit = max(profit, cost)
            minNum = min(minNum,prices[i])
        return profit