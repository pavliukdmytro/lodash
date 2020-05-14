function concat() {
    const arg = Array.from(arguments);
    const arr = arg[0].slice();
    
    for(let i = 1; i < arg.length; i++) {
        if(Array.isArray(arg[i])) {
            for(let x = 0; x < arg[i].length; x++) {
                if(Array.isArray(arg[i])) {
                    arr.push(arg[i][x]);
                }
            }
        } else {
            arr.push(arg[i]);
        }
    }
    
    return arr;
}

module.exports = concat;