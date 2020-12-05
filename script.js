
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
});