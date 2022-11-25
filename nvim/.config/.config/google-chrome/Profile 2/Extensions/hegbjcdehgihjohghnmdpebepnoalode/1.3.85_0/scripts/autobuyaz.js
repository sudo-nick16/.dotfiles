
var winloc = window.location.href;
$s = jQuery.noConflict();
var ptfkckout=1;
var count, ti = 0,jack=0;
var mobdatewa="10 03 2017 12:00:00";
//trycallapivivo();
//fkautobuy("redmi4agold2gbam", "Redmi Note 4 Black 4GB RAM 64GB", "05 21 2017 16:25:00", "B01IGZTVPK",0.6);
chrome.runtime.sendMessage({
  mode : "saledate",val:"asaledata"
}, function(response) {
	 var amobiles = $s.parseJSON(response.saledata);
 for (var i = amobiles.length - 1; i >= 0; i--) {
		if(winloc.search("node="+amobiles[i][5]+"")>0 )
		{
mobdatewa=amobiles[i][2];
jack=0;
//pttimerpage();
		}

		}
	//fkautobuy(amobiles[i][0], amobiles[i][1], amobiles[i][2], amobiles[i][3],amobiles[i][4]);

 }
	);
jack=0;
	someClick1=setInterval(function(){
		if(jack==1)
		{
		    for(var k=0; k<$s('.dealTile #dealImage').length; k++){
        if($s('.dealTile:eq(' + k + ')').find('.special').length==0){
					var pid= $s('.dealTile #dealImage:eq(' + k + ')').attr("href");
					console.log(pid);
					pid=returnPID(pid);
           $s('.dealTile #dealImage:eq(' + k + ')').after('<div class="special"><label id="label_' + pid + '" class="special" style="font-weight:bold;"><input type="checkbox" name="" value="selectVariant" id="' + pid + '" class="pt123"><label for="' + pid + '" style="display: inline-block;" id="text_'+pid+'">Select variant</label></label></div>');
           /*if(k==clickID){
               $s('#variant' + k)[0].checked = true;
               $s('#text' + k).html("Selected");
           }*/
					 if(getCookienew(pid))
					 {
						$s('#' + pid)[0].checked = true;
					  $s('#text_' + pid).text("Selected");
						$s('#text_' + pid).css("color", "#0b9a77");
					 }
					 callclickevent(pid);
					 
					     
				}
				}
		}
		else
		{
			clearInterval(someClick1);
		}
		},5);
		

chrome.runtime.sendMessage({
  icon : "yes"
}, function(response) {});
ptfkckout =0;
function fkautobuy(cookie, mobile, date, stri, refresh)
{
	date = new Date(date).getTime();
	var check=0;
		 chrome.extension.sendMessage({
            autobuy: cookie
        }, function(response) {
        	if(response.ptfkckout == "Yes") ptfkckout = 1;
           if(response.output == "Yes")
					 {
					var abc=stri.replace('/','');
					 check=1;
					 if($s('#' + abc).length>0)
					 {
					 $s('#' + abc)[0].checked = true;
					  $s('#text_' + abc).text("Selected");
						$s('#text_' + abc).css("color", "#0b9a77");
					 }
					 if(winloc.search(stri)> 0)
{
   // ptfkbuy(date,mobile,refresh);
if(check==1)
 ptfkbuy(date,mobile,refresh,stri);
}
					 }
        });

}

function pttimerpage()
{
	
	//alert(winloc);
		var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify1" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
		var ele = document.getElementById("ptabuy");
	}
	
	/*if(!(getCookie("toofferlisting")))
	{
	if($s('#availability .a-color-success').length>0) 
	{
		var urlsend="http://www.amazon.in/gp/offer-listing"+pid+"?condition=new";
			setCookie("amazptcomplete", 1, 650, "/");
			setCookie("toofferlisting", 1, 500, "/");
		 setTimeout(function() { window.open(urlsend, '_blank');}, 1000);
		
	}
	}*/
	var date2 = new Date(mobdatewa).getTime();
    var cdate1 = new Date().getTime();
  //  console.log(new Date(getnextdate(mobdate)));
	 var tymleft=0;

