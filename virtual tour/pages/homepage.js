// this document is linked 
$(document).ready(function() {
	
   $('.derryberry-link img').mouseenter(function() {
       $(this).animate({
           height: '+=20px'
       });
   });
   $('.derryberry-link img').mouseleave(function() {
       $(this).animate({
           height: '-=20px'
       }); 
   });
   $('.hendersonhall-link img').mouseenter(function() {
       $(this).animate({
           height: '+=20px'
       });
   });
   $('.hendersonhall-link img').mouseleave(function() {
       $(this).animate({
           height: '-=20px'
       }); 
   });
});