
var winloc = window.location.href;
localStorage.jack="00";
localStorage.vivo="0";
$s = jQuery.noConflict();
//autocallsale();

var count, ti = 0;
if (winloc.search("&pt=1")>0)
{
chrome.runtime.sendMessage({
  mode : "saledate",val:"fsaledata"
}, function(response) {
	 var fmobiles = $s.parseJSON(response.saledata);
 for (var i = fmobiles.length - 1; i >= 0; i--) {

	fkautobuy(fmobiles[i][0], fmobiles[i][1], fmobiles[i][2], fmobiles[i][3],fmobiles[i][4],fmobiles[i][5]);
 }
	});
}

//fkautobuy("pocom2problack4gb64","Nokia 5.1 Plus (Blue, 32 GB)  (3 GB RAM)","07 27 2020 23:40:00","pid=RAKF7XFQAEFYEGFR","0.6","LSTRAKF7XFQAEFYEGFRWMVALL");
//fkautobuy("redmi4agold3gbfl", "Redmi Note 4 Black 4GB RAM 64GB", "09 16 2017 12:00:00", "pid=9780751565355",0.6,'LSTBOK9780751565355PJBYVN');
//fkautobuy("redminote4black4gb8feb", "Redmi Note 4 Black 4GB RAM 64GB", "05 14 2017 13:10:00", "pid=PTPDVPEXVGA2TBHE",0.6,'LSTPTPDVPEXVGA2TBHEXW8VBR');
//fkautobuy("redminote4black4gb8feb", "Redmi Note 4 Black 4GB RAM 64GB", "05 14 2017 13:10:00", "pid=CKSEDUTZHFW5EFHV",0.6,'LSTCKSEDUTZHFW5EFHVUACEAQ');
//fkautobuy("redmi4agrey3gbfl", "Redmi 4A (Grey,3 GB RAM, 32 GB)", "08 31 2017 12:00:00", "pid=MOBEWV2NZXYJFFHA",0.6,'LSTMOBEWV2NZXYJFFHAXDO6VD');
//fkautobuy("redmi4agold3gbfl", "Redmi 4A (Gold,3 GB RAM, 32 GB)", "08 31 2017 12:00:00", "pid=MOBEWV2NK5KU2D6N",0.6,'LSTMOBEWV2NK5KU2D6N5OGPPD');
//fkautobuy("mia1gold", "Xiaomi Mi A1 (Gold,4 GB RAM, 64 GB)", "09 21 2017 00:00:00", "pid=MOBEX9WXZCZHWXUZ",0.6,'LSTMOBEX9WXZCZHWXUZELHO8V');
//fkautobuy("mia1black", "Xiaomi Mi A1 (Black,4 GB RAM, 64 GB)", "09 21 2017 00:00:00", "pid=MOBEX9WXUSZVYHET",0.6,'LSTMOBEX9WXUSZVYHETFSTZ7W');
//fkautobuy("mimix2black", "Xiaomi Mi Mix 2 (Black,6 GB RAM, 128 GB)", "10 17 2017 12:00:00", "pid=MOBEYCHKGHZJMGJZ",0.6,'LSTMOBEYCHKGHZJMGJZP7ZBQC');
//fkautobuy("oneplus3", "One Plus 3", "12 18 2016 16:00:00", "pid=MOBEZVCGTMQTRBBB",10);
/*fkautobuy("lenovok6pdarkgrey4gb", "Lenovo K6 Power (Dark Grey)", "03 07 2017 00:01:00", "pid=MOBEZENFG8BPDPSU",0.6,'LSTMOBEZENFG8BPDPSUUANLO6');
fkautobuy("lenovok6psilver4gb", "Lenovo K6 Power (Silver)", "03 07 2017 00:01:00", "pid=MOBEZENFKXZ4HSCG",0.6,'LSTMOBEZENFKXZ4HSCGC1OOAM');
fkautobuy("lenovok6pgold4gb", "Lenovo K6 Power (Gold)", "03 07 2017 00:01:00", "pid=MOBEZENFSZGTQGWF",0.6,'LSTMOBEZENFSZGTQGWFUR1LY1');
fkautobuy("lenovok6pdarkgrey3gb", "Lenovo K6 Power (Dark Grey)", "03 07 2017 00:01:00", "pid=MOBEZENFZBPW8UMF",0.6,'LSTMOBEZENFZBPW8UMF7P8NY0');
fkautobuy("lenovok6pgold3gb", "Lenovo K6 Power (Gold)", "03 07 2017 00:01:00", "pid=MOBEZEMYH7FQBGBQ",0.6,'LSTMOBEZEMYH7FQBGBQRHVU0S');
fkautobuy("lenovok6psilver3gb", "Lenovo K6 Power (Silver)", "03 07 2017 00:01:00", "pid=MOBEZEMX6CZHCJVY",0.6,'LSTMOBEZEMX6CZHCJVYOIBM0E');*/
//fkautobuy("honor7silver", "Honor 7 (Silver)", "12 12 2016 20:15:00", "pid=MOBEBAGJF5XGY4Y9",15);
//setCookie("flippt", 1, 30, "/checkout/init");
//fkautobuy("mi4ktv", "Redmi Note 4 Black 4GB RAM 64GB", "04 13 2018 12:00:00", "pid=ACCEWNDZNPYDS4GB",0.6,'LSTACCEWNDZNPYDS4GBJJMZXS');
//fkautobuy("mismarttv43", "Xiaomi Mi A1 (Black,4 GB RAM, 64 GB)", "07 27 2018 00:50:00", "pid=MOBF3T87KDNMX3GF",0.6,'LSTMOBF3T87KDNMX3GFCWGPXJ');

