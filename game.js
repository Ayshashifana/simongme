
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClicked=[];
var level=0;
var started=false;
$(document).keydown(function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nexSequence();
    started=true;
  }

});

$(".btn").click(function(){
  var userChosen=$(this).attr("id");
  userClicked.push(userChosen);
  playSound(userChosen);
  animatePress(userChosen);
checkanser(userClicked.length-1);
});


function checkanser(currentLevel){
  if(gamePattern[currentLevel]===userClicked[currentLevel]){
    if((gamePattern.length)===(userClicked.length)){
      setTimeout(function(){
        nexSequence();
      },1000);
      }
    }else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Refersh to start");
      setTimeout(function(){
        $("body").removeClass("game-over");},200);
        startAgain();
      }

  }





function nexSequence(){
  userClicked=[];
  level++;
  $("#level-title").text("Level "+ level);
  var randomNumber=Math.floor(Math.random()*4);
  var chosenColour=buttonColors[randomNumber];
  gamePattern.push(chosenColour);

  $("#"+chosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(chosenColour);
  animatePress(chosenColour);
}
function playSound(name){
  var sound=new Audio("sounds/" + name + ".mp3")
  sound.play();
}
function animatePress(curentcolor){
  $("#"+curentcolor).addClass("pressed");

  setTimeout(function(){
    $("#"+curentcolor).removeClass("pressed");},100);
}
function startAgain(){
level=0;
gamePattern=[];
started=true;
}
