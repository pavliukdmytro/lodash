const zipWith = (...arg) => {
    const callBack = arg[arg.length - 1];
    const newArray = [];
    
    arg.forEach((arr, index) => {
        if(index === arg.length - 1) return;

        arr.forEach((el, i) => {
            if(newArray[i] === undefined) newArray[i] = [];
            newArray[i].push(el);
        });
    });
    
    return newArray.map((el, i) => callBack(...el));
};

module.exports = zipWith;