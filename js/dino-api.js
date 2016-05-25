var encodeName = require('./../js/encodeDino.js').encode;

exports.getDinosaur = function() {
    dinoText = "default";

    $.ajax('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=1')
      .then(function(response){
        dinoText = response.slice(0, response.length -3);
        console.log(dinoText);
        $('#encodedDiv').text(encodeName(dinoText));
      });
};
  exports.fillContainer = function(html) {
    $('#outputTestDiv').text(html);
  };
  exports.oops = function() {
    console.log('Where did all the dinosaurs go?');
  };
