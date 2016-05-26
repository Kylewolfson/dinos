var getDinosaur = require('./../js/dino-api.js').getDinosaur;
var oops = require('./../js/dino-api.js').oops;
var fillContainer = require('./../js/dino-api.js').fillContainer;
var encodeName = require('./../js/encodeDino.js').encode;
var dinosaur;
// var dinoText = 'lll';


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

$(document).ready(function() {

  $('#gameStart').click(function() {
    getDinosaur();
  });

  $('#letterSubmit').click(function(){
    var guess = $("#letter").val();
    // debugger;
    guess = guess.slice(0,1);
    console.log(guess);
    if (dinoText.toLowerCase().includes(guess)){
      console.log("Success");
      var code = $('#encodedDiv').html();
      for (var i = 0; i < dinoText.length; i++) {
        if (dinoText[i].toLowerCase() === guess.toLowerCase()) {
          code = setCharAt(code, i, dinoText[i]);
        }
      }
      console.log(code);
      $('#encodedDiv').text(code);

    } else {
      console.log("failure");
    }
    $("#letter").val('');
  });

});
