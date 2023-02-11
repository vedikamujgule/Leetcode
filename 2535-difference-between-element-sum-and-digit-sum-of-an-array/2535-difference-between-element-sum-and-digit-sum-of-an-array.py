class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        eleSum =0
        digitSum =0
        for i in range(len(nums)):
            eleSum+=nums[i]
            if nums[i] >9:
                n = nums[i]
                n_num=[int(num) for num in str(n)]
                for j in n_num:
                    digitSum += j
            else:
                digitSum+=nums[i]
        return abs(eleSum-digitSum)
                