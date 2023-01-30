/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let str = num.toString().split("")
    let s1=[];
    let s2=[];
    str.sort((a, b) => a-b)
    return +(str.slice(0, 1)+ str.slice(2,3)) + +(str.slice(1, 2)+str.slice(3,4))
};