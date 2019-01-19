const fs = require('fs')                                                                              
const h = require('mutant/html-element')
const svgDataUri = require('mini-svg-data-uri')

module.exports = activityIndicator

function activityIndicator(opts) {
  opts = opts || {}
  const width = opts.width || 256
  const height = opts.height || 256
  const color = opts.color || "#000000"
  let svg = fs.readFileSync(__dirname + '/ball-triangle.svg', 'utf8')
  svg = svg.replace(/stroke="#fff"/g,`stroke="${color}"`)
  const src = svgDataUri(svg)
  return h('img.tre-activityIndicator', {
    src, width, height
  })
}

