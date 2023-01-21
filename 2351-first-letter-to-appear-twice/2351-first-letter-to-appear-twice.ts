const repeatedCharacter = (s, obj=new Set()) => {
    for(let i=0; i<s.length; i++) 
        if(obj.has(s[i])) return s[i];
        else obj.add(s[i])
};