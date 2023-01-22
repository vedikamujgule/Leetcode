function removeVowels(s: string): string {
    var set = new Set();
    set.add('a');
    set.add('e');
    set.add('i');
    set.add('o');
    set.add('u');
    let stringSpli = s.split("")
    var res = []
    for(let i=0; i<stringSpli.length; i++){
        if(!set.has(stringSpli[i]))
          res.push(stringSpli[i])
    }
    return res.join("");
};