var results = items.results;

$(function() {
  for (var i=0; i <16; i++) {
  $( "<div class='dumb-box'>first dumb image</div>").appendTo( "#right-container" );

  }
});

var prices = results.map(function(result){
return result.price;
})

var images = results.map(function(result){
return result.Images[0].url_fullxfull
;
})
