class Lodash {
    chunk() {
        return require('./methods/chunk/chunk').apply(null, arguments);
    }
    compact() {
        return require('./methods/compact/compact').apply(null, arguments);
    }
    concat() {
        return require('./methods/concat/concat').apply(null, arguments);
    }
    difference() {
        return require('./methods/difference/difference').apply(null, arguments);
    }
    differenceBy() {
        return require('./methods/differenceBy/differenceBy').apply(null, arguments);
    }
    differenceWith() {
        return require('./methods/differenceWith/differenceWith').apply(null, arguments);
    }
    isEqual() {
        return require('./methods/isEqual/isEqual').apply(null, arguments);
    }
    drop() {
        return require('./methods/drop/drop').apply(null, arguments);
    }
    dropRight() {
        return require('./methods/dropRight/dropRight').apply(null, arguments);
    }
    dropRightWhile() {
        return require('./methods/dropRightWhile/dropRightWhile').apply(null, arguments);
    }
    dropWhile() {
        return require('./methods/dropWhile/dropWhile').apply(null, arguments);
    }
    fill() {
        return require('./methods/fill/fill').apply(null, arguments);
    }
    findIndex() {
        return require('./methods/findIndex/findIndex').apply(null, arguments);
    }
    findLastIndex() {
        return require('./methods/findLastIndex/findLastIndex').apply(null, arguments);
    }
    head() {
        return require('./methods/head/head').apply(null, arguments);
    }
    flatten() {
        return require('./methods/flatten/flatten').apply(null, arguments);
    }
    flattenDeep() {
        return require('./methods/flattenDeep/flattenDeep').apply(null, arguments);
    }
    flattenDepth() {
        return require('./methods/flattenDepth/flattenDepth').apply(null, arguments);
    }
}

module.exports = Lodash;