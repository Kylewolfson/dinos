var getDinosaur = require('./../js/dino-api.js').getDinosaur;
var oops = require('./../js/dino-api.js').oops;
var fillContainer = require('./../js/dino-api.js').fillContainer;
var encodeName = require('./../js/encodeDino.js').encode;
var dinosaur;




function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

$(document).ready(function() {
  //var dinoText = 'default';
var errors;
  $('#gameStart').click(function() {
    getDinosaur();
    errors = 10;
  });

  // the click listener for submitting a letter guess has been moved to dino-api.js
  // pardon our dust
});
