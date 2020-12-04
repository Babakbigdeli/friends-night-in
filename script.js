var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
  "method": "GET",
  "headers": {
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
      "x-rapidapi-key": "dbe3f6aea3mshcb668f8d0f325d8p1c4d2ajsnb5fd0a60e96d"
  }
}
$.ajax(settings).done(function (response) {
  console.log(response);

//input code ticket 4



$(document).ready(function () {
    var apiKey = "e7dd88c3";
    $(".btn").on("click", function () {
      var searchMovie = $("#myInput").val();
      console.log(searchMovie);
function searchMovie
      $.ajax({
        type: "GET",
        url: "http://www.omdbapi.com/?i=tt3896198&apikey=" + apikey + searchMovie 
        dataType: "json",



        //input code ticket 5

      }
    //final ticket to complete program
     
    })