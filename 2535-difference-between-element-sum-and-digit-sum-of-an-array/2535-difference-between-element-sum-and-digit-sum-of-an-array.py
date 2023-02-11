class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        eleSum =0
        digitSum =0
        eleSum = sum(nums)
        for i in nums:
            if i >9:
                digitSum+=sum([int(num) for num in str(i)])
            else:
                digitSum+=i
                print(digitSum, eleSum)
        return abs(eleSum-digitSum)
                