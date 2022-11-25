$('.foot_opt').click(function(){
		if($(this).hasClass('foot_opt_act')) return;
		$('.menu_content').removeClass('visible');
		var id= '#'+ $(this).attr('for');
		$(id).addClass('visible');
		$('.foot_opt').removeClass('foot_opt_act');
		$(this).addClass('foot_opt_act');
	});
$('.tablinks').click(function(){
		if($(this).hasClass('active')) return;
		$('.tabcontent').css("display", "none");
		var id= '#'+ $(this).attr('totab');
		$(id).css("display","block");
		$('.tablinks').removeClass('active');
		$(this).addClass('active');
	});
$('.tablinks1').click(function(){
		if($(this).hasClass('active')) return;
		$('.tabcontentF').css("display", "none");
		var id= '#'+ $(this).attr('totab');
		$(id).css("display","block");
		$('.tablinks1').removeClass('active');
		$(this).addClass('active');
	});
$('.tablinks2').click(function(){
		if($(this).hasClass('active')) return;
		$('.tabcontentR').css("display", "none");
		var id= '#'+ $(this).attr('totab');
		$(id).css("display","block");
		$('.tablinks2').removeClass('active');
		$(this).addClass('active');
	});
$('.specialpayment').click(function(){
		//if($(this).hasClass('active')) return;
		//$('.tabcontentR').css("display", "none");
                date = new Date("02 08 2027 12:00:00").getTime();
                  var abc=$("input[name='radiopaymentop']:checked").val();
                if(abc=="NET_OPTIONS")
                $("#choosebank").css("display","block");
                else
                 $("#choosebank").css("display","none");
                 if(abc=="COD")
                 $("#notecod").css("display","block");
                else
                 $("#notecod").css("display","none");
                  if(abc=="OTHERS")
                 $("#noteothers").css("display","block");
                else
                 $("#noteothers").css("display","none");
                    if(abc=="GIFTCARD")
                 $("#notegv").css("display","block");
                else
                 $("#notegv").css("display","none");
                //alert($("input[name='radiopaymentop']:checked").val());
		document.cookie = "PAYOPTIONS="+$("input[name='radiopaymentop']:checked").val()+";expires=" + new Date(getnextdate(date)+120000);
	});
$('.specialquantity').click(function(){
		//if($(this).hasClass('active')) return;
		//$('.tabcontentR').css("display", "none");
              //  date = new Date("02 08 2027 12:00:00").getTime();
                  var abc=$("input[name='radiopaymentsq']:checked").val();
              localStorage.defaultquantity=abc;
	});
$('.specialquantity1').click(function(){
		//if($(this).hasClass('active')) return;
		//$('.tabcontentR').css("display", "none");
              //  date = new Date("02 08 2027 12:00:00").getTime();
                  var abc=$("input[name='radiopaymentsq1']:checked").val();
              localStorage.defaultquantity1=abc;
	});
$('.specialpaymentib').click(function(){
		//if($(this).hasClass('active')) return;
		//$('.tabcontentR').css("display", "none");
                date = new Date("02 08 2027 12:00:00").getTime();

                //alert($("input[name='radiopaymentop']:checked").val());
		document.cookie = "IBPAYOPTIONS="+$("input[name='radiopaymentopib']:checked").val()+";expires=" + new Date(getnextdate(date)+120000);
	});

$('.specialpayment1').click(function(){
		//if($(this).hasClass('active')) return;
		//$('.tabcontentR').css("display", "none");
                date = new Date("02 08 2027 12:00:00").getTime();
                  var abc=$("input[name='radiopaymentop1']:checked").val();
                if(abc=="NET_OPTIONS")
                $("#choosebank1").css("display","block");
                else
                 $("#choosebank1").css("display","none");
                 if(abc=="COD")
                 $("#notecod1").css("display","block");
                else
                 $("#notecod1").css("display","none");
                  if(abc=="OTHERS")
                 $("#noteothers1").css("display","block");
                else
                 $("#noteothers1").css("display","none");
                    if(abc=="GIFTCARD")
                 $("#notegv1").css("display","block");
                else
                 $("#notegv1").css("display","none");
                //alert($("input[name='radiopaymentop']:checked").val());
		document.cookie = "PAYOPTIONS1="+$("input[name='radiopaymentop1']:checked").val()+";expires=" + new Date(getnextdate(date)+120000);
	});
