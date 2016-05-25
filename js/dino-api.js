var encodeName = require('./../js/encodeDino.js').encode;

exports.getDinosaur = function() {
    var output = "";

    $.ajax('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=1')
      .then(function(response){
        output = response.slice(0, response.length -3);
        console.log(output);
        $('#encodedDiv').text(encodeName(output));
        dinoText = output;
        // return output;
      });
};
  exports.fillContainer = function(html) {
    $('#outputTestDiv').text(html);
  };
  exports.oops = function() {
    console.log('Where did all the dinosaurs go?');
  };
