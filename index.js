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
}

module.exports = Lodash;