class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        newList=[]
        sum=0
        for i in nums:
            sum = sum+i
            newList.append(sum)
        return newList