$s = jQuery.noConflict();
window.setTimeout(ptplaygame, 3000);
function ptplaygame()
{
    //for grabon
    if ($s('article.sm-coupon').length > 0)
        {
             var slider = $s('article.sm-coupon');
        var sliderLength = slider.length;
         for (i = 0; i < sliderLength; i++)
         {
            var coupon=$s('article.sm-coupon div.smc-actions div.smc-actions-r div.sm-code:eq('+i+') span').text();
            //console.log("Coupon"+i+":"+coupon);
            if(coupon!="" && coupon!=null)
            $s('article.sm-coupon div.smc-info:eq('+i+')').append('<span style="border: 4px solid transparent;float:right;font-size: large;outline-style: dotted;outline-color:#009E78;"><span style="color:red;">COUPON:&nbsp;</span><strong>'+coupon+'</strong></span>').show();
         }
        }
         if ($s('article.s-coupon').length > 0)
        {
             var slider = $s('article.s-coupon');
        var sliderLength = slider.length;
         for (i = 0; i < sliderLength; i++)
         {
            var coupon=$s('article.s-coupon div.s-actions div.s-code:eq('+i+') span').text();
           // console.log("Coupon"+i+":"+coupon);
            if(coupon!="" && coupon!=null)
            $s('article.s-coupon div.sc-wrap div.sc-h3:eq('+i+')').append('&nbsp;&nbsp;<span style="border: 4px solid transparent;outline-style: dotted;outline-color:#009E78;"><span style="color:red;">COUPON:&nbsp;</span>'+coupon+'</span>').show();
         }
        }
        //for coupon dunia
          if ($s('div.offer-card-holder').length > 0)
        {
             var slider = $s('div.offer-card-holder');
        var sliderLength = slider.length;
         for (i = 0; i < sliderLength; i++)
         {
            var coupon=$s('div.offer-card-holder div.card-content-top div.get-codebtn-holder:eq('+i+') .get-offer-code').attr('data-offer-value');
                 
            //console.log("Coupon"+i+":"+coupon);
            if(coupon!="" && coupon!=null)
            {
                        $s('div.offer-card-holder div.card-content-top div.get-codebtn-holder:eq('+i+') .get-offer-code').children().remove();
            $s('div.offer-card-holder div.card-content-top div.get-codebtn-holder:eq('+i+') .get-offer-code').append('<br><span style="border: 4px solid transparent;font-size: large;outline-style: dotted;outline-color:#009E78;"><span style="color:red;">COUPON:&nbsp;</span><strong>'+coupon+'</strong></span><br>').show();

            }
         }
        }
        //for shoppirate
            if ($s('div.coupons-list-grid div.coupon').length > 0)
        {
             var slider = $s('div.coupons-list-grid div.coupon');
        var sliderLength = slider.length;
         for (i = 0; i < sliderLength; i++)
         {
            var coupon=$s('div.coupons-list-grid div.coupon div.offer-info div.offer-actions div.offer-button:eq('+i+') .offer-code').text();
            if(coupon!="" && coupon!=null)
            {
                
            $s('div.coupons-list-grid div.coupon div.offer-info div.offer-actions div.offer-button:eq('+i+')').css('display','none');
            $s('div.coupons-list-grid div.coupon div.offer-info div.offer-actions:eq('+i+')').append('<br><span style="border: 4px solid transparent;float:right;font-size: large;outline-style: dotted;outline-color:#009E78;"><span style="color:red;">COUPON:&nbsp;</span><strong>'+coupon+'</strong></span><br>').show();
            }
         }
        }
        //window.setTimeout(ptplaygame, 800);
     // ptplaygame();  
}