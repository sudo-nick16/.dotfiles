
 window.setTimeout(function() { createcoupon();}, 5000);
 function createcoupon(){
   $abc = jQuery.noConflict();
 if($abc("._3cdyb").length>0)
 {
//  $abc('div._3zjTB').click();
  var newcoupon=makeid();
  $abc1 = jQuery.noConflict();
  var fcoupon="SWTREATS-C"+newcoupon;
  if( $abc1('._3cdyb').length>0)
  {
    $abc1('._3cdyb').val(fcoupon);
  
  $abc1('._2uBSr').click();
  }
		    
 }
 }
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i <3; i++)
    text += possible.charAt(Math.floor(Math.random()*possible.length));

  return text;
}