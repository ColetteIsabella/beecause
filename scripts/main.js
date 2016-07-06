//$(function(){
  //$("body").onLoad(function(){
   // $(".large").css({"display": "none"});
  //});
  $(function(){
    $("#thumbnails").click(function(){
      $(".close").css({"display":"block"});

    });
    $("#enlarge img").click(function(){
      $(".close").css({"display": "none"});
      $(".caption").css({"display":"none"});
    });
    $(".close").click(function(){
      $("#enlarge img").css({"display":"none"});
      $(".close").css({"display":"none"});
      $(".caption").css({"display":"none"});
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

  });
