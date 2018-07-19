$(document).ready(function(){
  $("#roll").click(function(event){
    var min=0;
    var max=10;
    var rolled=Math.floor(Math.random() * (max - min + 1));
    alert(rolled);
  });
});
