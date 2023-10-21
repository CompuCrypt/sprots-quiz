$(document).ready(function(){
  $(":button").css("padding", "10px 100px 10px 100px");
  $(":button").css("border-radius", "15px");
  $(":button").css("margin-bottom", "15px");
  $(":button").css("width", "100%");

$(function() {
  $("h1").text("Sports Quiz!");
  $("h1").css('textAlign', 'center');
  $("h1").css('fontSize', '70px');
})

$('p').css('font-size', '45px');
$('p').css('color', '');
$("p").css('textAlign', 'center');

$(":button").hover(function(){
  $(this).css("background-color", "black");
}, function(){
  $(this).css("background-color", "white");
});

$(":button").hover(function(){
  $(this).css("color", "white");
}, function(){
  $(this).css("color", "black");
});

$('.correct').click(() => {
  $('.check').prepend("CORRECT!!!")
  $(".correct").unbind();
  $(".wrong").unbind();
  var score = parseInt($('#score').text());
  score = score +=1;
  $('#score').text(score);   
})

$('.correct2').click(() => {
  $('.check2').prepend("CORRECT!!!")
  $(".correct2").unbind();
  $(".wrong2").unbind();
  var score = parseInt($('#score').text());
  score = score +=1;
  $('#score').text(score); 
})

$('.correct3').click(() => {
  $('.check3').prepend("CORRECT!!!")
  $(".correct3").unbind();
  $(".wrong3").unbind();
  var score = parseInt($('#score').text());
  score = score +=1;
  $('#score').text(score); 
})

$('.correct4').click(() => {
  $('.check4').prepend("CORRECT!!!")
  $(".correct4").unbind();
  $(".wrong4").unbind();
  var score = parseInt($('#score').text());
  score = score +=1;
  $('#score').text(score);     
})

$('.wrong').click(() => {
  $('.ex').prepend("SORRY, INCORRECT");
  $(".wrong").unbind(); 
  $(".correct").unbind();
})

$('.wrong2').click(() => {
  $('.ex2').prepend("SORRY, INCORRECT")
  $(".wrong2").unbind();
  $(".correct2").unbind();
})

$('.wrong3').click(() => {
  $('.ex3').prepend("SORRY, INCORRECT")
  $(".wrong3").unbind();
  $(".correct3").unbind();
})

$('.wrong4').click(() => {
  $('.ex4').prepend("SORRY, INCORRECT")
  $(".wrong4").unbind();
  $(".correct4").unbind();
})

$(".wrong").click(
  function() {
    console.log("clicked...waiting...");
    
    setTimeout(
      function() {
        $('.container1').remove();
        $('.ex').remove();
        $(".container2").slideDown(900);
      },
      1000);

  });

  $(".wrong2").click(
    function() {
      console.log("clicked...waiting...");
  
      setTimeout(
        function() {
          $('.container2').remove();
          $('.ex2').remove();
          $(".container3").slideDown(900);
        },
        1000);
  
    });

    $(".wrong3").click(
      function() {
        console.log("clicked...waiting...");
    
        setTimeout(
          function() {
            $('.container3').remove();
            $('.ex3').remove();
            $(".container4").slideDown(900);
          },
          1000);    
    });

    $(".wrong4").click(
      function() {
        console.log("clicked...waiting...");
      
        setTimeout(
          function() {
            $('.container4').remove();
             $('.ex4').remove();
             $(".container5").fadeIn(900);
          },
        1000);
      
      });
  

  $(".correct").click(
    function() {
      console.log("clicked...waiting...");

      setTimeout(
        function() {
          $('.container1').remove();
          $('.check').remove();
          $(".container2").slideDown(900);            
        },          
      1000);  
              
  });

  $(".correct2").click(
    function() {
      console.log("clicked...waiting...");

      setTimeout(
        function() {
          $('.container2').remove();
          $('.check2').remove();
          $(".container3").slideDown(900);         
        },
      1000);
          
  });

  $(".correct3").click(
    function() {
      console.log("clicked...waiting...");
  
      setTimeout(
        function() {
          $('.container3').remove();
          $('.check3').remove();
          $(".container4").slideDown(900);
        },  
      1000);          
  });

  $(".correct4").click(
    function() {
      console.log("clicked...waiting...");
    
      setTimeout(
        function() {
          $('.container4').remove();
          $('.check4').remove();
          $(".container5").fadeIn(900);                  
        },    
      1000);                      
  });

});

