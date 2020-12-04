
$.ajax({
type: "GET",
  url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
  dataType: "json",


})

//input code ticket 4



$(document).ready(function () {
    var apiKey = "e7dd88c3";
    $(".btn").on("click", function () {
      var searchMovie = $("#myInput").val();
      console.log(searchMovie);

    

      $.ajax({
        type: "GET",
        url: "http://www.omdbapi.com/?i=tt3896198&apikey=",
        dataType: "json",

        //input code ticket 5

      }
    //final ticket to complete program
      )}

    )})