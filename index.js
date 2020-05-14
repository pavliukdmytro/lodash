class Lodash {
    chunk() {
        return require('./methods/chunk/chunk').apply(null, arguments);
    }
}

module.exports = Lodash;