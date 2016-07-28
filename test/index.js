const assert = require('assert')
const fs = require('fs')
const path = require('path')
const babel = require('babel-core')

const pluginPath = __dirname + '/..'

it('transforms "foo-bar/jsnext to foo-bar"', function () {
    const code = 'import abc from "foo-bar/jsnext";'
    const expected = 'import abc from "foo-bar";'

    const actual = babel.transform(code, { plugins: [pluginPath] }).code
    assert(actual === expected)
})

it('transforms "../foo/bar/jsnext to foo-bar"', function () {
    const code = 'import abc from "../foo/bar/jsnext";'
    const expected = 'import abc from "../foo/bar";'

    const actual = babel.transform(code, { plugins: [pluginPath] }).code
    assert(actual === expected)
})

it('does not transform "foo-bar/jsnext/abc"', function () {
    const code = 'import abc from "foo-bar/jsnext/abc";'
    const expected = 'import abc from "foo-bar/jsnext/abc";'

    const actual = babel.transform(code, { plugins: [pluginPath] }).code
    assert(actual === expected)
})

it('does not transform "foo-bar/jsnext-xxx"', function () {
    const code = 'import abc from "foo-bar/jsnext-xxx";'
    const expected = 'import abc from "foo-bar/jsnext-xxx";'

    const actual = babel.transform(code, { plugins: [pluginPath] }).code
    assert(actual === expected)
})

it('does not transform "foo-bar/special-jsnext"', function () {
    const code = 'import abc from "foo-bar/special-jsnext";'
    const expected = 'import abc from "foo-bar/special-jsnext";'

    const actual = babel.transform(code, { plugins: [pluginPath] }).code
    assert(actual === expected)
})
