function differenceWith(mainArr, secondArr, iterator) {
    const difference = [];
    
    for(let i = 0; i < mainArr.length; i++) {
        for(let x = 0; x < secondArr.length; x++) {
            if(!iterator(mainArr[i], secondArr[x])){
                difference.push(mainArr[i]);
            }
        };
    };
    
    return difference;
}

module.exports = differenceWith;