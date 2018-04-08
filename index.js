'use strict'

// npm
const flatten = require('lodash.flatten')
const range = require('lodash.range')
const PDFJS = require('pdfjs-dist')

const fn = 'Inventaire-des-logiciels-libres-2017.pdf'

const parsePage = (pdf, pageNum) => pdf.getPage(pageNum)
  .then((x) => x.getTextContent())
  .then((x) => x.items.map((y) => y.str))
  .then((x) => {
    const lines = Math.floor(x.length / 4)
    const ret = []
    for (let r = 0; r < lines; ++r) { ret.push(x.slice(4 * r, 4 * (r + 1))) }
    return ret.slice(1)
  })

const extract = (fn) => PDFJS.getDocument(fn)
  .then((pdf) => {
    const parser = parsePage.bind(null, pdf)
    return Promise.all(range(11, 54).map(parser))
  })
  .then(flatten)
  .then((x) => x.map((y) => ({
    type: y[0],
    nom: y[1],
    installations: y[2],
    low: parseInt(y[2].split(/[-+]/)[0] || 1, 10),
    high: parseInt(y[2].split(/[-+]/)[1] || 1000, 10),
    org: y[3]
  })))

extract(fn)
  .then((x) => console.log(JSON.stringify(x)))
  .catch(console.error)
