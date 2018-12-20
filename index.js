#!/usr/bin/env node

const fs = require('fs')
const mm = require('musicmetadata')

const showMetadada = function (input) {
  input = cleanInput(input)

  return mm(fs.createReadStream(input), function (err, metadata) {
    if (err) {
      throw err
    }
    return mm(fs.createReadStream(input), { duration: true }, function (err, metadata) {
      if (err) throw err
      console.log(metadata)
    })
  })
}

const cleanInput = function (input) {
  if (typeof input !== 'string' && !Buffer.isBuffer(input)) {
    console.log('You need to povide a string or buffer as an argument!')
    process.exit(1)
  }

  if (!input.endsWith('mp3')) {
    console.log('You need to provide an .mp3 file!')
    process.exit(1)
  }

  return input
}

module.exports = showMetadada(process.argv[2])
