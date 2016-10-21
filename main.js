var results = items.results;


var images= results.map(function(result){
return result.Images[0].url_fullxfull;
});
var title = results.map(function (result){
return result.title;
});

var prices = results.map(function (result){
return result.price;
});

var shop = results.map(function (result){
return result.Shop.shop_name;
});

var link = results.map (function (result) {
  return result.url;
});

var number = items.count;
var numberCount = number.toLocaleString('en')
$(".count").append(`(${numberCount})`);

var heart= `<img class="heart" src="./assets/heart.png">`
var burger= `<img class="hamburger" src="./assets/hamburger.png">`

// $( ".burgerHearts" ).hover(
//   function() {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass("burgerHearts");
//   }
// );


$(function() {
  for (var i=0; i <16; i++) {
  $( `#right-container`).append(`<div class='items-box'>
  <div class="burgerHearts"><div>${heart}${burger}</div></div>
  <img src= "${images[i]}"/>
  <div class= "shop">${shop[i]}</div>
  <div class = "prices"> $${prices[i]}</div>
   <div class= "title"><a href="${link[i]}">${title[i]}</a></div>


   </div>`
 );

  }
});

//
// $(.title).click(gettingLinks)
//
// var titleLink= $(`.title`).click()


//
//
//
//
// $(".images").hover(function(x){
//          x.preventDefault();
//           ;
// });
