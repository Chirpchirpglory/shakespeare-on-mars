var NASA_API_KEY = 'EQzgRUB1sMiKLrZo4kd6KPNbIgKB95FV9jaGtVQA'

function getRoverImage(day) {
   // return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + day + '&api_key=' + NASA_API_KEY)
   // ursprüngliche Adresse zeigt Fehler (kein API-key, deshalb hab ich eine andere Webadresse gesucht)
    return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + day + '&api_key=' + NASA_API_KEY)
        .then(function (response) {
                return response.json()
            }
        )
}

function getShakespeareQuote(quoteName, successFunction, failureFunction) {
    if (!quoteName) {
        quoteName = 'shakespeare';
    }
    WikiquoteApi.getRandomQuote(quoteName, successFunction, failureFunction)
}


$(document).ready(function () {

    getShakespeareQuote("wordsworth", function (quote) {
        // Shakespeare Quote instead of my own quote

        //könnte sowas sein wie:
        $('#quote').text( quote.quote );
        $('#quote').append( "<br/>" );
        $('#quote').append( "<h4>" + quote.titles + "</h4>");
        console.log( quote );
        }, function (error) {
            console.log(error)
        });




    getRoverImage().then(function (response) {
        for (i = 0; i < response.photos.length; i++) { 

        var photo = response.photos[i].img_src;
        //$('#bg-image').attr( "src", photo );
        $('.main').append('<img class="bg-image" src="' + photo + '" ></img>');
        console.log(photo);
        //$('#bg-image').appendTo(+ response.rover.cameras + )
        // Rover Image instead of the Moon image
        console.log( response.photos[0].img_src );
        }
    })



});
//Math.floor(Math.random()*1000)
