
//search recipe search button
$(document).ready(function(){
  $("#recipeBtn").on("click", function(){
    var recipeSearch = $("#recipeInput").val();
    recipeData(recipeSearch);

  });
function recipeData(recipeSearch){
  $.ajax({
    url: "https://api.edamam.com/search/q=" + recipeSearch ,
    type: "GET",
    xhrFields: {
      withCredentials: true
   }
  }).then(function(response){
    console.log("I am the ", response);
  });
}
})