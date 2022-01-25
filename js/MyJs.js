$(document).ready(function(){
  $("#myBtn").click(function(){
      $("#myCarousel").carousel("next");
  });
  $("#myBtn").click(function(){
   $("#myCarousel").carousel("prev");
});

$('#showmore').on('click', function () {
// For multiple css property
$('#showmore').css('display','none');
$('#fourthSec').css('margin-top','10%');
$('#fourthSec').css('-webkit-box-shadow','none');
$('#fourthSec').css('box-shadow','none');
});

});
