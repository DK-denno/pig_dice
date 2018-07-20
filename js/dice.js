// player 1 interface.
var P1rollCounter=0;
var player1Score=0;
$(document).ready(function(){
  $("#roll1").click(function(event){
    var min=1;
    var max=6;
//math function to display random numbers
    var rolled=Math.floor(Math.random() * (max - min + 1));
      if (rolled===0) {
      alert(rolled +"," + "YOU ROLLED A ZERO...ROLL AGAIN")
    }else if (rolled===1) {
           $("#player1").hide(4000);
           $("#player2").show();
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

// if (p1rollCounter===5) {
//   $("#player1").hide(400);
//   $("#player2").show(1200);
//   alert("NEXT PLAYER");
// };

  });

});


  var player2Score=0;
  var p2rollCounter=0;
$(document).ready(function(){
  $("#roll2").click(function(event){
    var less=1;
    var top= 6;

    var rolled1=Math.floor(Math.random() * (top - less + 1));
//confirmational test of the .random()function    alert(rolled1);
    if (rolled1===0) {
      alert(rolled1 +"," + "YOU ROLLED A ZERO...ROLL AGAIN")

    }else if (rolled1===1) {
          $("#player2").hide(4000);
          $("#player1").show();
          alert("player 1, You rolled a 1 niccur your turn is over pass the mouse")

    }else {
      $("p#roll2").prepend("<li>" + rolled1 + "</li>")

    }
    //score=current roll + 0/previous roll/sum of previous rolls
    player2Score=player2Score+parseInt(rolled1);
    p2rollCounter=p2rollCounter+=1;
    $('#p2rolls').text(p2rollCounter);
    $("#score2").text(player2Score);


  });
});
