const test = require('ava')
const fs = require('fs')
const { join } = require('path')
const pkg = require('../package.json')
const convert = require('../index')
const documentsPath = join(__dirname, 'documents')

test('ava works ok', t => {
  t.true(true)
})

Object.keys(pkg.dependencies || {}).forEach(dependency => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})

Object.keys(pkg.devDependencies || {}).forEach(dependency => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})

fs.readdirSync(documentsPath, 'utf-8').forEach(file => {
  const filePath = join(documentsPath, file)
  const langs = ['nb', 'nn', 'en']
  langs.forEach(lang => {
    test(`'${filePath}' converts correctly to '${lang}'`, t => {
      const newDocument = require(filePath)
      const oldDocument = convert(newDocument, lang)
      t.truthy(oldDocument)
    })
  })
})
