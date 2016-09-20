$(document).ready(function(){
var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

//var autoSlide = setInterval(function() {
  //currentIndex += 1;
  //if (currentIndex > itemAmt - 1) {
    //currentIndex = 0;
  //}
  //cycleItems();
//}, 10000);

$('.next').click(function() {
  //clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  //clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});
/*


  var showLarge = false;
  $(".sm").click(function(){
    $(".lg").css({"display": "none"});
    $(".caption").css({"display": "none"});
    $(".close").css({"display": "none"});
    showLarge = false;
    return;
  });
  $("#enlarge").click(function(){
    $(".lg").css({"display": "none"});
    $(".caption").css({"display": "none"});
    $(".close").css({"display": "none"});
  });
  $(".sm").click(function(){
    $(".close").css({"display": "block"});
  });

  $(".sm1").click(function(){
    $(".lg1").css({"display":"block"});
    $(".cap1").css({"display":"block"});
  });

  $(".sm2").click(function(){
    $(".lg2").css({"display":"block"});
    $(".cap2").css({"display":"block"});
  });


  $(".sm3").click(function(){
    $(".lg3").css({"display":"block"});
    $(".cap3").css({"display":"block"});
  });

  $(".sm4").click(function(){
    $(".lg4").css({"display":"block"});
    $(".cap4").css({"display":"block"});
  });

  $(".sm5").click(function(){
    $(".lg5").css({"display":"block"});
    $(".cap5").css({"display":"block"});
  });

  $(".sm6").click(function(){
    $(".lg6").css({"display":"block"});
    $(".cap6").css({"display":"block"});
  });

  $(".sm7").click(function(){
    $(".lg7").css({"display":"block"});
    $(".cap7").css({"display":"block"});
  });

  $(".sm8").click(function(){
    $(".lg8").css({"display":"block"});
    $(".cap8").css({"display":"block"});
  });

  $(".sm9").click(function(){
    $(".lg9").css({"display":"block"});
    $(".cap9").css({"display":"block"});
  });

  $(".sm10").click(function(){
    $(".lg10").css({"display":"block"});
    $(".cap10").css({"display":"block"});
  });

  $(".sm11").click(function(){
    $(".lg11").css({"display":"block"});
    $(".cap11").css({"display":"block"});
  });

  $(".sm12").click(function(){
    $(".lg13").css({"display":"block"});
    $(".cap13").css({"display":"block"});
  });

  $(".sm13").click(function(){
    $(".lg12").css({"display":"block"});
    $(".cap12").css({"display":"block"});
  });

  $(".sm14").click(function(){
    $(".lg14").css({"display":"block"});
    $(".cap14").css({"display":"block"});
  });

  $(".sm15").click(function(){
    $(".lg15").css({"display":"block"});
    $(".cap15").css({"display":"block"});
  });

  $(".sm16").click(function(){
    $(".lg16").css({"display":"block"});
    $(".cap16").css({"display":"block"});
  });

  $(".sm17").click(function(){
    $(".lg17").css({"display":"block"});
    $(".cap17").css({"display":"block"});
  });

  $(".sm18").click(function(){
    $(".lg18").css({"display":"block"});
    $(".cap18").css({"display":"block"});
  });

  $(".sm19").click(function(){
    $(".lg19").css({"display":"block"});
    $(".cap19").css({"display":"block"});
  });

  $(".sm20").click(function(){
    $(".lg20").css({"display":"block"});
    $(".cap20").css({"display":"block"});
  });

  $(".sm21").click(function(){
    $(".lg21").css({"display":"block"});
    $(".cap21").css({"display":"block"});
  });

  $(".sm22").click(function(){
    $(".lg22").css({"display":"block"});
    $(".cap22").css({"display":"block"});
  });

  $(".sm23").click(function(){
    $(".lg23").css({"display":"block"});
    $(".cap23").css({"display":"block"});
  });

  $(".sm24").click(function(){
    $(".lg24").css({"display":"block"});
    $(".cap24").css({"display":"block"});
  });

  $(".sm25").click(function(){
    $(".lg25").css({"display":"block"});
    $(".cap25").css({"display":"block"});
  });

  $(".sm26").click(function(){
    $(".lg26").css({"display":"block"});
    $(".cap26").css({"display":"block"});
  });

  $(".sm27").click(function(){
    $(".lg27").css({"display":"block"});
    $(".cap27").css({"display":"block"});
  });

  $(".sm28").click(function(){
    $(".lg28").css({"display":"block"});
    $(".cap28").css({"display":"block"});
  });

  $(".sm29").click(function(){
    $(".lg29").css({"display":"block"});
    $(".cap29").css({"display":"block"});
  });

  $(".sm30").click(function(){
    $(".lg30").css({"display":"block"});
    $(".cap30").css({"display":"block"});
  });

  $(".sm31").click(function(){
    $(".lg31").css({"display":"block"});
    $(".cap31").css({"display":"block"});
  });

  $(".sm32").click(function(){
    $(".lg32").css({"display":"block"});
    $(".cap32").css({"display":"block"});
  });

  $(".sm33").click(function(){
    $(".lg33").css({"display":"block"});
    $(".cap33").css({"display":"block"});
  });*/
});


