#!/usr/bin/env node

var coolFace = require('./');
var program = require('commander');

program
.option('-a, --all', 'List all cool faces')
.option('-F, --flip-that-table','FLIP THAT TABLE')
.parse(process.argv);

if (program.all){
  for (var categories in coolFace.faces){
    coolFace.faces[categories].forEach(function (face) {
      process.stdout.write(face + '\n');
    });
  }
}else if (program.flipThatTable){
  flipThatTable = coolFace.faces["flipThatTable"][Math.floor(Math.random()*(coolFace.faces["flipThatTable"].length))];
  process.stdout.write(flipThatTable + '\n');
}else{
  process.stdout.write(coolFace() + '\n');
}
