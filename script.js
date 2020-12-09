
//search recipe search button
$(document).ready(function () {
  $("#recipeBtn").on("click", function () {
    var recipeSearch = $("#recipeInput").val();
    recipeData(recipeSearch);

  });


  //local storage for recipe
  var recipePreviouslySearched =
    JSON.parse(localStorage.getItem("recipe")) || [];
  function createRecipeList(recipe) {
    $(".recipe-history").empty();
    for (var i = 0; i < recipe.length; i++) {
      var listItem = $("<button>").text(recipe[i]).attr("class", "button").attr("value", recipe[i]);
    listItem.on("click", function(){
      recipeData($(this).text())
      })
      $(".recipe-history").append(listItem);

    }
  }

  //local storage for movie
  var moviePreviouslySearched =
    JSON.parse(localStorage.getItem("movie")) || [];

  function createMovieList(movie) {
    $(".movie-history").empty();
    for (var i = 0; i < movie.length; i++) {
      var listItem = $("<button>").text(movie[i]).attr("class", "button").attr("value", movie[i]);
      listItem.on("click", function(){
        movieData($(this).text())
        })
      $(".movie-history").append(listItem);

    }
  }

  //recipe button funciton/ API call
  function recipeData(recipeSearch) {
    $.ajax({
      url: "https://api.edamam.com/search?app_id=40897fdb&app_key=e7085ffc3bbf333e4fcc1dfd79fa54fd&q=" + recipeSearch,
      method: "GET",
    }).then(function (response) {
      // randomised selection of recipe
      var randomRecipe = response.hits[Math.floor(Math.random() * response.hits.length)].recipe
      console.log("I am the random recipe", randomRecipe);
      $(".recipe-card").empty();

      //add to local storage
      if (!recipePreviouslySearched.includes(recipeSearch)) {
        recipePreviouslySearched.push(recipeSearch);
        localStorage.setItem(
          "recipe",
          JSON.stringify(recipePreviouslySearched)
        );
      }
      $(".recipe-history").empty();
      createRecipeList(recipePreviouslySearched);

      //appending recipe data to card 

      var image = $("<p>").addClass("card-image");
      var imageUrl = randomRecipe.image;
      var iconHtml = $("<img>").attr("src", imageUrl);
      var recipeLink = $("<a>").attr("href", randomRecipe.shareAs).attr("target", "_blank").text("Read your recipe at " + randomRecipe.source);
      var label = $("<p>").addClass("card-text").text(randomRecipe.label);
      var recipeUrl = $("<p>").addClass("card-text").text(randomRecipe.shareAs);
      var source = $("<p>").addClass("card-text").text(randomRecipe.source);

      image.append(iconHtml)
      $(".recipe-card").append(image, recipeLink, label, recipeUrl, source);

      $(".level-left").append(card);
    });

    createRecipeList(recipePreviouslySearched);
  }

  //search movie button 
  $("#movieBtn").on("click", function () {
    var movieSearch = $("#movieInput").val();
    movieData(movieSearch);

  });

  //movie button function/ API call
  function movieData(movieSearch) {
    $.ajax({
      url: "https://www.omdbapi.com/?apikey=e7dd88c3&t=" + movieSearch,
      method: "GET",
    }).then(function (response) {
      console.log("I am the ", response);

      $(".movie-card").empty();

      //add to movie storage
      if (!moviePreviouslySearched.includes(movieSearch)) {
        moviePreviouslySearched.push(movieSearch);
        localStorage.setItem(
          "movie",
          JSON.stringify(moviePreviouslySearched)
        );
      }
      $(".movie-history").empty();
      createMovieList(moviePreviouslySearched);

      //appending movie data to card

      var poster = $("<p>").addClass("card-image");
      var posterUrl = response.Poster;
      var iconHtml = $("<img>").attr("src", posterUrl);
      var title = $("<p>").addClass("card-text").text(response.Title);
      var actor = $("<p>").addClass("card-text").text(response.Actors);
      var year = $("<p>").addClass("card-text").text(response.Year);

      poster.append(iconHtml)
      $(".movie-card").append(poster, title, actor, year);


      $(".level-right").append(card);

    });
  };
  createRecipeList(recipePreviouslySearched);
  createMovieList(moviePreviouslySearched);

  
})
