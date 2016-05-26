var encodeName = require('./../js/encodeDino.js').encode;

exports.getDinosaur = function() {
    var output = "";

    $.ajax('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=1')
      .then(function(response){
        output = response.slice(0, response.length -3);
        console.log(output);
        $('#encodedDiv').text(encodeName(output));
        dinoText = output;

        //letter guess click listener.
        $('#letterSubmit').click(function(){
          var guess = $("#letter").val();
          debugger;
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
            errors -= 1;
            console.log("You have " + errors + " mistakes left.");
            if (errors === 0) {
              alert("You lose. Press Start to create a new game.");
            }
          }
          $("#letter").val('');
        });
      });
};
  exports.fillContainer = function(html) {
    $('#outputTestDiv').text(html);
  };
  exports.oops = function() {
    console.log('Where did all the dinosaurs go?');
  };
