/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$(".search").click(function() {
  var searchTerm = $("input").val();
  var giflink = "https://api.giphy.com/v1/gifs/search?rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY&q=" + searchTerm;
  console.log(giflink);
  fetch(giflink)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        
          console.log(data.class);
            
      })
});