'use strict';

var scissors = require('scissors');
var fs = require('fs');

var pdf = scissors(__dirname + '/../mock/input/Breaks_GS-Unbalanced-qQs.pdf');
// var pdf = scissors(__dirname + '/../mock/input/test.pdf');
var page = pdf.pages(2);

// console.log(pages);

var stream = page.pdfStream().pipe(fs.createWriteStream(__dirname + '/../mock/output/scissor_test.pdf'));
// var stream = page.pdfStream().pipe(fs.createWriteStream(__dirname + '/../mock/output/test_page.pdf'));

// All content
pdf.contentStream().on('data', function (item) {
  if (item.type == 'string') {
    console.log(item.string);
  } else if (item.type == 'image') {
    console.log(item);
  }
});

stream.on('finish', function() {
  // // Return and download.
  // res.download(output);
  console.log('finish');
});


stream.on('error', function(err) {
  console.log(err);
});
