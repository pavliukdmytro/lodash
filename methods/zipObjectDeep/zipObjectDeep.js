const zipObjectDeep = (arr, values) => {
    const obj = {};
    
    const objDeep = (objStr, values, obj, index) => {
        const match = objStr.match(/\w+(\[\w+\])?/i);
        
        const name = match[0].match(/^\w+/)[0];
        const iterator = match[1] ? match[1].match(/\d+/)[0] : undefined;
        const sliceObjStr = objStr.replace(name, '');
        
        if(iterator === undefined) {
            if(obj[name] === undefined) obj[name] = {};
            
            obj[name] = objDeep(sliceObjStr, values, obj[name], index);
        } else if(iterator !== undefined) {
            if(obj[name] === undefined) obj[name] = [];
    
            const objPath = sliceObjStr.match(/[a-z](\w+)?/i)[0];
            obj[name][iterator] = { [sliceObjStr.match(objPath)[0]]: values[index] }
        }
        
        return obj;
    };
    
    arr.forEach((objStr, index) => {
        objDeep(objStr, values, obj, index);
    });
    
    return obj;
};

module.exports = zipObjectDeep;