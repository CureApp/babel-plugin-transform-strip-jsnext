module.exports = function () {
    return {
        visitor: {
            ExportDeclaration(path) {
                if (path.node.source) {
                    path.node.source.value = path.node.source.value.split(/\/jsnext$/)[0]
                }
            },
            ImportDeclaration(path) {
                path.node.source.value = path.node.source.value.split(/\/jsnext$/)[0]
            }
        }
    }
}
