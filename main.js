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

  <img src= "${images[i]}"/><div class="burgerHearts">${heart}${burger}</div>
  <div class= "title"><a href="${link[i]}">${title[i]}</a></div>
  <div class= "shop"><a href="${link[i]}">${shop[i]}</div>
  <div class = "prices"> <a href="${link[i]}">$${prices[i]}</div>



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
