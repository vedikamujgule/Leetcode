/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const hash = {};
    let output = true;

   [...word1].map( char => {
            hash[char] = hash[char] + 1 || 1;
        }
    );

    [...word2].map(char => {
        if(hash[char]) {
            hash[char] = hash[char] - 1;
        } else {
            hash[char] = - 1;
        }
    });
    console.log(hash)
    for(let char in hash){
        Math.abs(hash[char]) > 3 ? output=false: output
    }
    return output
};

