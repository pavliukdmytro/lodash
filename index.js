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
}

module.exports = Lodash;