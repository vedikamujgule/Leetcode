class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        maxCount=0
        for sentence in sentences:
            if maxCount<len(sentence.split()):
                maxCount=len(sentence.split())
        return maxCount