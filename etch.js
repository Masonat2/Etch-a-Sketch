


// creates rows and collumns to be appended later //

var $row="<div class='container'</div>";

var $squares="<div class='squares'></div>";

// stores the grid creation in a function so that it can be called later with a varrying size //

function creategrid(gridsize){
// clears the big contatiner of all cells //
$('.bigcontainer').empty();

// appends gridsize rows where gridsize is the number the user types in when the grid is cleared (default 16) //
for(var i=0; i<gridsize; i++){
$(document).ready(function(){

  $(".bigcontainer").append($row);

});

}
// appends gridsize squares to each row where gridsize is the number the user typed in //
for(var i=0; i<gridsize; i++){
$(document).ready(function(){

  $(".container").append($squares);

});

}
// sets a variable to the size in pixels the big container is //
var gridmeasure=800;
// this determines the size each pixel should be by dividing the 800px into equal cells depending on the size of the grid //
var squaresize=(gridmeasure/gridsize);

// adds css height and width in px to each cell //
$(document).ready(function(){
  $(".squares").css("height",  squaresize+"px");
  $(".squares").css("width",  squaresize+"px");

});
// adds hover effect that turns cells black to each cell //
$(document).ready(function(){
$(".squares").hover(function(){
$(this).css("background", "black");
})
});



}
// sets the default size to a 16 by 16 grid until the user determines otherwise //
gridsize=16;
// creates the grid as soon as document loads //
$(document).ready(function(){
  creategrid(16);
});
// prompts the user to determine the new gridsize when the clear button is clicked, and then runs the create grid function with the new gridsize //
$(document).ready(function(){
  $("#clear").click(function(){
  $(".squares").css("background", "white");
  var gridsize= prompt("What is your grid size?");
  creategrid(gridsize);



})
});

// selects 3 random rgb numbers for the rainbow function using Math functions //
$(document).ready(function(){
  $(".rainbow").click(function(){

    $(".squares").hover(function(){
      var $color_r=Math.floor(Math.random()*255);
      var $color_g=Math.floor(Math.random()*255);
      var $color_b=Math.floor(Math.random()*255);

// applies the 3 randoms rgb numbers into the css of each square for the rainbow function //


  $(this).css("background", "rgb("+ $color_r + ", "+ $color_g + ", "+ $color_b + ")");

})
})
});
