$(document).ready(function () {
    var searchAppKey = '077f545de8604fb998f9bd835bfe1197';
    var searchAppId = '9ce8c3da';
    var recipeSearches = $('#recipeSearches');
    $('#recipeSearchSubmit').on('click', function (event) {
        event.preventDefault();
        var searchItem = $('#recipeSearchBox').val();
        var queryURL = "https://api.edamam.com/search?q=" + searchItem + "&app_id=" + searchAppId + "&app_key=" + searchAppKey + "&from=0&to=12";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (data) {
            console.log(data);
<<<<<<< HEAD

            // //creating a div to hold in the card
            // var searchItem = $("<div class='Item'>");
            // //storing the  data
            // var recipeResults = data.hits;

            // //creating an element to have results displayed
            // var pOne = $("<p>").text("recipe results" + recipeResults);
            // //display the results
            // searchItemDiv.append(pOne);
=======
            var results = data.hits;
            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
                var colDiv = $('<div class="col m4">');
                var cardDiv = $('<div class="card">');
                var cardImageDiv = $('<div class="card-image">');
                var cardImage = $('<img>').attr('src', results[i].recipe.image);
                var cardImageSpan = $('<span class="card-title">').text(results[i].recipe.label);
                cardImageDiv.append(cardImage, cardImageSpan);
                var cardContentDiv = $('<div class="card-content">');
                var cardContent = $('<p>').html("Calories: " + Math.floor(results[i].recipe.calories) + "<br/>Total Fat: " + Math.floor(results[i].recipe.totalNutrients.FAT.quantity) + "g<br/>Total Carbohydrates: " + Math.floor(results[i].recipe.totalNutrients.CHOCDF.quantity) + "g<br/>Protein: " + Math.floor(results[i].recipe.totalNutrients.PROCNT.quantity) + "g<br/>Sodium: " + Math.floor(results[i].recipe.totalNutrients.NA.quantity) + "mg");
                cardContentDiv.append(cardContent);
                var cardLinkDiv = $('<div class="card-action">');
                var cardLink = $('<a>').attr('href', results[i].recipe.url).text('Recipe Website');
                cardLinkDiv.append(cardLink);
                cardDiv.append(cardImageDiv, cardContentDiv, cardLinkDiv);
                colDiv.append(cardDiv);
                recipeSearches.append(colDiv);
            }
>>>>>>> 7e75bc80497779825df65a0f08c2264d5f0ea7bf
        });
    });
});