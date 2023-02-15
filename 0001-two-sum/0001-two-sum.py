class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashTable={}
        for i in range(len(nums)):
            if (target-nums[i]) in hashTable:
                return [i,hashTable[target-nums[i]]]
            hashTable[nums[i]]=i
		
      