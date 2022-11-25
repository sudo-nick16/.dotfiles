
var winloc = window.location.href;
$s = jQuery.noConflict();
/*setTimeout(function() {
if($s('.btn-large:not(.btn-disabled)').length) {
                $s('.btn-large:not(.btn-disabled)')[0].click();
}
 }, 100);
*/
/// preorder page http://www.mi.com/in/hdindex/preorder/#mi-led-smart-tv-4a-4>> btn J_proBtn >http://www.mi.com/in/hdindex/terms/index.html?pro=mi-led-smart-tv-4a-4&_1521181800>> btn J_btnNext >>http://www.mi.com/in/hdindex/version/index.html?pro=mi-led-smart-tv-4a-4&_1521181800
var count, ti = 0,cart=0;
chrome.runtime.sendMessage({
  mode : "saledate",val:"msaledata"
}, function(response) {
	 var mimobiles = $s.parseJSON(response.saledata);
 for (var i = mimobiles.length - 1; i >= 0; i--) {
	//localStorage.mipname=mimobiles[i][3];
	miautobuy(mimobiles[i][0], mimobiles[i][1], mimobiles[i][2], mimobiles[i][3],mimobiles[i][4],mimobiles[i][5],mimobiles[i][6]);
 }
	});
 //miautobuy("redminote5black4gbmi", "Redmi Note 5 (Black,4 GB RAM, 64 GB)", "03 14 2018 12:24:00", "4180500025","0","openbuy/","0");
//miautobuy("redmi1rssale", " Re. 1 Flash Sale", "09 28 2017 17:00:00", "redmi1rssale",0,'/sales2017/diwali');
//miautobuy("mirouter3cmi", "Mi Router 3C", "05 23 2017 12:00:00", "4170900009",0,'openbuy/');
//miautobuy("redminote4black2gbmi", "Redmi Note 4 Black 2GB RAM 32GB", "03 01 2017 12:00:00", "4170300003",0,'openbuy/');
//setCookie("ptautomi", localStorage.mipname, 60,'/');
	//setCookie("ptautomisuccess", 1,250 ,'/');
chrome.runtime.sendMessage({
  icon : "yes"
}, function(response) {});
ptfkckout =0;

function miautobuy(cookie, mobile, date, stri, refresh,thing,cli)
{
	
	date = new Date(date).getTime();
if(winloc.search(thing)> 0)
{

	 chrome.extension.sendMessage({
            autobuy: cookie
        }, function(response) {
        	if(response.ptfkckout == "Yes") ptfkckout = 1;
           if(response.output == "Yes")
					 {
							localStorage.mipname= stri;
							localStorage.click= cli;
						//autocall(cookie);
					 ptmibuy(date,mobile,refresh,localStorage.mipname,cookie);
					 }
        });
}
else if(winloc.search("choosePro/index.html")> 0)
{
       chrome.extension.sendMessage({
            autobuy: cookie
        }, function(response) {
        	if(response.ptfkckout1 == "Yes") ptfkckout = 1;
           if(response.output == "Yes")
           {
					
						if(getCookie("ptautomi"))
       {
               console.log("1:"+localStorage.mipname);
 //setCookie("ptautomi", stri, 60,'/');
	    miselect(localStorage.mipname);
     // console.log("2:"+stri);
       }
			 else
			 {
			// setCookie("ptautomi", stri, 60,'/');
				   miselect(localStorage.mipname);
				console.log("2:"+localStorage.mipname);
			 }
           }
        });
      
}
}
function fkcong(mobilename)
{
	
	if(1)
	{
		document.getElementById("ptanotify").innerHTML = "<center>Congratulations! Item is added in your cart .. Please proceed to order</br><a href='https://www.facebook.com/sharer/sharer.php?u=href=https://indiadesire.com' target='_blank' >Share PriceTrackrr with your friends</a></center> ";
	}
	else setTimeout( function() { fkcong(mobilename)}, 1000);
}

if(getCookie("ptautomi")) miselect(getCookie("ptautomi"));
if(getCookie("ptautomisuccess")) miselect(getCookie("ptautomisuccess"));
function ptmibuy(mobdate, mobname,refresh,pid,cookie){
	var ele = document.getElementById("ptabuy");
	//setCookie("ptautomi", pid, 60,'/');
	

//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed; bottom: 20px; right: 20px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
		var ele = document.getElementById("ptabuy");
	}
	
    cdate = new Date().getTime();
   //console.log("date:"+mobdate);
	 var tymleft=0;
    if(mobname != "One plus one")
    tymleft = getnextdate(mobdate) - cdate;
