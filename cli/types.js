const fs = require('fs')
const xfs = require('fs/promises')

const xGlob = require('./helper/xGlob')

const buildTypes = async (type) => {
  const files = await xGlob(`packages/${type}/**/*.d.ts`, {
    ignore: [
      '**/node_modules/**',
      '**/*.test.js',
      '**/*.config.js',
      '**/*.setup.js',
    ],
  })

  const refPaths = files.map(filePath => (
    `/// <reference path="${filePath.replace(`packages/${type}`, '.')}" />`
  ))
  refPaths.push('')
  await xfs.writeFile(`packages/${type}/index.d.ts`, refPaths.join('\n'), 'utf-8')
  console.log(`🚀 ~ Added ${refPaths.length - 1} files into "packages/${type}/index.d.ts"\n`)
}

const buildIndex = async (type, ignores = []) => {
  const files = await xGlob(`packages/${type}/**/*.+(js|jsx)`, {
    ignore: [
      '**/node_modules/**',
      '**/*.test.js',
      '**/*.config.js',
      '**/*.setup.js',
      ...ignores,
    ],
  })
  const refPaths = files.map(filePath => (
    `/// <reference path="${filePath.replace(`packages/${type}`, '.')}" />`
  ))
  refPaths.push('')
  await xfs.writeFile(`packages/${type}/index.d.ts`, refPaths.join('\n'), 'utf-8')
  console.log(`🚀 ~ Added ${refPaths.length - 1} files into "packages/${type}/index.d.ts"\n`)
}

module.exports = async (mode, dir) => {
  if (mode === 'clean') {
    const files = await xGlob('packages/**/*.d.ts', {
      ignore: ['**/node_modules/**', '**/i18n.locales.d.ts'],
    })
    Promise.all(files.map(filePath => xfs.unlink(filePath)))
    console.log(`🚀 ~ Cleaning ${files.length} files...\n`)
  }
  if (mode === 'format') {
    Promise.all([
      buildIndex('client'),
      buildTypes('shared'),
    ])
  }
}