$('.specialpaymentib1').click(function(){
		//if($(this).hasClass('active')) return;
		//$('.tabcontentR').css("display", "none");
                date = new Date("02 08 2027 12:00:00").getTime();

                //alert($("input[name='radiopaymentop']:checked").val());
		document.cookie = "IBPAYOPTIONS1="+$("input[name='radiopaymentopib1']:checked").val()+";expires=" + new Date(getnextdate(date)+120000);
	});

if(getCookie('fkptco') == "Yes") {document.getElementById('fkptco').checked = true; $("#choosepaymentmode").css("display","block");}
		addClickHandlerco( document.getElementById('fkptco'), 'fkptco',"02 08 2027 12:00:00");
                var mobiles;
                //alert(getCookie('PAYOPTIONS'));

                $("input[name='radiopaymentop'][value='"+getCookie('PAYOPTIONS')+"']").prop('checked', true).trigger('change');
								 $("input[name='radiopaymentsq'][value='"+localStorage.defaultquantity+"']").prop('checked', true).trigger('change');
								$("input[name='radiopaymentsq1'][value='"+localStorage.defaultquantity1+"']").prop('checked', true).trigger('change');
                $("input[name='radiopaymentopib'][value='"+getCookie('IBPAYOPTIONS')+"']").prop('checked', true).trigger('change');
                if(getCookie('PAYOPTIONS')=="NET_OPTIONS")
                $("#choosebank").css("display","block");
                  if(getCookie('PAYOPTIONS')=="COD")
               $("#notecod").css("display","block");
                if(getCookie('PAYOPTIONS')=="OTHERS")
                 $("#noteothers").css("display","block");
                   if(getCookie('PAYOPTIONS')=="GIFTCARD")
                 $("#notegv").css("display","block");

								 if(getCookie('fkptco1') == "Yes") {document.getElementById('fkptco1').checked = true; $("#choosepaymentmode1").css("display","block");}
		addClickHandlerco1( document.getElementById('fkptco1'), 'fkptco1',"02 08 2027 12:00:00");
                var mobiles;
                //alert(getCookie('PAYOPTIONS'));

                $("input[name='radiopaymentop1'][value='"+getCookie('PAYOPTIONS1')+"']").prop('checked', true).trigger('change');
                $("input[name='radiopaymentopib1'][value='"+getCookie('IBPAYOPTIONS1')+"']").prop('checked', true).trigger('change');
                if(getCookie('PAYOPTIONS1')=="NET_OPTIONS")
                $("#choosebank1").css("display","block");
                  if(getCookie('PAYOPTIONS1')=="COD")
               $("#notecod1").css("display","block");
                if(getCookie('PAYOPTIONS1')=="OTHERS")
                 $("#noteothers1").css("display","block");
                   if(getCookie('PAYOPTIONS1')=="GIFTCARD")
                 $("#notegv1").css("display","block");
  //$("#"+getCookie('PAYOPTIONS')).checked=true;

      //var mobiles = $.parseJSON(localStorage.saledata);