tymleft = getnextdate(date2) - cdate1;
var nexttime=getnextdate(date2);
	var d = new Date(nexttime);
     //  console.log(mobdate);
		 //var tymleft1=tymleft-601200000;
    if (tymleft > 60 * 60000 && tymleft < 10 * 60 * 60000)
	//	<span style='color:red'>Next Redmi 4 Sale i.e. 10th July 5Pm is Exclusive for Prime Members only<a target='_blank' href='https://www.amazon.in/gp/prime/pipeline/landing?ie=UTF8&%2AVersion%2A=1&%2Aentries%2A=0'>Join Prime</a></span>
    	{document.getElementById("ptanotify1").innerHTML = "You are registered for Today's sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this page for automatic Add to cart via Price Tracker(NOTE: We will try to add all the variants please proceed to order which ever variant you want), make sure your system time is synchronized, <br>"; 
    setTimeout(function() { pttimerpage();}, tymleft - 59 * 60000);}
    else if (tymleft < 3600000 && tymleft > 240000) { // var timeleft = document.getElementsByClassName("timeleft-large");
    ele.style.background = "#E91E63";
    document.getElementById("ptanotify1").innerHTML = " Sale:"+"Please make sure your system time is synchronized & Click refresh if I do not turn green color before three minutes of sale.<br>(NOTE: We will try to add all the variants please proceed to order which ever variant you want)<br>";
        setTimeout(function() { pttimerpage();}, tymleft - 239000);
			/*	if(winloc.search("/offer-listing/")>0){
					if ($s('#olpTabContent .a-button-inner').length>0) {
                //$s('#buybox a')[0].click();
				if(ptfkckout) setCookie("amazpt", 1, 30, "/checkout/init");
              				if( $s('#olpTabContent .a-button-inner input').length)
											{
												setCookie("amazptcomplete", 1, 650, "/");
								$s('#olpTabContent .a-button-inner input')[0].click();
											}
											
							
							
							//	}
								
					
									
								  
            }
						else
						{
							 document.getElementById("ptanotify").innerHTML = mobname+" Sale:"+"Since Amazon is listing the Product Before half an hour ago on this page so we will be refreshing the page every "+refresh+" seconds & try to add the same for you in the cart.. Once Added Proceed Further..";
  	setTimeout(function() {location.reload();}, refresh*1000);
						}
				}*/
    }
    else if (tymleft < 240000 && tymleft > 180000)
    {
    	ele.style.background = "green";
    	document.getElementById("ptanotify1").innerHTML = " Sale:"+"Wait, we are going to refresh this page in next one minute to check the internet availibility. Please make sure you are connected to working net connection.<br>(NOTE: We will try to add all the variants please proceed to order which ever variant you want)<br>";
    	setTimeout(function() {location.reload();}, tymleft - 180000);
				/*	if(winloc.search("/offer-listing/")>0){
					if ($s('#olpTabContent .a-button-inner').length>0) {
                //$s('#buybox a')[0].click();
				if(ptfkckout) setCookie("amazpt", 1, 30, "/checkout/init");
              				if( $s('#olpTabContent .a-button-inner input').length)
											{
												setCookie("amazptcomplete", 1, 650, "/");
								$s('#olpTabContent .a-button-inner input')[0].click();
											}
											
							
							
							//	}
								
					
									
								  
            }
						else
						{
							 document.getElementById("ptanotify").innerHTML = mobname+" Sale:"+"Since Amazon is listing the Product Before half an hour ago on this page so we will be refreshing the page every "+refresh+" seconds & try to add the same for you in the cart.. Once Added Proceed Further..";
  	setTimeout(function() {location.reload();}, refresh*1000);
						}
				}*/
    }
		   else if ((tymleft > 10 * 60 * 60000 && tymleft < 601200000) || tymleft>604800000 )
    {
    //	ele.remove();
		console.log("time:"+tymleft);
		ele.style.background = "rgb(224, 145, 0)";
	
			document.getElementById("ptanotify1").innerHTML =" Sale:"+"You are registered for next sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product via Price Tracker for automatic Add to cart, Please Open this page before 30 minutes prior to sale starts.(NOTE: We will try to add all the variants please proceed to order which ever variant you want),<br>"; 
    setTimeout(function() { pttimerpage();}, tymleft - 59 * 60000);
    }
    else if ((tymleft < 180000 || tymleft > 601200000)) {
			console.log("time:"+tymleft);
				document.getElementById("ptanotify1").innerHTML = " Sale:"+"we are trying to add the item in your cart.<br>(NOTE: We will try to add all the variants please proceed to order which ever variant you want),<br><span style='color:yellow!important'>If you got in waiting list/waiting list full, Still There is chances that you can get the product .. Open The Product Page By clicking on the variant..On Product Page Price Tracker Will try to add the item if you are in waiting list or It will join waiting list if it shows waiting list full..</span><br>";
	setCookie("amazptcomplete", 1, 650, "/");

	someClick=setInterval(function(){ 
							$s('.jbv-buy-big').trigger('click');
							console.log('Script Working');
							//jQuery("button:eq(0)").trigger('click'); console.log('Script activated for Redmi ');
							var b;
							var c;
						 if($s('input.pt123:checked').length)  c = $s('input.pt123:checked');
            else b =  document.querySelectorAll(".a-button-primary .a-button-text.a-text-center");
								    if ($s('input.pt123:checked').length) {
										for(n=0;n<c.length;n++)
										{
                //c.parent().next().find(".a-button-primary .a-button-text.a-text-center")[n].click();
								if(c.parent().parent().parent().find(".a-button-primary .a-button-text.a-text-center")[n].innerHTML.indexOf("Add to Cart") > -1)
								c.parent().parent().parent().find(".a-button-primary .a-button-text.a-text-center")[n].click();
										
								console.log('Script Working b'+n);
								}
									for(n=0;n<c.length;n++)
										{
                //c.parent().next().find(".a-button-primary .a-button-text.a-text-center")[n].click();
								if(c.parent().parent().parent().find(".a-button-primary .a-button-text.a-text-center")[n].innerHTML.indexOf("Add to Cart") > -1)
								c.parent().parent().parent().find(".a-button-primary .a-button-text.a-text-center")[n].click();
										
								console.log('Script Working b'+n);
								}
								//clearInterval(someClick);
								//clearInterval(someClick1);
							}
            if (b.length) {
							for(m=0;m<b.length;m++)
							{
							if(b[m].innerHTML.indexOf("Add to Cart") > -1)
                b[m].click();
								
								console.log('Script Working a'+m);
							}
								//clearInterval(someClick);
							//	clearInterval(someClick1);
							}
					
							},5);
		}
		else
		{	console.log("time:"+tymleft);
	 setTimeout(function() { pttimerpage();}, 100);
		}
}
if(getCookie("amazptcomplete"))
congratamazpt(10000);
function congratamazpt(msec)
{
		if(winloc.search("buy/thankyou")>0){
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
	 setTimeout(function() { congratamazpt(msec-1000);}, 1000);
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
		document.getElementById("ptanotify").innerHTML = "<center>Congratulations! Item is added in your cart ..If the Item is added in your cart(You will get 15 minutes to complete the order) Please proceed to order within 15 minutes after that you will not be able to get the same.</br><a href='https://www.facebook.com/sharer/sharer.php?u=href=https://chrome.google.com/webstore/detail/price-tracker-comparison/hegbjcdehgihjohghnmdpebepnoalode' target='_blank' >Share Price Tracker with your friends & Family</a></center> ";
	}
	else setTimeout( function() { fkcong(mobilename)}, 1000);
}
function fkcongwait(mobilename)
{
	
	if(1)
	{
		document.getElementById("ptabuy").style.background = "rgb(224, 145, 0)";
		document.getElementById("ptanotify").innerHTML = "<center>Seems More people in hurry to get it! you have joined the waiting List .. If still in waiting list then wait for Add to cart option appear(You will get 1 minute to add the item in your cart once it appears).. Please do not refresh the page unless the deal gets over or you get add to cart option";
	}
	else setTimeout( function() { fkcongwait(mobilename)}, 1000);
}
function ptfkbuy(mobdate, mobname,refresh,pid){
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
	
	/*if(!(getCookie("toofferlisting")))
	{
	if($s('#availability .a-color-success').length>0) 
	{
		var urlsend="http://www.amazon.in/gp/offer-listing"+pid+"?condition=new";
			setCookie("amazptcomplete", 1, 650, "/");
			setCookie("toofferlisting", 1, 500, "/");
		 setTimeout(function() { window.open(urlsend, '_blank');}, 1000);
		
	}
	}*/
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
    	{document.getElementById("ptanotify").innerHTML = "You are registered for Today's sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of "+mobname+" for automatic Add to cart via Price Tracker, make sure your system time is synchronized, <br>"; 
    setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,pid);}, tymleft - 59 * 60000);}
    else if (tymleft < 3600000 && tymleft > 240000) { // var timeleft = document.getElementsByClassName("timeleft-large");
    ele.style.background = "#E91E63";
    document.getElementById("ptanotify").innerHTML = mobname+" Sale:"+"Please make sure your system time is synchronized & Click refresh if I do not turn green color before three minutes of sale.<br>";
        setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,pid);}, tymleft - 239000);
			/*	if(winloc.search("/offer-listing/")>0){
					if ($s('#olpTabContent .a-button-inner').length>0) {
                //$s('#buybox a')[0].click();
				if(ptfkckout) setCookie("amazpt", 1, 30, "/checkout/init");
              				if( $s('#olpTabContent .a-button-inner input').length)
											{
												setCookie("amazptcomplete", 1, 650, "/");
								$s('#olpTabContent .a-button-inner input')[0].click();
											}
											
							
							
							//	}
								
					
									
								  
            }
						else
						{
							 document.getElementById("ptanotify").innerHTML = mobname+" Sale:"+"Since Amazon is listing the Product Before half an hour ago on this page so we will be refreshing the page every "+refresh+" seconds & try to add the same for you in the cart.. Once Added Proceed Further..";
  	setTimeout(function() {location.reload();}, refresh*1000);
						}
				}*/
    }
    else if (tymleft < 240000 && tymleft > 180000)
    {
    	ele.style.background = "green";
    	document.getElementById("ptanotify").innerHTML = mobname+" Sale:"+"Wait, we are going to refresh this page in next one minute to check the internet availibility. Please make sure you are connected to working net connection.<br>";
    	setTimeout(function() {location.reload()}, tymleft - 180000);
				/*	if(winloc.search("/offer-listing/")>0){
					if ($s('#olpTabContent .a-button-inner').length>0) {
                //$s('#buybox a')[0].click();
				if(ptfkckout) setCookie("amazpt", 1, 30, "/checkout/init");
              				if( $s('#olpTabContent .a-button-inner input').length)
											{
												setCookie("amazptcomplete", 1, 650, "/");
								$s('#olpTabContent .a-button-inner input')[0].click();
											}
											
							
							
							//	}
								
					
									
								  
            }
						else
						{
							 document.getElementById("ptanotify").innerHTML = mobname+" Sale:"+"Since Amazon is listing the Product Before half an hour ago on this page so we will be refreshing the page every "+refresh+" seconds & try to add the same for you in the cart.. Once Added Proceed Further..";
  	setTimeout(function() {location.reload();}, refresh*1000);
						}
				}*/
    }
		   else if ((tymleft > 10 * 60 * 60000 && tymleft < 601200000) || tymleft>604800000 )
    {
    //	ele.remove();
			//console.log("time:"+tymleft);
		ele.style.background = "rgb(224, 145, 0)";
	
			document.getElementById("ptanotify").innerHTML = mobname+" Sale:"+"You are registered for next sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product via Price Tracker for automatic Add to cart, Please Open product page before 30 minutes prior to sale starts.<br>"; 
    setTimeout(function() { ptfkbuy(mobdate, mobname, refresh,pid);}, tymleft - 59 * 60000);
    }
    else if (tymleft < 180000 || tymleft > 601200000) {
    	//if(!ti) tryontym(mobdate);
    	ele.style.background = "rgb(132, 119, 202)";
    /*	if(refresh){
    		document.getElementById("ptanotify").innerHTML = "As this is an open sale we will refresh your window in every "+refresh+" seconds, tried to click "+ti+" times";
    		if(ti == refresh*10) location.reload();
    	}
    	else
    	*/
			if(ti == refresh*10) location.reload();
    	document.getElementById("ptanotify").innerHTML = mobname+" Sale:"+"we are trying to add the item in your cart.<br>";
		 setCookie("amazpt", 1, 30, "/checkout/init");
    if ($s('#LDBuybox .a-button-stack').length>0) {
                $s('#LDBuybox a')[0].click();
				if(ptfkckout) setCookie("amazpt", 1, 30, "/checkout/init");
              				if( $s('#LDBuybox .a-button-stack a').length)
								$s('#LDBuybox .a-button-stack a')[0].click();
								// $s('.a-button-stack form').submit();
									 var address1 = window.setInterval( function(){
										$s = jQuery.noConflict();
							
									if( $s('div[id^="deal_in_cart_"]').hasClass("a-hidden"))
									{
												         if( $s('#LDBuybox .a-button-stack button').length)
								{
                $s('#LDBuybox .a-button-stack button')[0].click();
								}
									}
									else
									{
											setCookie("amazptcomplete", 1, 650, "/");
								  fkcong(mobname);
									
									setTimeout(function() { $s('#nav-cart')[0].click();}, 10000);
									clearInterval(address1);
									}
											if( $s('div[id^="deal_wait_in_line_"]').hasClass("a-hidden"))
									{
									
									}
									else
									{
											//setCookie("amazptcomplete", 1, 550, "/");
								  fkcongwait(mobname);
									//setTimeout(function() { $s('#nav-cart')[0].click();}, 10000);
									}
									},300);
							//	}
								
					
									
								  
            }
						else  if ($s('#buybox .a-button-stack').length>0) {
                //$s('#buybox a')[0].click();
				if(ptfkckout) setCookie("amazpt", 1, 30, "/checkout/init");
              				if( $s('#buybox .a-button-stack a').length)
								$s('#buybox .a-button-stack a')[0].click();
								// $s('.a-button-stack form').submit();
									 var address2 = window.setInterval( function(){
										$s = jQuery.noConflict();
							
									if( $s('div[id^="deal_in_cart_"]').hasClass("a-hidden"))
									{
												         if( $s('#buybox .a-button-stack button').length)
								{
                $s('#buybox .a-button-stack button')[0].click();
								}
									}
									else
									{
											setCookie("amazptcomplete", 1, 650, "/");
								  fkcong(mobname);
									setTimeout(function() { $s('#nav-cart')[0].click();}, 10000);
									clearInterval(address2);
									//$s('#buybox a')[0].click();
									}
											if( $s('div[id^="deal_wait_in_line_"]').hasClass("a-hidden"))
									{
									
									}
									else
									{
											//setCookie("amazptcomplete", 1, 550, "/");
								  fkcongwait(mobname);
									//setTimeout(function() { $s('#nav-cart')[0].click();}, 10000);
									}
									},300);
							//	}
								
					
									
								  
            } else  if ($s('#olpTabContent .a-button-inner').length>0) {
                //$s('#buybox a')[0].click();
				if(ptfkckout) setCookie("amazpt", 1, 30, "/checkout/init");
              				if( $s('#olpTabContent .a-button-inner input').length)
											{
												setCookie("amazptcomplete", 1, 650, "/");
								$s('#olpTabContent .a-button-inner input')[0].click();
											}
								
							
							
							
							//	}
								
					
									
								  
            }
                else if (ti < 4200)
            {
               ti++;
               setTimeout(function() {ptfkbuy(mobdate, mobname, refresh,pid);}, 100);

    }

	}
		
		else
		{
				ele.remove();
		}


}
onct =0;

