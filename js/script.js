$( ".cross" ).hide();
$( ".hamburger" ).click(function() {
  $( ".slide" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    $( ".portfolio-links" ).hide();
  });
  $(".contact").slideDown("slow");
});

$( ".cross" ).click(function() {
  $(".portfolio-links").hide();
  $(".dropp-hide").hide();
  $( ".slide" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
  });
  // $(".portfolio-links").slideToggle("slow");
});

$(".portfolio-img").click(function() {
  $(".slide").slideToggle("slow");
  $(".portfolio-links").slideToggle("slow");
});

$(".dropp-img").click(function() {
  $(".dropp-hide").slideToggle("slow");
  $(".portfolio-links").slideToggle("slow");
});
