$(document).ready(function(){
    $("#show").on("click", function(){
      $("h1").show();
    });
    $("#hide").on("click", function(){
        $("*").hide();
      });
  });