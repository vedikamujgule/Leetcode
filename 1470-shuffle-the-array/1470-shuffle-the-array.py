class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        shuffledArr1= nums[0:n]
        shuffledArr2= nums[n:len(nums)]  
        arr =[]
        for i in range(n):
            arr.append(shuffledArr1[i])
            arr.append(shuffledArr2[i])
        return arr