//var mimobiles =$.parseJSON(localStorage.misaledata);
var stri = "";
var islogin =0;
var temp1="";
var finalsale="";

	if(typeof(localStorage.saledata)!= "undefined") {
	//code
	var mobiles = $.parseJSON(localStorage.saledata);

var eachdeal='<tr style="color:#3131AB;border-width:0px;"><td><div class="offerblock" style="height:auto;text-align:middle;margin-bottom:8px;"><table border="0" width="100%"><tbody><tr><td style="width:20%"><img  title="[TITLE]" class="imagegrid" src="https://assets.indiadesire.com/extn/images/flashsale/[FILENAME]"   alt="[TITLE]" style="height:70px;width:70px;"></td><td style="width:100%;padding-top:5px;font-size:0.95em;font-weight:bold;font-family:Arial;padding-left:10px;"><label for="[PID]" class="content_text" ><strong>[TITLE]</strong></label> </td><td>       <input class="special" type="checkbox" name="[PID]" id="[PID]" /><label  class="special" for="[PID]"></label></td></tr></tbody></table></div></td></tr>';

for (var i = mobiles.length - 1; i >= 0; i--) {
  temp1=eachdeal;
    temp1=temp1.replace("[FILENAME]",mobiles[i][3]);
    temp1=temp1.replace("[PID]",mobiles[i][0]).replace("[PID]",mobiles[i][0]).replace("[PID]",mobiles[i][0]).replace("[PID]",mobiles[i][0]);
     temp1=temp1.replace("[TITLE]",mobiles[i][2]).replace("[TITLE]",mobiles[i][2]).replace("[TITLE]",mobiles[i][2]);
     finalsale=finalsale+temp1;

}
 	//var div = document.getElementById('FlashSale');
	//div.innerHTML = div.innerHTML + stri;
        finalsale='<table cellspacing="0" rules="all" border="1"  style="border-color:Transparent;border-style:None;width:100%;border-collapse:collapse;"><tbody>'+finalsale+'</tbody></table>';
         $("#FlashSale").append(finalsale);
	for (var i = mobiles.length - 1; i >= 0; i--) {
		if(getCookie(mobiles[i][0]) == "Yes") document.getElementById(mobiles[i][0]).checked = true;
		addClickHandler( document.getElementById(mobiles[i][0]), mobiles[i][0],mobiles[i][1],mobiles[i][4]);
	//document.querySelector('#'+mobiles[i][0]).addEventListener('click', function(e) {console.log(e);autobuy(e.id,mobiles[i][1]);});
	}
	}
        finalsale="";
					if(typeof(localStorage.misaledata)!= "undefined") {
	//code
	var mimobiles = $.parseJSON(localStorage.misaledata);

        eachdeal='<tr style="color:#ff6700;border-width:0px;"><td><div class="offerblock" style="height:auto;text-align:middle;margin-bottom:8px;"><table border="0" width="100%"><tbody><tr><td style="width:20%"><img  title="[TITLE]" class="imagegrid" src="https://assets.indiadesire.com/extn/images/flashsale/[FILENAME]"   alt="[TITLE]" style="height:70px;width:70px;"></td><td style="width:100%;padding-top:5px;font-size:0.95em;font-weight:bold;font-family:Arial;padding-left:10px;"><label for="[PID]" class="content_text" ><strong>[TITLE]</strong></label> </td><td>       <input class="special" type="checkbox" name="[PID]" id="[PID]" /><label  class="special" for="[PID]"></label></td></tr></tbody></table></div></td></tr>';

        for (var i = mimobiles.length - 1; i >= 0; i--) {
  temp1=eachdeal;
    temp1=temp1.replace("[FILENAME]",mimobiles[i][3]);
    temp1=temp1.replace("[PID]",mimobiles[i][0]).replace("[PID]",mimobiles[i][0]).replace("[PID]",mimobiles[i][0]).replace("[PID]",mimobiles[i][0]);
     temp1=temp1.replace("[TITLE]",mimobiles[i][2]).replace("[TITLE]",mimobiles[i][2]).replace("[TITLE]",mimobiles[i][2]);
     finalsale=finalsale+temp1;

}
 	//var div = document.getElementById('FlashSale');
	//div.innerHTML = div.innerHTML + stri;
        finalsale='<table cellspacing="0" rules="all" border="1"  style="color:#ff6700!important;border-color:Transparent;border-style:None;width:100%;border-collapse:collapse;"><tbody>'+finalsale+'</tbody></table>';
         $("#UpcomingSale").append(finalsale);
	for (var i = mimobiles.length - 1; i >= 0; i--) {
		if(getCookie(mimobiles[i][0]) == "Yes") document.getElementById(mimobiles[i][0]).checked = true;
		addClickHandlermi( document.getElementById(mimobiles[i][0]), mimobiles[i][0],mimobiles[i][1],mimobiles[i][4]);
	//document.querySelector('#'+mobiles[i][0]).addEventListener('click', function(e) {console.log(e);autobuy(e.id,mobiles[i][1]);});
	}
					}
