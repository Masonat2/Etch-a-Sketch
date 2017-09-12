






var $row="<div class='container'</div>";

var $squares="<div class='squares'></div>";



function creategrid(gridsize){

$('.bigcontainer').empty();


for(var i=0; i<gridsize; i++){
$(document).ready(function(){

  $(".bigcontainer").append($row);

});

}

for(var i=0; i<gridsize; i++){
$(document).ready(function(){

  $(".container").append($squares);

});

}

var gridmeasure=800;

var squaresize=(gridmeasure/gridsize);


$(document).ready(function(){
  $(".squares").css("height",  squaresize+"px");
  $(".squares").css("width",  squaresize+"px");

});
$(document).ready(function(){
$(".squares").hover(function(){
$(this).css("background", "black");
})
});



}
gridsize=16;

$(document).ready(function(){
  creategrid(16);
});

$(document).ready(function(){
  $("#clear").click(function(){
  $(".squares").css("background", "white");
  var gridsize= prompt("What is your grid size?");
  creategrid(gridsize);






})
});