$s('body').on("click","#amazpt", function(){
	setCookie("amazpt", 1, 30, "/checkout/init");
	$s('._1oaFsP ._16LyaZ._7UHT_c').click();
});
if(getCookie('amazpt')){
	iiu =0;
	setCookie("amazptcomplete", 1, 250, "/");
    var address = window.setInterval( function(){
    	if($s('.modal-content button:visible').length){
    		console.log(3);
    		$s('.modal-content button:visible').click();
    		clearInterval(address);
    		window.history.back();
    	}
    	else if($s('span.add_address_btn:visible').length && iiu ==0)
		    {
		    	iiu = 1;
		    	$s('.select_btn.btn.btn-white').click();
		    }
		else if(iiu ==1 && $s('a.btn-continue:visible').length)
		    {
		    	document.getElementsByClassName('btn-continue')[0].click();
		    	clearInterval(address);
		    }
		else{onct++; if(onct>200) clearInterval(address);};
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
function getCookienew(cvalue)
{
	var name = "321-"+cvalue+"=";
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
function setCookienew(cname, cvalue, exdays) 
{
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = "321-"+cname + "=" + cvalue + "; " + expires + "; path=/";
}
function callclickevent(pid)
{
	 $s("#"+pid).change(function() {
							  if(!this.checked){
                  $s('#text_'+pid).text("Select variant");
										$s('#text_' + pid).css("color", "black");
										setCookienew(pid,"No",0);
                  return;
               }
							 else
							 {
               $s('#text_'+pid).text("Selected");
							 	$s('#text_' + pid).css("color", "#0b9a77");
								
								setCookienew(pid,"Yes",2);
							 }
														 });
}

  function returnPID(link){

  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
  }
  if(pid.split("?ASIN=").length > 1){
    pid = pid.split("?ASIN=")[1];
    if(pid.split("/").length > 1){
      pid = pid.split("/")[0];
    }
  }
  else if(pid.split("&ASIN=").length > 1){
    pid = pid.split("&ASIN=")[1];
    if(pid.split("/").length > 1){
      pid = pid.split("/")[0];
    }
  }
  else if(pid.split("/product/").length > 1){
    pid = pid.split("/product/")[1];
  }
  else if(pid.split("/dp/").length > 1){
    pid = pid.split("/dp/")[1];
  }
  else{
    pid = "";
  }

  if(pid != ""){
    if(pid.split("?").length > 1){
      pid = pid.split("?")[0];
    }
    if(pid.split("&").length > 1){
      pid = pid.split("&")[0];
    }
    if(pid.split("/ref").length > 1){
      pid = pid.split("/ref")[0];
    }
    if(pid.split("/").length > 1){
      pid1 = pid.split("/");
      pid1 = pid1[pid1.length - 1];
      if(pid1 == ""){
        pid = pid.split("/");
        pid = pid[pid.length - 2];
      }
      else {
        pid = pid1;
      }
    }


    if(link == ""){
      pid = "";
    }
    if(pid != pid.toUpperCase()){
      pid = "";
    }
  }
  return pid;
}