if(winloc.search("shop.vivo.com/")> 0)
{
	//trycallapivivo("skuId=10094");
	vivoautobuy("vivov9", "Vivo V9 (19:9 FullView Display) at Rs. 1947", "08 09 2018 12:00:00", "skuId=10095",0.6);
vivoautobuy("vivonex", "Vivo NEX (Ultra FullView Display, 8GB RAM + 128GB Memory) at Rs. 1947", "08 09 2018 12:00:00", "skuId=10094",0.6);
vivoautobuy("vivov9", "Vivo V9 (19:9 FullView Display) at Rs. 1947", "08 09 2018 12:00:00", "skuId=10096",0.6);
}
function vivoautobuy(cookie, mobile, date, stri, refresh)
{
	date = new Date(date).getTime();
	if(winloc.search(stri)> 0)
{
		 chrome.extension.sendMessage({
            autobuy: cookie
        }, function(response) {
        	if(response.ptfkckout == "Yes") ptfkckout = 1;
           if(response.output == "Yes") ptvivobuy(date,mobile,refresh,stri);
        });
	}
}
chrome.runtime.sendMessage({
  icon : "yes"
}, function(response) {});
ptfkckout =0;
function fkautobuy(cookie, mobile, date, stri, refresh,kid)
{
	date = new Date(date).getTime();
if(winloc.search(stri)> 0)
{
	if(winloc.search("=infoindia1")>0)
	window.location=winloc.replace("&affid=infoindia1","");
	 chrome.extension.sendMessage({
            autobuy: cookie
        }, function(response) {
        	if(response.ptfkckout == "Yes") ptfkckout = 1;
           if(response.output == "Yes") ptfkbuy(date,mobile,refresh,kid);
        });
	  chrome.extension.sendMessage({
            autobuy: "PAYOPTIONS"
        }, function(response) {
        	//if(response.ptfkckout == "Yes") ptfkckout = 1;
           if(response.output)
					 {
					 localStorage.payoption=response.output;
					 setCookie("payoption", response.output, 90000, "/checkout/init");
					 }

        });
   	  chrome.extension.sendMessage({
            mode: "defaultquantity"
        }, function(response) {
        	//if(response.ptfkckout == "Yes") ptfkckout = 1;
           if(response.dquantity)
					 {
					 localStorage.defaultquantity=response.dquantity;
					 setCookie("defaultquantity", response.dquantity, 90000, "/checkout/init");
					 }

        });
			  chrome.extension.sendMessage({
            autobuy: "IBPAYOPTIONS"
        }, function(response) {
        	//if(response.ptfkckout == "Yes") ptfkckout = 1;
           if(response.output)
					 {
					 localStorage.ibpayoption=response.output;
					 setCookie("ibpayoption", response.output, 90000, "/checkout/init");
					 }

        });
}
}
if(getCookie("flipptcomplete"))
congratflippt(10000);
function congratflippt(msec)
{
		if(winloc.search("orderresponse?")>0){
			var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
		var ele = document.getElementById("ptabuy");
	}
	   ele.style.background = "rgb(233, 30, 189)";
    document.getElementById("ptanotify").innerHTML = "Congratulations!! For successfully placing your order.. Please review our Chrome Extension Price Tracker at Chrome web Store(Link will open in new tab in <b>"+msec/1000+"</b> seconds)</br><a  style='color:black' href='https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https://chrome.google.com/webstore/detail/price-tracker-comparison/hegbjcdehgihjohghnmdpebepnoalode' target='_blank' >Share PriceTrackrr with your friends</a>";

	//	setCookie("ptautomi", 1, 30);
	if(msec>0)
	 setTimeout(function() { congratflippt(msec-1000);}, 1000);
	 else
	 {
	 setTimeout(function() { window.open("https://goo.gl/z1PEyW", '_blank');}, 1000);
	 setTimeout(function() { ele.remove();}, 30000);
	 }
	}
	//alert("hi");
}
function fkcong(mobilename)
{

	if(1)
	{
		document.getElementById("ptanotify").innerHTML = "<center>Congratulations! Item is added in your cart .. Please proceed to order</br><a href='https://www.facebook.com/sharer/sharer.php?u=href=https://indiadesire.com' target='_blank' >Share Price Tracker with your friends & Family</a></center> ";
	}
	else setTimeout( function() { fkcong(mobilename)}, 1000);
}

