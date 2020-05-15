function isType(element) {
    //console.log(element);
    return {}.toString.call(element).slice(8, -1);
}

module.exports = isType;