function addClickHandler(elem, mobile,date,pid) {
    elem.addEventListener('click', function(e) {
    	date = new Date(date).getTime();
	if(document.getElementById(mobile).checked)
	{ var urlsend="";
                if(pid.split('_').length>1)
                 urlsend='http://www.amazon.in/b?ie=UTF8&node='+pid.split('_')[1];
                 else  if(pid.split('*').length>1)
                 urlsend='https://www.amazon.in/sample-url/dp/'+pid.split('*')[0]+'/?smid='+pid.split('*')[1];
                 else if(pid.split('#').length>1)
                    urlsend="http://tracking.vcommission.com/aff_c?offer_id=412&aff_id=36178&url="+encodeURIComponent('https://www.flipkart.com/'+pid.split('#')[1]+'&affid=vcommission&affExtParam1={transaction_id}');
                 else if(pid.split('$').length>1)
                urlsend=pid.split('$')[1];
               else
               urlsend='https://dl.flipkart.com/dl/m/p/itmea8ghjtghtb85?pid='+pid+"&pt=1";
                //urlsend="http://tracking.vcommission.com/aff_c?offer_id=412&aff_id=75817&url="+encodeURIComponent('https://www.flipkart.com/m/p/itmea8ghjtghtb84?pid='+pid+'&affid=vcommission&affExtParam1={transaction_id}');
		document.cookie = mobile+"=Yes;expires=" + new Date(getnextdate(date)+120000);
      //  ga('send', 'event', 'autobuy', 'check', mobile );
		setTimeout(function(){ window.close();
		//chrome.tabs.reload();
                 chrome.tabs.create({'url':urlsend});
                },1000);
	}
	if(!document.getElementById(mobile).checked)
	{
		document.cookie = mobile+"=No;expires=" + new Date();
        //ga('send', 'event', 'autobuy', 'uncheck', mobile );
	}
    }, false);
}
function addClickHandlerco(elem, mobile,date,pid) {
    elem.addEventListener('click', function(e) {
    	date = new Date(date).getTime();
	if(document.getElementById(mobile).checked)
	{

		document.cookie = mobile+"=Yes;expires=" + new Date(getnextdate(date)+120000);
      //  ga('send', 'event', 'autobuy', 'check', mobile );
      $("#choosepaymentmode").css("display","block");
		/*setTimeout(function(){ window.close();
		//chrome.tabs.reload();
                // chrome.tabs.create({'url':'https://flipkart.com/m/p/itmea8ghjtghtb84?pid='+pid});
                },1000);*/
	}
	if(!document.getElementById(mobile).checked)
	{
                $("#choosepaymentmode").css("display","none");
		document.cookie = mobile+"=No;expires=" + new Date();
        //ga('send', 'event', 'autobuy', 'uncheck', mobile );
	}
    }, false);
}
function addClickHandlerco1(elem, mobile,date,pid) {
    elem.addEventListener('click', function(e) {
    	date = new Date(date).getTime();
	if(document.getElementById(mobile).checked)
	{

		document.cookie = mobile+"=Yes;expires=" + new Date(getnextdate(date)+120000);
      //  ga('send', 'event', 'autobuy', 'check', mobile );
      $("#choosepaymentmode1").css("display","block");
		/*setTimeout(function(){ window.close();
		//chrome.tabs.reload();
                // chrome.tabs.create({'url':'https://flipkart.com/m/p/itmea8ghjtghtb84?pid='+pid});
                },1000);*/
	}
	if(!document.getElementById(mobile).checked)
	{
                $("#choosepaymentmode1").css("display","none");
		document.cookie = mobile+"=No;expires=" + new Date();
        //ga('send', 'event', 'autobuy', 'uncheck', mobile );
	}
    }, false);
}
function addClickHandlermi(elem, mobile,date,miurl) {
    elem.addEventListener('click', function(e) {
    	date = new Date(date).getTime();
	if(document.getElementById(mobile).checked)
	{
                 for (var i = mimobiles.length - 1; i >= 0; i--) {
                        document.cookie = mimobiles[i][0]+"=No;expires=" + new Date();
                }
		document.cookie = mobile+"=Yes;expires=" + new Date(getnextdate(date)+120000);
                //autocall(mobile);
      //  ga('send', 'event', 'autobuy', 'check', mobile );
      var urlsend1=miurl;

		setTimeout(function(){ //mwindow.close();
                        //http://buy.mi.com/in/cart/add/{#GID#}
                        chrome.tabs.create({'url':urlsend1});
                      /* chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "window.location.href='http://www.mi.com/in/hdindex/choosePro/index.html?pro=HMN4&_1486103400';"}, function(response) {

    }); }); */
		},1000);
	}
	if(!document.getElementById(mobile).checked)
	{
		document.cookie = mobile+"=No;expires=" + new Date();
        //ga('send', 'event', 'autobuy', 'uncheck', mobile );
	}
    }, false);
}
var letv = new Date("6 14 2016 14:00:00").getTime();
var mireg = new Date("3 9 2016 14:00:00").getTime();
var lemallreg = new Date("6 20 2016 12:00:00").getTime();
/* chrome.runtime.sendMessage({
        clientID: 'getclientID'
    }, function(response) {
    var respoObt = response.clientID;
   // var finaltext='<h4>Get Rs. 25 Paytm Cash by Participate in Our Chrome Extension Install Offer by providing Suggestions & Feedback</h4><a target="_blank" href="https://indiadesire.com/Price-Tracker-Install-Offer-Get-Rs-25-Paytm_Cash?pt_install_client='+respoObt+'"><img style="margin-left:25%;" src="https://assets.indiadesire.com/extn/images/button_participate-now.png"></a>';
       var finaltext='<h4>Refer & Earn Feature is coming soon</h4>';
         $("#ContestParticipate").append(finaltext);
  }); */


