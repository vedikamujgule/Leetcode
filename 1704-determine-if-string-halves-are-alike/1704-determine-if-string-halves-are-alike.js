/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    count = 0;
    s=s.split("")
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    for(let i=0; i<s.length /2; i++){
        if(vowels.has(s[i]))
            count ++
        if(vowels.has(s[s.length/2 +i]))
            count --
    }
    return count ===0
};