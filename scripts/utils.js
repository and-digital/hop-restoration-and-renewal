const fs = require('fs')
const path = require('path')

const generateComponentContext = (dir, fName) => {
  const COMPONENTS_DIR = path.resolve(__dirname, dir)
  if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR)
  }
  const createDir = fName => fs.mkdirSync(`${COMPONENTS_DIR}/${fName}`)
  const createTestDir = fName => fs.mkdirSync(`${COMPONENTS_DIR}/${fName}/test`)

  const replaceInTemplate = template => needle =>
    template.replace(/\$CNAME/g, needle).replace(/\$FNAME/g, needle)

  const generateWriteComponent = fName => template =>
    fs.writeFileSync(
      `${COMPONENTS_DIR}/${fName}/${fName}.js`,
      replaceInTemplate(template)(fName),
      'utf8',
    )

  const generateWriteIndex = fName => template =>
    fs.writeFileSync(
      `${COMPONENTS_DIR}/${fName}/index.js`,
      replaceInTemplate(template)(fName),
      'utf8',
    )

  const generateWriteTest = fName => template =>
    fs.writeFileSync(
      `${COMPONENTS_DIR}/${fName}/test/${fName}.test.js`,
      replaceInTemplate(template)(fName),
      'utf8',
    )
  createDir(fName)
  createTestDir(fName)

  return {
    writeComponent: generateWriteComponent(fName),
    writeIndex: generateWriteIndex(fName),
    writeTest: generateWriteTest(fName),
  }
}

module.exports = {
  generateComponentContext,
}
