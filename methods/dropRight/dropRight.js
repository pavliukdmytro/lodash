const dropRight = (arr, number = 1) => {
    return arr.slice(0, number ? number * -1 : undefined);
};

module.exports = dropRight;