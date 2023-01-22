function reverseVowels(s: string): string {
    let map = new Set();
    let reverse =  new Map();
    map.add('a')
    map.add('e')
    map.add('i')
    map.add('o')
    map.add('u')
    map.add('A')
    map.add('E')
    map.add('I')
    map.add('O')
    map.add('U')
    let start = 0;
    let end = s.length -1;
    let res = [];
    var chars = s.split('')
    while(start<end){
          while(start<end && !map.has(chars[start])){
              start++;
          }
           while(start<end && !map.has(chars[end])){
              end--;
          }
        let temp = chars[start];
        chars[start++]= chars[end];
        chars[end--] = temp;

    }
    return chars.join("")
};