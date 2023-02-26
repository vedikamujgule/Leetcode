/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    arr = s.split(" ")
    arrNew = []
    arr.forEach(ele=>{
        // console.log(ele, ele.split("").reverse().join(""))
        arrNew.push(ele.split("").reverse().join(""))
    })
    return arrNew.join(" ")
};