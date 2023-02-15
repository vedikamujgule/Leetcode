class Solution:
    def balancedStringSplit(self, s: str) -> int:
        count = res = 0
        for ch in s:
            if ch=='L': 
                count+=1 
            else:
                count-=1
            if count ==0:
                res+= 1
        return res
                