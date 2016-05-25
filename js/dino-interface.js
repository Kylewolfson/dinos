var getDinosaur = require('./../js/dino-api.js').getDinosaur;
var oops = require('./../js/dino-api.js').oops;
var fillContainer = require('./../js/dino-api.js').fillContainer;
var encodeName = require('./../js/encodeDino.js').encode;
var dinosaur;
var dinoText = 'assigned';


$(document).ready(function() {

  $('#gameStart').click(function() {
    getDinosaur();
  });
});
