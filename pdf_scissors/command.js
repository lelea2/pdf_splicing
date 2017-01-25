//Execute pdf splicing with command

'use strict';

var exec = require('child_process').exec,
    child;

// child = exec('pdftk ../mock/input/Breaks_GS-Unbalanced-qQs.pdf cat 1-3 output ../mock/output/command_test.pdf',

child = exec('pdftk test.pdf cat 1-3 output try1.pdf',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
