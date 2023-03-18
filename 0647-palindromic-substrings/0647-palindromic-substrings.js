/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    res = 0;
    for(let i=0; i<s.length;i++){
        res += countPalindrome(s,i,i)
        res += countPalindrome(s,i,i+1)
    }
    return res
};

function countPalindrome(s,l,r){
    res =0
    while(l>=0 && r<s.length && s[l]==s[r]){
            res +=1;
            l -= 1;
            r += 1;
    }
    return res;
}