var fs = require('fs');
var mm = require('musicmetadata');

// create a new parser from a node ReadStream
var parser = mm(fs.createReadStream('src/Venice\ 182-.mp3'), function (err, metadata) {
  if (err) throw err;
  console.log(metadata);
});

parser.on('comment', function (result) {
  console.log(result);
});

parser.on('length', function (result) {
  console.log(result);
});