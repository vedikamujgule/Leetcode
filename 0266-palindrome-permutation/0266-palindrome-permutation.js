/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = new Map();
    s.trim();
    for(let i=0; i<s.split("").length; i++){
        const char = s.charAt(i)
        map.set(char, (map.get(char) ||0 )+1)
    }
    //count no of char with odd count
    let oddCount = 0;
    for (let count of map.values()){
        if(count%2 !== 0)
            oddCount++
    }
    
    return oddCount <= 1
};