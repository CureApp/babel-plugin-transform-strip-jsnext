module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path) {
                path.node.source.value = path.node.source.value.split(/\/jsnext(\.js)?$/)[0]
            }
        }
    }
}
