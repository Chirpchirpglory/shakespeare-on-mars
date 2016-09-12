
//'use strict';

function getGuardianArticle() {
    return fetch('https://content.guardianapis.com/search?api-key=66c812c1-bb8a-452e-8376-f4018592efe9&show-fields=all')
        .then(response => {
            return response.json()
        })
        .then(function (dataFromGuardian) {
            return dataFromGuardian.response.results;
        })
}

function addArticleToPage (article) {
            $('.main').append('<h3>'+article.sectionName +'</h3>') // Sektionsname
            $('.main').append('<h1>'+article.webTitle +'</h1>') // Headline
            $('.main').append('<h2>'+article.fields.standfirst +'</h2>') // Subhead
            $('.main').append('<img src="' + article.fields.thumbnail +'" alt="image from the guardian">') // Bild
            $('.main').append('<h4>'+article.fields.byline +'</h4>') // Autor
           /* $('.main').append('<h2>'+article.twitter +'</h2>') //  Social Media funzt noch nicht */
            $('.main').append('<h5>'+article.webPublicationDate +'</h5>') // Pub-date
          //  $('.main').append('<h2>'+article.class="element-image__caption" +'</h2>') //img caption. funzt noch nicht
            $('.main').append('<p>'+article.fields.body +'</p>') // Text
}

$(document).ready(function () {
    // getGuardianArticle()
    //     .then(function (response) {
    //         console.log(response)
    //         addArticleToPage(response[3]);
    //        addArticleToPage(response[2]);
    //        addArticleToPage(response[1]);
    //        addArticleToPage(response[9]);

    //     });

})