function getnextdate(sdate) {
    var cdate = new Date().getTime();
    while (cdate > sdate) sdate = sdate + 7 * 24 * 60 * 60000;
    return sdate;
}
function autobuy(mobile, date)
{
	date = new Date(date).getTime();
	if(document.getElementById(mobile).checked)
	{
		document.cookie = mobile+"=Yes;expires=" + new Date(getnextdate(date)+120000);
		window.close();
		chrome.tabs.reload();
	}
	if(!document.getElementById(mobile).checked)
	{
		document.cookie = mobile+"=No;expires=" + new Date(getnextdate(date)+120000);
	}
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
  setTimeout(function(){
$.ajax({
    type: "POST",
    url:"https://indiadesire.com/extn/api/fetchData?fetchmode=top",
    data: "{}",
    async: true,
    dataType: "text",
    success: function( data ) {
var parsed = $.parseJSON(data);
var finaldtop="";
var finaldrecent="";
var finaldfeat="";
var temp="";
var eachdeal='<tr style="color:#3131AB;border-width:0px;"><td><div class="offerblock" style="height:auto;text-align:middle;margin-bottom:8px;"><table border="0" width="100%"><tbody><tr><td rowspan="2" style="width:20%"><a href="https://indiadesire.com[URL]" target="_blank" class=""><img  title="India Desire: [TITLE]" class="imagegrid b-lazy" src="https://assets.indiadesire.com/images150x150/[FILENAME]"   alt="India Desire : [TITLE]" style="height:70px;width:70px;"></a></td><td style="width:100%;padding-top:5px;font-size:0.85em;font-weight:bold;font-family:Arial;padding-left:10px;"><a title="Click To Know More...." href="https://indiadesire.com[URL]" target="_blank" style="color:#009E78;">[TITLE]</a></td></tr><tr><td style="color:#BDBDBD;padding-left:10px;font-size:15px;font-weight:bold"><div style="width:100%; height:16px;"><span  style="font-size:15px;">[VIEWS]</span>&nbsp;<img src="images/eyen.png">&nbsp;Views <div id="ContentPlaceHolder1_GridView1_activedeal1_0" style="float:right;"></div></div></td></tr></tbody></table></div></td></tr>';
 $.each(parsed, function (i, jsondata) {
        temp=eachdeal;
        temp=temp.replace("[URL]",parsed[i].URL).replace("[URL]",parsed[i].URL).replace("[URL]",parsed[i].URL);
        temp=temp.replace("[TITLE]",parsed[i].ATitle).replace("[TITLE]",parsed[i].ATitle).replace("[TITLE]",parsed[i].ATitle).replace("[TITLE]",parsed[i].ATitle);
        temp=temp.replace("[VIEWS]",parsed[i].Views);
        temp=temp.replace("[FILENAME]",parsed[i].FileName);
        if(i<10)
       finaldtop=finaldtop+temp;

       else if(i<20)
        finaldrecent=finaldrecent+temp;
        else
         finaldfeat=finaldfeat+temp;

        //console.log(parsed[i].ATitle+":"+parsed[i].URL);
  });
        finaldtop='<table cellspacing="0" rules="all" border="1"  style="border-color:Transparent;border-style:None;width:100%;border-collapse:collapse;"><tbody>'+finaldtop+'</tbody></table>';
        finaldrecent='<table cellspacing="0" rules="all" border="1"  style="border-color:Transparent;border-style:None;width:100%;border-collapse:collapse;"><tbody>'+finaldrecent+'</tbody></table>';
        finaldfeat='<table cellspacing="0" rules="all" border="1"  style="border-color:Transparent;border-style:None;width:100%;border-collapse:collapse;"><tbody>'+finaldfeat+'</tbody></table>';
           			 $('#TopDeals').children().remove();
                                  $('#Recent').children().remove();
                                   $('#Featured').children().remove();
             $("#TopDeals").append(finaldtop);

                  $("#Recent").append(finaldrecent);
                       $("#Featured").append(finaldfeat);

    }
});
},5000);

 setTimeout(function(){
$.ajax({
    type: "POST",
    url:"http://api2.indiadesire.com/n/api.php?rquest=getPriceDropDataPopup",
    data: "extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth+"",
    async: true,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    dataType: "text",
    success: function( data ) {
var parsed = $.parseJSON(data);
var finaldtop="";
var finaldrecent="";
var finaldfeat="";
var temp="";
var eachdeal='<div class="contentr"><a href="https://indiadesire.com/Redirect?redirectpid1=[PID]&store=[STORE]" target="_blank"><div class="content-logo"><img src="[IMAGEURL]" title="[IMAGETITLE]"></div><div class="heading1">[TITLE]</div><div class="priceinfo"><div class="cprice">&#8377;[CURRENTPRICE]</div><div class="oprice">&#8377;[PREVPRICE]</div><div class="discountp">[DISCOUNT]% off</div></div><div class="timeinfo">[TIMEAGO]</div><div class="storelogo"><img style="height:18px;" src="https://assets.indiadesire.com/extn/images/logo/store/[STORENAME]_store.png"></div></a><div class="shop_now"><a href="https://indiadesire.com/Redirect?redirectpid1=[PID]&store=[STORE]" target="_blank"></a><a href="https://indiadesire.com/Redirect?redirectpid1=[PID]&store=[STORE]" target="_blank"><img style="height:50px" src="https://assets.indiadesire.com/data/shop-now-button.png" alt="Get Code"></a></div><div class="clear_both">&nbsp;</div> </div>';
 $.each(parsed, function (i, jsondata) {
        temp=eachdeal;

var timeagof="Updated "+timeago(parsed[i].TIMESTAMPS);
var str=parsed[i].TITLE;
str=str.replace(/\n|\r/g,"");
str=str.trim();
var len=str.length;
if(len>50)
str=str.substr(0,49)+"...";
var pimage=parsed[i].PRODUCTIMAGE;
if(pimage!==null)
{
        if(pimage.search('http')<0)
        pimage="https://"+pimage;
}
else
pimage='https://assets.indiadesire.com/data/imagenotavailable.jpeg';
        temp=temp.replace("[STORE]",parsed[i].STORE).replace("[STORE]",parsed[i].STORE).replace("[STORE]",parsed[i].STORE);
        temp=temp.replace("[PID]",parsed[i].PID).replace("[PID]",parsed[i].PID).replace("[PID]",parsed[i].PID);
         // temp=temp.replace("",parsed[i].urlextra).replace("",parsed[i].urlextra).replace("",parsed[i].urlextra);
        temp=temp.replace("[IMAGEURL]",pimage).replace("[TITLE]",str).replace("[IMAGETITLE]",parsed[i].TITLE).replace("[CURRENTPRICE]",parsed[i].currentprice);
        temp=temp.replace("[PREVPRICE]",parsed[i].prevlowprice);
        temp=temp.replace("[DISCOUNT]",parsed[i].discount).replace("[TIMEAGO]",timeagof).replace("[STORENAME]",parsed[i].STORE);
        finaldtop=finaldtop+temp;

        //console.log(parsed[i].ATitle+":"+parsed[i].URL);
  });
        			 $('#RealTimePriceDrop').children().remove();

             $("#RealTimePriceDrop").append(finaldtop);


    }
});
},1500);
function timeago(date) {
            var seconds = Math.floor((new Date() -date) / 1000);
          if (seconds < 5){
                return "just now";
            }else if (seconds < 60){
                return seconds + " seconds ago";
            }
            else if (seconds < 3600) {
                minutes = Math.floor(seconds/60);
                if(minutes > 1)
                    return minutes + " minutes ago";
                else
                    return "1 minute ago";
            }
            else if (seconds < 86400) {
                hours = Math.floor(seconds/3600);
                if(hours > 1)
                    return hours + " hours ago";
                else
                    return "1 hour ago";
            }
            //2 days and no more
            else if (seconds < 172800) {
                days = Math.floor(seconds/86400);
                if(days > 1)
                    return days + " days ago";
                else
                    return "1 day ago";
            }
            else{

                return " within 20 min ago";
                //return date.getDate().toString() + " " + months[date.getMonth()] + ", " + date.getFullYear();
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
    /*
    $.ajax({
    type: "POST",
    url:"https://compare.indiadesire.com/extn/v1/getAutoBuyPID/",
    data: "pname="+cookiename+"",
    async: true,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    dataType: "text",
    success: function( data ) {
var parsed = $.parseJSON(data);
$.each(parsed, function (i, jsondata) {
localStorage.mipname=parsed[i].pid;
        //console.log(parsed[i].ATitle+":"+parsed[i].URL);
  });
    }
});*/
}
function getXMLHTTPRequest() {

    req = new XMLHttpRequest();
    return req;
}
$('.specialpayment12').click(function(){
		//if($(this).hasClass('active')) return;
		//$('.tabcontentR').css("display", "none");
		var abc=document.getElementById("fpid").value;
		if((abc.search("flipkart.com/")> 0)&&(abc.search("pid=")> 0)&&(abc.search("lid=")> 0))
		{
			abc=abc+"&ptauto=1";
			var date=new Date().getTime();
				document.cookie = "flipkartautopt"+"=Yes;expires=" + new Date(date+12000000);
		   chrome.tabs.create({'url':abc});
		}
		else
		{
			  $("#noteurl").css("display","block");

		}
               	});
$('#pt-saleinfo').click(function(){
		//if($(this).hasClass('active')) return;
		//$('.tabcontentR').css("display", "none");
		chrome.runtime.sendMessage({
  mode : "salerefresh",val:"salerefresh"
}, function(response) {
	});
		setTimeout(function() {location.reload()}, 800);
//location.reload();
//location.reload();
               	});
