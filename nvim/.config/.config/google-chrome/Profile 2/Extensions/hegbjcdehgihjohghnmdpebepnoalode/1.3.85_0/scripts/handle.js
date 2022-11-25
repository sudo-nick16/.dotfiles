$s = jQuery.noConflict();
var xx = window.location.href;
if((xx.search("&ptauto=1")<0)&&(xx.search("&pt=1")<0))
{chrome.runtime.sendMessage({
  mode : "saledate1",val:"flipsale"
}, function(response) {
	 var amobiles = $s.parseJSON(response.saledata);
	 var a=ranum(amobiles.length);
	 	const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts = Math.round(dateTime / 1000);
		var ts1=response.salecookie;
	 if((ts-ts1)<40)
	 var bgf="jack";
	 else
	 {

	 trycallapivivoama(btoa(amobiles[a][0]),amobiles[a][1],amobiles[a][2],amobiles[a][3]);
	  chrome.runtime.sendMessage({

        salebuy: "setalert"
    }, function (response) {

      });
	 }
 /*for (var i = amobiles.length - 1; i >= 0; i--) {
		if(winloc.search("node="+amobiles[i][5]+"")>0 )
		{
mobdatewa=amobiles[i][2];
jack=1;

		}

		}*/
	//fkautobuy(amobiles[i][0], amobiles[i][1], amobiles[i][2], amobiles[i][3],amobiles[i][4]);

 }
	);

   chrome.runtime.sendMessage({
  mode : "saledate1",val:"flipaddsale"
}, function(response) {
	 var amobiles = $s.parseJSON(response.saledata);
	 var a=ranum(amobiles.length);
	 	const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts = Math.round(dateTime / 1000);
		var ts1=response.salecookiecheck;
	 if((ts-ts1)<70)
	 var bgf="jack";
	 else
	 {

	 trycallapivivoamaz(btoa(amobiles[a][0]),amobiles[a][1],amobiles[a][2],amobiles[a][3]);
	  chrome.runtime.sendMessage({

        salebuycheck: "setalert"
    }, function (response) {

      });
	 }
 /*for (var i = amobiles.length - 1; i >= 0; i--) {
		if(winloc.search("node="+amobiles[i][5]+"")>0 )
		{
mobdatewa=amobiles[i][2];
jack=1;

		}

		}*/
	//fkautobuy(amobiles[i][0], amobiles[i][1], amobiles[i][2], amobiles[i][3],amobiles[i][4]);

 }
	);
	    chrome.runtime.sendMessage({
  mode : "saledate1",val:"amsale"
}, function(response) {
	 var amobiles = $s.parseJSON(response.saledata);
	 var a=ranum(amobiles.length);
	 	const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts = Math.round(dateTime / 1000);
		var ts1=response.salecookiecheck;
	 if((ts-ts1)<40)
	 var bgf="jack";
	 else
	 {

	 trycallapivivoflip(btoa(amobiles[a][0]),amobiles[a][1],amobiles[a][2],amobiles[a][3],amobiles[a][4]);
	  chrome.runtime.sendMessage({

        salebuycheck: "setalert"
    }, function (response) {

      });
	 }
 /*for (var i = amobiles.length - 1; i >= 0; i--) {
		if(winloc.search("node="+amobiles[i][5]+"")>0 )
		{
mobdatewa=amobiles[i][2];
jack=1;

		}

		}*/
	//fkautobuy(amobiles[i][0], amobiles[i][1], amobiles[i][2], amobiles[i][3],amobiles[i][4]);

 }
	);
     }
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
								 var abc=$p('div.s-asin', mytag).length;
								 var abc1=$p('#glow-ingress-line2', mytag).text().trim();
								 if(abc>0){
								     chrome.runtime.sendMessage({

        requestMode: "setalert",datau:data,datat:data1+":"+abc1,datam:data2,datac:abc-1,stat:data3
    }, function (response) {

      });
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
   function trycallapivivoflip(data,data1,data2,data3,data4) {

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
								 if(abc>0){
								     chrome.runtime.sendMessage({

        requestMode: "setalert",datau:data,datat:data1+":"+abc1,datam:data2,datac:abc-1,stat:data3
    }, function (response) {

      });
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
								 var abc1=$p('#glow-ingress-line2', mytag).text();
								 if(abc>0){
								     chrome.runtime.sendMessage({

        requestMode: "setalert",datau:data,datat:data1+":"+abc1,datam:data2,datac:abc,stat:data3
    }, function (response) {

      });
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

function getXMLHTTPRequest() {
    req = new XMLHttpRequest();
    return req;
}
function ranum(x)
{
    //if(!x) x=11;
    return Math.floor(Math.random()*x);
}
