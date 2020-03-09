/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$(".search").click(function() {
  $(".outputImg").empty();
  var searchTerm = $("input").val();
  var giflink = "https://api.giphy.com/v1/gifs/search?&api_key=wr5FTD48d1jb75Qn4rg9zh7nF9D93cpi&rating=pg&q=" + searchTerm;
  console.log(giflink);
  fetch(giflink)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var i;


        for (i = 0; i < data.data.length; i++) {
          var imgUrl = `<img class="images" src="` + data.data[i].images.downsized_large.url + `">`;
          console.log(imgUrl);
          $(".outputImg").append(imgUrl);

        }

            
      })
});
$(".random-img").click(function(){
  $(".outputImg").empty();
  var searchTerm = $("input").val();
  var giflink = "https://api.giphy.com/v1/gifs/search?&api_key=wr5FTD48d1jb75Qn4rg9zh7nF9D93cpi&rating=pg&q=" + searchTerm;
  console.log(giflink);
  fetch(giflink)
      .then(function(response) {
        console.log("working");
        return response.json();
      })
      .then(function(data) {
        console.log("working");
        var max = data.data.length;
        var randomNum = Math.floor(Math.random() * max);
        var imgUrl = `<img class="actual-randomImg" src="` + data.data[randomNum].images.downsized_large.url + `">`;
        $(".randomImgDiv").html(imgUrl);
      });

});