$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var sentence = $("#item1").val();
    var split = sentence.split(' ');
    console.log(split);
    newArray = [];
    var sentenceArray = split.map(function(word) {
      if (word.length > 3) {
        newArray.push(word);
      } else {
        console.log("Error! Not split.");
      }
    });
  //
  //   var input = ["item1"];
  //   // var splitArray = [];
  //   debugger;
  //
  // //End inputs function.
  //
  //   var userInput = $("#"+input).val();
  //   var regExp = \b[a-zA-Z]{3,}\b
  //     $("." + input).text(userInput);
  //   var space = " ";
  //
  //   splitString(userInput, space);
  //
  //   $("#sentenceResult").show();

  }); //End form submit function.

});
