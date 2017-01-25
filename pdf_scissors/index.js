'use strict';

var scissors = require('scissors');
var fs = require('fs');

var pdf = scissors('../mock/input/Breaks_GS-Unbalanced-qQs.pdf').even();

pdf.pdfStream().pipe(fs.createWriteStream('../mock/output/scissor_test.pdf'));

