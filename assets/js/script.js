$(document).ready(function() {
    var searchAppKey = '077f545de8604fb998f9bd835bfe1197';
    var searchAppId = '9ce8c3da';
    $('#recipeSearchSubmit').on('click', function(event) {
        event.preventDefault();
        var searchItem = $('#recipeSearchBox').val();
        var queryURL = "https://api.edamam.com/search?q=" + searchItem + "&app_id=" + searchAppId + "&app_key=" + searchAppKey;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(data) {
            console.log(data);

            // //creating a div to hold in the card
            // var searchItem = $("<div class='Item'>");
            // //storing the  data
            // var recipeResults = data.hits;

            // //creating an element to have results displayed
            // var pOne = $("<p>").text("recipe results" + recipeResults);
            // //display the results
            // searchItemDiv.append(pOne);
        });
    });
});