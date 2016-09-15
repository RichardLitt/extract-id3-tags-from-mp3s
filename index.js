var fs = require('fs');
var mm = require('musicmetadata');

var parser = mm(fs.createReadStream('src/Venice\ 182-.mp3'), function (err, metadata) {
  if (err) throw err;
  console.log(metadata);
});