else tymleft = getnextdate(mobdate) - cdate;
var nexttime=getnextdate(mobdate);
var tymleft1=mobdate-cdate;
	var d = new Date(nexttime);
       var d1 = new Date(cdate);
    console.log("tymleft:"+tymleft);
		   console.log("tymleft1:"+tymleft1);
     //  console.log(mobdate);
    if (tymleft > 60 * 60000 && tymleft < 10 * 60 * 60000) 
    	{document.getElementById("ptanotify").innerHTML = "You are registered for <strong>"+mobname+"</strong> on Today's sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product for automatic Add to cart, Please make sure your system time is synchronized and you are logged in to mi.com"; 
    setTimeout(function() { ptmibuy(mobdate, mobname, refresh,localStorage.mipname,cookie);}, tymleft - 59 * 60000);}
    else if (tymleft < 3600000 && tymleft > 240000) { // var timeleft = document.getElementsByClassName("timeleft-large");
    ele.style.background = "#E91E63";
    document.getElementById("ptanotify").innerHTML = "Please make sure your system time is synchronized and you are logged in to mi.com & Click refresh if I do not turn green color before three minutes of sale";
      //autocall(cookie);
			  setTimeout(function() { ptmibuy(mobdate, mobname, refresh,localStorage.mipname,cookie);}, tymleft - 239000);
    }
    else if (tymleft < 240000 && tymleft > 180000)
    {
    	ele.style.background = "green";
    	document.getElementById("ptanotify").innerHTML = "Wait, we are going to refresh this page in next one minute to check the internet availibility. Please make sure you are connected to working net connection.Please make sure your system time is synchronized and you are logged in to mi.com";
    //autocall(cookie);
			setTimeout(function() {location.reload();}, tymleft - 180000);
    }
		  else if (tymleft > 10 * 60 * 60000 && tymleft < 603900000 )
    {
    //	ele.remove();
			console.log("time:"+tymleft);
		ele.style.background = "rgb(224, 145, 0)";
	
			document.getElementById("ptanotify").innerHTML = "You are registered for <strong>"+mobname+"</strong> on next sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product via Price Tracker for automatic Add to cart, Please Open this page before 30 minutes prior to sale starts.Please make sure your system time is synchronized and logged in to mi.com"; 
   
	  setTimeout(function() { ptmibuy(mobdate, mobname, refresh,localStorage.mipname,cookie);}, tymleft - 59 * 60000);
    }
    
    else if (tymleft < 180000 || tymleft > 603900000) {
       console.log("tymleft:"+tymleft);
       console.log("tymleft1:"+tymleft1);
    	//if(!ti) tryontym(mobdate);
    	ele.style.background = "rgb(132, 119, 202)";
    	document.getElementById("ptanotify").innerHTML = "we are trying to add the item in your cart clicked "+ti+" times";
		/*	else{
    		document.getElementById("ptanotify").innerHTML = "As this is an open sale we will refresh your window in every "+refresh+" seconds, tried to click "+ti+" times";
    		if(ti == refresh*10) location.reload();
    	}*/
    	 
	
            
            
             setTimeout(function() {
        	
            if (document.getElementsByClassName(".btn-product:not(.disabled)").length) {
                document.getElementsByClassName(".btn-product:not(.disabled)")[localStorage.click].click();
                setCookie("ptautomi", localStorage.mipname, 80,'/'); setCookie("ptautomi", localStorage.mipname, 100,'/');	 setCookie("ptautomi", localStorage.mipname, 100,'/');
               } 
            else if($s('.btn-product:not(.btn-disabled)').length) {
                $s('.btn-product:not(.btn-disabled)')[localStorage.click].click();
                setCookie("ptautomi", localStorage.mipname, 80,'/'); setCookie("ptautomi", localStorage.mipname, 100,'/');	 setCookie("ptautomi", localStorage.mipname, 100,'/');
               }
							 	else    if (document.getElementsByClassName(".btn-product:not(.btn-disabled)").length) {
							
                document.getElementsByClassName(".btn-product:not(.btn-disabled)")[0].click();
								document.getElementsByClassName(".btn-product:not(.btn-disabled)")[1].click();
								document.getElementsByClassName(".btn-product:not(.btn-disabled)")[2].click();
                setCookie("ptautomi", localStorage.mipname, 80,'/');
									 setCookie("ptautomi", localStorage.mipname, 100,'/');
									 	 setCookie("ptautomi", localStorage.mipname, 100,'/');
               } 
            else if($s('.btn-product:not(.btn-disabled)').length) {
                $s('.btn-product:not(.btn-disabled)')[0].click();
								  $s('.btn-product:not(.btn-disabled)')[1].click();
									  $s('.btn-product:not(.btn-disabled)')[2].click();
                setCookie("ptautomi", localStorage.mipname, 80,'/');
									 setCookie("ptautomi", localStorage.mipname, 100,'/');	 setCookie("ptautomi", localStorage.mipname, 100,'/');
               }
            else if (ti < 8800) {
                ti++;
								
								//autocall(cookie);
								 setCookie("ptautomi", localStorage.mipname, 100,'/');
          miselect(localStorage.mipname);
                  ptmibuy(mobdate, mobname, refresh,localStorage.mipname,cookie);
               // mibuy(sdate);
              
            }
        }, 100);	
					
        
	
    }	
       else
		{
				ele.remove();
		}
              


}
function miselect(pid){
	// $s = jQuery.noConflict();
 	if(winloc.search("in/diwali-with-mi-2020-sale")> 0){
  
   $s('.J_flashBuyBtn:eq(0)').click();
  $s('.J_flashBuyBtn:eq(1)').click();
  $s('.J_flashBuyBtn:eq(0)').trigger("click");
    $s('.J_flashBuyBtn:eq(1)').trigger("click");
       $s('.J_flashBuyBtn:eq(2)').click();
  $s('.J_flashBuyBtn:eq(3)').click();
  $s('.J_flashBuyBtn:eq(2)').trigger("click");
    $s('.J_flashBuyBtn:eq(3)').trigger("click");
        $s('.J_flashBuyBtn:eq(4)').click();
  $s('.J_flashBuyBtn:eq(5)').click();
  $s('.J_flashBuyBtn:eq(4)').trigger("click");
    $s('.J_flashBuyBtn:eq(5)').trigger("click");
  }
	if(winloc.search("choosePro/index.html")> 0){
	
           if(getCookie("ptautomi")){
						id = localStorage.mipname;
            	$s('[data-goods-id="'+id+'"] .btn-buy').trigger('click');
				$s('[data-goods-id="'+id+'"]').attr( "data-reg", "undefined" );

               console.log("wc2:"+pid);
           	
									 $s('[data-goods-id="'+id+'"] .item-actions')
    .children() //select all the children
    .remove();
							// $s('[data-goods-id="'+id+'"] .item-actions').append('<a class="btn btn-orange btn-active btn-buy" href="javascript: void(0);" >Add to Cart</a>');
           if($s('[data-goods-id="'+id+'"] .btn-buy').length){
                    console.log("wc2:"+pid);
											
           		$s('[data-goods-id="'+id+'"] .btn-buy').trigger('click');
							setCookie("ptautomisuccess", 1,550 ,'/');
							setCookie("ptautomi", pid,0 ,'/');
						
					 }
					 setTimeout(function() {miselect(pid);}, 500);
				
           	}
              else
              {
                     console.log("wc:"+pid);
                  id = pid;
									 setTimeout(function() {miselect(pid);}, 500);
			
              }
	
	}
	if(winloc.search("event/success")>0){
		setTimeout(function(){$s(".btn-large.btn-orange")[0].click();},5000);
		setCookie("ptautomi", 1, 30,'/');
		window.open("http://bit.ly/pricetracker_reviews", '_blank');
	}
	if(winloc.search("cart/recommend")>0){
		setTimeout(function(){$s(".btn-orange.btn-next.J_next")[0].click();},3000);
		setCookie("ptautomi", 1, 1,'/');
	}
}
function autocall(cookiename)
{
	  var httpq4 = new getXMLHTTPRequest();
    var myurl = "https://api.indiadesire.com/api.php?rquest=getAutoBuyPID";
   var parameters = "pname="+cookiename;
    httpq4.open("POST", myurl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq4.responseText;
                         var data1=JSON.parse(data);
                         localStorage.mipname= data1[0].pid;
            }
        }
    };
    httpq4.send(parameters);
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
    document.cookie = cname + "=" + cvalue + "; " + expires +"; path="+path+";domain=.mi.com";
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
function getXMLHTTPRequest() {

    req = new XMLHttpRequest();
    return req;
}
