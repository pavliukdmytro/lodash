function compact(arr) {
    return arr.filter(el => !!el);
}

module.exports = compact;