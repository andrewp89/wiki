

  $(document).ready(function() {
     // when click on search button, grabs input from search box
$("#searchButton").click(function() {
     var inputFromSearch  = $('#search').val();
     var api = "http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + inputFromSearch + "&callback=?";
// var html = "";
  // getting data
  $.ajax( {
    url: "http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + inputFromSearch + "&callback=?",
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
        console.log(api)
 // will need this later, as a tester now
for (var i = 0; i < 10; i++){
  $( "#resultBox" ).remove();
}


       for( var i = 0 ; i < 10; i++){
var title = data.query.search[i].title
var snip = data.query.search[i].snippet;
 var link = "https://en.wikipedia.org/wiki/" + inputFromSearch;

     $('.jumbotron-special ').append("<div id='resultBox'>" + "<h2><a href='https://en.wikipedia.org/wiki/" + title + "'>" + title + " </a></h2>"


                                     + "<br>" +


                                     "<p>" + snip + "....." + "</div>" )


    };
    }
  });



  });



  });
