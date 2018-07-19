var P1rollCounter=0;
var player1Score=0;
$(document).ready(function(){
  $("#roll").click(function(event){
    var min=1;
    var max=6;

    var rolled=Math.floor(Math.random() * (max - min + 1));
      if (rolled===0) {
      alert(rolled +"," + "YOU ROLLED A ZERO...ROLL AGAIN")
    }else if (rolled===1) {
          // $("#player1").hide(400);
          // $("#player2").show(1200);
          alert("player 1, You rolled a 1 niccur your turn is over pass the mouse")
    }else {
        $("p#roll1").prepend("<li>" + rolled + "</li>");

        player1Score=player1Score+parseInt(rolled);
        P1rollCounter=P1rollCounter+=1;
        $('#P1rolls').text(P1rollCounter)
        $("#score1").text(player1Score);
    }
//      var score=rolled++rolled
//    alert("your score is " + score);

  });


});

$(document).ready(function(){
  $("#roller").click(function(event){
    var min=1;
    var max=6;
    var roller=Math.floor(Math.random() * (max - min + 1));
    alert(roller);
    if (roller===0) {
      alert(roller +"," + "YOU ROLLED A ZERO...ROLL AGAIN")

    }else if (roller===1) {
      // $("#player1").show(400);
      // $("#player2").hide(1200);
      alert("player 1, You rolled a 1 niccur your turn is over pass the mouse")


    }









  });

});
