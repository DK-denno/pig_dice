$(document).ready(function(){
  $("#roll").click(function(event){
    var min=1;
    var max=10;
    var rolled=Math.floor(Math.random() * (max - min + 1));
      if (rolled===0) {
      alert(rolled +"," + "YOU ROLLED A ZERO...ROLL AGAIN")
    }else if (rolled===1) {
      alert("player 1, You rolled a 1 niccur your turn is over pass the mouse")
    }else {
        alert(rolled);
    }
//      var score=rolled++rolled;
//    alert("your score is " + score);

  });


});
$(document).ready(function(){
  $("#roller").click(function(event){
    var min=1;
    var max=10;
    var roller=Math.floor(Math.random() * (max - min + 1));
    alert(roller);
  });

});
