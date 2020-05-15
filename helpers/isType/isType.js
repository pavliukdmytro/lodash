const isType = (element) => {
    return {}.toString.call(element).slice(8, -1);
};

module.exports = isType;