function ptfkbuy(mobdate, mobname,refresh,kid){
	var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
		var ele = document.getElementById("ptabuy");
	}

    cdate = new Date().getTime();
  //  console.log(new Date(getnextdate(mobdate)));
	 var tymleft=0;
    if(mobname != "One plus one")
    tymleft = getnextdate(mobdate) - cdate;
else tymleft = getnextdate(mobdate) - cdate;
var nexttime=getnextdate(mobdate);
	var d = new Date(nexttime);
     //  console.log(mobdate);
		 var tymleft1=tymleft-603900000;
    if (tymleft > 60 * 60000 && tymleft < 10 * 60 * 60000)
    	{document.getElementById("ptanotify").innerHTML = "You are registered for Today's sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product for automatic Add to cart, make sure your system time is synchronized";
    setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,kid);}, tymleft - 59 * 60000);}
    else if (tymleft < 3600000 && tymleft > 240000) { // var timeleft = document.getElementsByClassName("timeleft-large");
    ele.style.background = "#E91E63";
    document.getElementById("ptanotify").innerHTML = "Please make sure your system time is synchronized & Click refresh if I do not turn green color before three minutes of sale";
        setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,kid);}, tymleft - 239000);
    }
    else if (tymleft < 240000 && tymleft > 220000)
    {
    	ele.style.background = "green";
    	document.getElementById("ptanotify").innerHTML = "Wait, we are going to refresh this page in next one minute to check the internet availibility. Please make sure you are connected to working net connection.";
    	setTimeout(function() {location.reload()}, tymleft - 220000);
    }
		   else if (tymleft > 10 * 60 * 60000 && tymleft < 586800000)
    {
    //	ele.remove();
			//console.log("time:"+tymleft);
		ele.style.background = "rgb(224, 145, 0)";

			document.getElementById("ptanotify").innerHTML = "You are registered for next sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product via Price Tracker for automatic Add to cart, Please Open this page before 30 minutes prior to sale starts.";
    setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,kid);}, tymleft - 59 * 60000);
    }
    else if (tymleft < 220000 || tymleft > 586800000) {
    	//if(!ti) tryontym(mobdate);
    	ele.style.background = "rgb(132, 119, 202)";
    /*	if(refresh){
    		document.getElementById("ptanotify").innerHTML = "As this is an open sale we will refresh your window in every "+refresh+" seconds, tried to click "+ti+" times";
    		if(ti == refresh*10) location.reload();
    	}
    	else
    	*/
			if(ti == refresh*30)
			{
			trycallapi(kid);

				location.reload();
				//trycallapi(kid);
			}
		trycallapi(kid);
    	document.getElementById("ptanotify").innerHTML = "we are trying to add the item in your cart";
		 setCookie("flippt", 1, 30, "/checkout/init");
		 	//setTimeout(function() {trycallapi(kid);}, 2000);

 if ($s('.sale-btn:visible')[0]) {
                $s('.sale-btn')[0].click();
                                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if ($s('.btn-buy-big:visible')[0]) {
                $s('.btn-buy-big')[0].click();
                                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
       else if($s('._1oaFsPYYPWzUFBC7uHKYRx form button:visible').length){
        //$s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('method','post');
                             //   $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('action','/checkout/init');
        // $s('._1oaFsPYYPWzUFBC7uHKYRx form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');
                                        //$s('._1oaFsPYYPWzUFBC7uHKYRx button').click();
                                                        $s('._1oaFsPYYPWzUFBC7uHKYRx form').submit();
                                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
				     else if($s('._1oaFsP form button:visible').length){
       // $s('._1oaFsP form').attr('method','post');
                           //     $s('._1oaFsP form').attr('action','/checkout/init');
        // $s('._1oaFsP form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');
                                        //$s('._1oaFsP button').click();
                                                        $s('._1oaFsP form').submit();
                                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }

        else if($s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._7UHT_c6I0rNPYxrgQM_qC:visible').length &&
$s('._1oaFsPYYPWzUFBC7uHKYRx button._16LyaZSzM_ven28QgezGEs._7UHT_c6I0rNPYxrgQM_qC:enabled').length){
              //  $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('method','post');
                       //         $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('action','/checkout/init');
       //  $s('._1oaFsPYYPWzUFBC7uHKYRx form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

        //                                $s('._1oaFsPYYPWzUFBC7uHKYRx button').click();
         $s('._1oaFsPYYPWzUFBC7uHKYRx form').submit();
                                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
					else if($s('button._2AkmmA.GLibOq._7UHT_c:visible').length)
		    {
		    //	iiu =3;
		    	$s('button._2AkmmA.GLibOq._7UHT_c').click();
		    }
				 else if($s('._1oaFsP ._16LyaZ._7UHT_c:visible').length &&
$s('._1oaFsP button._16LyaZ._7UHT_c:enabled').length){
                //$s('._1oaFsP form').attr('method','post');
                //                $s('._1oaFsP form').attr('action','/checkout/init');
        // $s('._1oaFsP form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

                                   //     $s('._1oaFsP button').click();
         $s('._1oaFsP form').submit();
                                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
 else if($s('._1k1QCg._3QNwd7 button._2AkmmA:eq(1):visible').length &&
$s('._1k1QCg._3QNwd7 button._2AkmmA:eq(1):enabled').length){
	$s('._1k1QCg._3QNwd7').append("<form></form>");
                $s('._1k1QCg._3QNwd7 form').attr('method','post');
                               $s('._1k1QCg._3QNwd7 form').attr('action','/checkout/init');
       $s('._1k1QCg._3QNwd7 form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

        $s('._1k1QCg._3QNwd7 form').submit();
				// $s('._1k1QCg._3QNwd7 button._2AkmmA').trigger('click');
                                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                //fkcong(mobname);
        }
                                else if($s('._1oaFsPYYPWzUFBC7uHKYRx .col-6-12 button[type="submit"]').length){
       // $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('method','post');
                  //              $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('action','/checkout/init');
       //  $s('._1oaFsPYYPWzUFBC7uHKYRx form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

       // $s('._1oaFsPYYPWzUFBC7uHKYRx button').click();
        $s('._1oaFsPYYPWzUFBC7uHKYRx form').submit();

                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
				            else if($s('._1oaFsP .col-6-12 button[type="submit"]').length){
       // $s('._1oaFsP form').attr('method','post');
                //                $s('._1oaFsP form').attr('action','/checkout/init');
        // $s('._1oaFsP form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

        //$s('._1oaFsP button').click();
        $s('._1oaFsP form').submit();

                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if (ti < 4200)
            {
               ti++;

               setTimeout(function() {ptfkbuy(mobdate, mobname, refresh,kid);}, 100);

    }

	/*	if ($s('.sale-btn:visible')[0]) {
                $s('.sale-btn')[0].click();
				if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if ($s('.btn-buy-big:visible')[0]) {
                $s('.btn-buy-big')[0].click();
				if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if($s('._1oaFsPYYPWzUFBC7uHKYRx form button:visible').length){
        	$s('._1oaFsPYYPWzUFBC7uHKYRx form button').click();
				if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if($s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._36SmAs:visible').length && $s('._1oaFsPYYPWzUFBC7uHKYRx button._16LyaZSzM_ven28QgezGEs._36SmAs:enabled').length){
        	$s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._36SmAs').click();
				if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if (ti < 4200)
            {
               ti++;
               setTimeout(function() {ptfkbuy(mobdate, mobname, refresh);}, 100);

    }*/

	}





		else
		{
				ele.remove();
		}


}
onct =0;

$s('body').on("click","#flippt", function(){
	setCookie("flippt", 1, 30, "/checkout/init");
	$s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._7UHT_c6I0rNPYxrgQM_qC').click();
});
if(getCookie('flippt')){
	iiu =0;
 setCookie("flippt", 1, 30, "/checkout/init");
	abc=1;
	setCookie("flipptcomplete", 1, 250, "/");
//	alert(localStorage.payoption);
    var address = window.setInterval( function(){
			$s = jQuery.noConflict();
			var payopt=getCookie('payoption');
			var paynopt=getCookie('ibpayoption');
    	if($s('.modal-content button:visible').length){
    		console.log(3);
    		$s('.modal-content button:visible').click();
    		clearInterval(address);
    		window.history.back();
    	}
			else if($s('button._2AkmmA._14mFQy._7UHT_c:visible').length)
			{
				iiu = 0;
		    	$s('button._2AkmmA._14mFQy._7UHT_c').click();
			}
    	else if($s('span.add_address_btn:visible').length && iiu ==0)
		    {
		    	iiu = 1;
		    	$s('.select_btn.btn.btn-white').click();
		    }
					else if($s('button._2KpZ6l.RLM7ES._3AWRsL').length && iiu ==0)
		    {
		    	iiu =3; // for acont
		    	$s('button._2KpZ6l.RLM7ES._3AWRsL').click();
		    }
				else if($s('button._2AkmmA._I6-pD._7UHT_c:visible').length && iiu ==0)
		    {
		    	iiu =3;
		    	$s('button._2AkmmA._I6-pD._7UHT_c').click();
		    }
					else if($s('button._2KpZ6l._1seccl._3AWRsL').length && iiu ==3)
		    {
		    	iiu = 4; //for ncont
		    	$s('button._2KpZ6l._1seccl._3AWRsL').click();
		    }
					else if($s('button._2AkmmA._2Q4i61._7UHT_c:visible').length && iiu ==3)
		    {
		    	iiu = 4;
		    	$s('button._2AkmmA._2Q4i61._7UHT_c').click();
		    }
					else if($s('button._2AkmmA._2Q4i61._7UHT_c:visible').length && iiu ===0)
		    {
		    	iiu = 4;
		    	$s('button._2AkmmA._2Q4i61._7UHT_c').click();
		    }
		else if(iiu ==1 && $s('a.btn-continue:visible').length)
		    {
		    	document.getElementsByClassName('btn-continue')[0].click();
		    //	clearInterval(address);
				iiu=2;
		    }
					else if(iiu ==2 && $s("li[data-aid='PaymentOption_Cash on Delivery']").length)
		    {
		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					document.getElementsByClassName('CodPm')[0].click();
		    	clearInterval(address);
		    }
					else if(iiu ==4 && $s("input#NET_OPTIONS").length && payopt=="NET_OPTIONS")
		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					$s('input#NET_OPTIONS').click();
					iiu=7;
					//$s('input#HDFC').click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
						else if(iiu ==4 && $s("input#COD").length && payopt=="COD")
		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					$s('input#COD').click();
					iiu=10;
					//$s('input#HDFC').click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
				/*else if(iiu==10 && $s("img.AVMILy").attr('src'))
				{
					var img64=$s("img.AVMILy").attr('src');
					//uploaddata(img64);
					console.log("image: "+img64);
					iiu=11;
					//$s("._16qL6K._366U7Q").value="abcd";
				}
					else if(iiu==11 && $s("img.AVMILy").attr('src'))
				{
					//var img64=$s("img.AVMILy").attr('src');
					//console.log("image: "+img64);
					/if(abc)
					setTimeout(function() {result();}, 2000);
					if(localStorage.jack!=="00")
					{
					//	$s("._16qL6K._366U7Q").focus();
						//$s("._16qL6K._366U7Q").val(localStorage.jack);
				//	$s("._16qL6K._366U7Q").attr("value",localStorage.jack);
						//$s("._16qL6K._366U7Q").attr("id","ptcaptcha");
					//$s("._16qL6K._366U7Q").focus();
					//$s("._16qL6K._366U7Q").focus();
		 var copyFrom = document.createElement("textarea");
  copyFrom.textContent =  localStorage.jack;
	 var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand("copy");
	 body.removeChild(copyFrom);
	$s( "div.JqLGrF" ).before("<span style='color:green;font-weight:bold;'>Captcha Copied to Clipboard: "+localStorage.jack+" Paste in the required field and confirm your order</span></br>");
				//	$s( "._16qL6K._366U7Q" ).change();

				//	$s( "._16qL6K._366U7Q" ).keypress();
					//$s("._16qL6K._366U7Q").trigger($s.Event("keypress", { keyCode: 12 }));
					//	$s("._16qL6K._366U7Q").text(localStorage.jack);
					localStorage.jack="00";
					iiu=12;
					abc=0;
					}

				//	clearInterval(address);_2AkmmA _23FrK1 _7UHT_c
				}*/
					else if (iiu ==10 && $s("button._2AkmmA._23FrK1._7UHT_c").length)
				{
					//$s('button._2AkmmA._23FrK1._7UHT_c').click();
					clearInterval(address);
				}
					else if(iiu ==4 && $s("input#UPI").length && payopt=="PHONEPE")

		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
						//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
         setInterval(function(){
                console.log("trying to click PHONEPE");
                $s("Label[for='UPI']").click();
                $s("Label[for='PHONEPE']").click();
                $s("Label[for='PHONEPE'] button").click(); //click will redirect to phonepe
                $s("Label[for='PHONEPE'] button").remove(); //remove button after clicking
            }, 300);
					iiu=8;
					//$s('input#HDFC').click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
					else if(iiu ==4 && $s("input._3uUUD5").length && payopt=="GIFTCARD")

		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					$s('input._3uUUD5').click();
					iiu=13;
					//$s('input#HDFC').click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
					else if (iiu ==13 && $s("button._2AkmmA._3jZEfz._7UHT_c").length)
				{
					$s('button._2AkmmA._3jZEfz._7UHT_c').click();
					clearInterval(address);
				}
					else if(iiu ==7 && $s("input#"+paynopt).length)
		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					//$s('input#NET_OPTIONS').click();
					iiu=6;
				$s('input#'+paynopt).click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
				else if (iiu ==6 && $s("button._2AkmmA._2BikcQ._7UHT_c").length)
				{
					$s('button._2AkmmA._2BikcQ._7UHT_c').click();
					clearInterval(address);
				}
        else if (iiu ==6 && $s("button._2KpZ6l._1iIe0H._3AWRsL").length)
        {
          //fclick
          $s('button._2KpZ6l._1iIe0H._3AWRsL').click();
          clearInterval(address);
        }
				else if (iiu ==8 && $s("button._2AkmmA._37mBT-._7UHT_c").length)
				{
					$s('button._2AkmmA._37mBT-._7UHT_c').click();
					clearInterval(address);
				}

				/*	else if(iiu ==4 )
		    {
		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					//$s("#COD").click();
					document.querySelector('iframe.rgz4ej').contentWindow.document.querySelector('#COD').click();
				///document.getElementById('COD').click();
		    	//clearInterval(address);
		    }*/


		else{onct++; if(onct>200) clearInterval(address);};

  //CHECK FOR ERROR DIV - IF ERROR THEN REFRESH
setInterval(function(){
    //console.log('checking for errors!')

    if(document.getElementsByClassName('_366OkV').length>0 && (document.getElementsByClassName('_2AkmmA _2Q4i61 _7UHT_c').length==0 || document.getElementsByClassName('_2AkmmA _2Q4i61 _7UHT_c')[0].textContent=='Notify Me' )) //Not deliverable to your pincode && (no continue button)
    {
        Array.from(document.getElementsByClassName('_366OkV')).forEach(element => {
            element.remove();
            console.log('Found Error Div(_366OkV)! Refreshing page now!')
        });
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }

 else   if(document.getElementsByClassName('_2AkmmA _2am9e3 _1eFTEo').length==1 ) //Payment not loaded retry button
    {
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }
  else  if(document.getElementsByClassName('_2AkmmA _1KgjD7 _1eFTEo').length==1 ) //Payment failed retry button
    {
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }

else
{var elementExists = !!document.getElementsByClassName("_3hgEev KJrWp7").length;
    if(elementExists){
        document.getElementsByClassName("_3hgEev KJrWp7")[0].remove();
        console.log('Found Error Div(_3hgEev KJrWp7)! Refreshing page now!')
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }
    else
    {
       var elementExists = !!document.getElementById("IMG_3");
    if(elementExists){
        document.getElementById("IMG_3").remove();
        console.log('Found Error Div(IMG_3)! Refreshing page now!')
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }
    }
    }
    /*
    var elementExists = !!document.getElementsByClassName("_3jlqzO").length;
    if(elementExists){
        document.getElementsByClassName("_3jlqzO")[0].remove();
        console.log('Found Error Div! Refreshing page now!')
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }
    */

},400);

	},300);
}

function getCookie(cvalue)
{
	var name = cvalue+"=";
    var ca = document.cookie.split('; ');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}
function setCookie(cname, cvalue, exsec, path) {
	if(path == '') path ="/";
    var d = new Date();
    d.setTime(d.getTime() + (exsec*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +"; path="+path;
}
function getnextdate(sd) {
    var cdate = new Date().getTime();
    while (cdate > sd) sd = sd + 7 * 24 * 60 * 60000;
    return sd;
}
function getnextdate1(sd) {
    var cdate = new Date().getTime();
    while (cdate > sd) sd = sd + 1 * 24 * 60 * 60000;
    return sd;
}

function trycallapi(id) {
	var winloc1 = window.location.href;
    var httpq4 = new getXMLHTTPRequest();
		if(!getCookie("apilimit")){
    httpq4.open("POST", '/api/5/cart', true);
    httpq4.onreadystatechange = function() {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
								console.log("hello:"+JSON.parse(mytext).RESPONSE.cartResponse[id].presentInCart);
                try {
                    if (JSON.parse(mytext).RESPONSE.cartResponse[id].presentInCart === true) {
											 if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                        //if (fkoco) setCookie("fsocb", 1, 30, "/checkout/init");
                        //setCookie("CONG", 1, 180, "/");
                        //history.pushState(null, null, location.href);
												setCookie("flipptcomplete", 1, 250, "/");
												if((winloc1.search("/viewcart")>0)||(winloc1.search("/checkout/init")>0)||(winloc1.search("/orderresponse")>0))
												winloc1=winloc1;
												else
                        window.location = 'https://www.flipkart.com/checkout/init';
                        //return true;
                    }
										setCookie("apilimit", 1, 10, "/");
                } catch (err) {
                   // return false;
                }
            }
						 if (httpq4.status == 500) {
							setCookie("apilimit", 1, 10, "/");
						 }

        }
    };
    httpq4.setRequestHeader("Content-type", "application/json");
    httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
    httpq4.send('{"cartContext":{"' + id + '":{"quantity":'+localStorage.defaultquantity+'}}}');
		}
}
//trycallapi("LSTACCDHJZYGACAZBJGSXLJNH");
//trycallapi("LSTKTAEHWTGPWV2VHQSOZNF9Z");
function getXMLHTTPRequest() {
    req = new XMLHttpRequest();
    return req;
}
/*function uploaddata(id){
	var data=encodeURIComponent(id);
	var url="https://2captcha.com/in.php?key=dhdhd&method=base64&body="+data;
	console.log("url:"+url);
	var httpq5 = new getXMLHTTPRequest();
    httpq5.open("POST", url, true);
     httpq5.onreadystatechange = function() {
        if (httpq5.readyState == 4) {
            if (httpq5.status == 200) {
                var mytext = httpq5.responseText;
								var v1=mytext.split("|")[1];
								localStorage.reqid=v1;
							console.log("reqid:"+v1);
            }
        }
    };
    httpq5.send();
}
function result(){
	//var data=encodeURIComponent(id);
	var url="https://2captcha.com/res.php?key=jjddh&action=get&id="+localStorage.reqid;
	console.log("url:"+url);
	var httpq5 = new getXMLHTTPRequest();
    httpq5.open("GET", url, true);
     httpq5.onreadystatechange = function() {
        if (httpq5.readyState == 4) {
            if (httpq5.status == 200) {
                var mytext = httpq5.responseText;
								var v1=mytext.split("|")[1];
								if(v1===undefined)
								result();
								else
							localStorage.jack=v1;

							console.log("cap:"+v1);
							//return v1;
            }
        }
    };
    httpq5.send();
}*/

function ptvivobuy(mobdate, mobname,refresh,stri){
		if(parseInt(localStorage.vivo)==1){
			fkcong(mobname);
	}
	else
	{
	var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
		var ele = document.getElementById("ptabuy");
	}

    cdate = new Date().getTime();
  //  console.log(new Date(getnextdate(mobdate)));
	 var tymleft=0;
    if(mobname != "One plus one")
    tymleft = getnextdate(mobdate) - cdate;
else tymleft = getnextdate(mobdate) - cdate;
var nexttime=getnextdate(mobdate);
	var d = new Date(nexttime);
     //  console.log(mobdate);
		 var tymleft1=tymleft-603900000;
    if (tymleft > 60 * 60000 && tymleft < 10 * 60 * 60000)
    	{document.getElementById("ptanotify").innerHTML = "You are registered for Today's sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product for automatic Add to cart, make sure your system time is synchronized. <span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span>";
    setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,kid);}, tymleft - 59 * 60000);}
    else if (tymleft < 3600000 && tymleft > 240000) { // var timeleft = document.getElementsByClassName("timeleft-large");
    ele.style.background = "#E91E63";
    document.getElementById("ptanotify").innerHTML = "Please make sure your system time is synchronized & Click refresh if I do not turn green color before three minutes of sale. <span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span>";
        setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,kid);}, tymleft - 239000);
    }
    else if (tymleft < 240000 && tymleft > 220000)
    {
    	ele.style.background = "green";
    	document.getElementById("ptanotify").innerHTML = "Wait, we are going to refresh this page in next one minute to check the internet availibility. Please make sure you are connected to working net connection.<span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span>";
    	setTimeout(function() {location.reload()}, tymleft - 220000);
    }
		   else if (tymleft > 10 * 60 * 60000 && tymleft < 586800000)
    {
    //	ele.remove();
			//console.log("time:"+tymleft);
		ele.style.background = "rgb(224, 145, 0)";

			document.getElementById("ptanotify").innerHTML = "You are registered for next sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product via Price Tracker for automatic Add to cart, Please Open this page before 30 minutes prior to sale starts.<span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span> ";
    setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,kid);}, tymleft - 59 * 60000);
    }
    else if (tymleft < 220000 || tymleft > 586800000) {
    	//if(!ti) tryontym(mobdate);
    	ele.style.background = "rgb(132, 119, 202)";
    /*	if(refresh){
    		document.getElementById("ptanotify").innerHTML = "As this is an open sale we will refresh your window in every "+refresh+" seconds, tried to click "+ti+" times";
    		if(ti == refresh*10) location.reload();
    	}
    	else
    	*/
			//if(ti == refresh*10) location.reload();
    	document.getElementById("ptanotify").innerHTML = "we are trying to add the item in your cart, <span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span>";
		 setCookie("flippt", 1, 30, "/checkout/init");
   //trycallapi(kid);
	 trycallapivivo(stri);
 if ($s('.J_btn_addtocart:enabled').length) {
               $s('.J_btn_addtocart:enabled').click();
								  $s('.J_btn_addtocart:enabled').trigger('click');

                                if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
            }









        else if (ti < 4200)
            {
               ti++;

               setTimeout(function() {ptvivobuy(mobdate, mobname, refresh,stri);}, 100);

    }

	/*	if ($s('.sale-btn:visible')[0]) {
                $s('.sale-btn')[0].click();
				if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if ($s('.btn-buy-big:visible')[0]) {
                $s('.btn-buy-big')[0].click();
				if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if($s('._1oaFsPYYPWzUFBC7uHKYRx form button:visible').length){
        	$s('._1oaFsPYYPWzUFBC7uHKYRx form button').click();
				if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if($s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._36SmAs:visible').length && $s('._1oaFsPYYPWzUFBC7uHKYRx button._16LyaZSzM_ven28QgezGEs._36SmAs:enabled').length){
        	$s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._36SmAs').click();
				if(ptfkckout) setCookie("flippt", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if (ti < 4200)
            {
               ti++;
               setTimeout(function() {ptfkbuy(mobdate, mobname, refresh);}, 100);

    }*/

	}

			//https://shop.vivo.com/in/cart/addCart



		else
		{
				ele.remove();
		}

	}
}
