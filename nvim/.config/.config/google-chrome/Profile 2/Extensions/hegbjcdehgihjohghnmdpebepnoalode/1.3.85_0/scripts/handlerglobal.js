tabID = 0;

 $abc = jQuery.noConflict();

function convertMonth(date){
  month = "";

  date = date.toUpperCase();
  if(date.split("JAN").length > 1){
    month = 1;
    mon = "JAN";
  }
  else if(date.split("FEB").length > 1){
    month = 2;
    mon = "FEB";
  }
  else if(date.split("MAR").length > 1){
    month = 3;
    mon = "MAR";
  }
  else if(date.split("APR").length > 1){
    month = 4;
    mon = "APR";
  }
  else if(date.split("MAY").length > 1){
    month = 5;
    mon = "MAY";
  }
  else if(date.split("JUN").length > 1){
    month = 6;
    mon = "JUN";
  }
  else if(date.split("JUL").length > 1){
    month = 7;
    mon = "JUL";
  }
  else if(date.split("AUG").length > 1){
    month = 8;
    mon = "AUG";
  }
  else if(date.split("SEP").length > 1){
    month = 9;
    mon = "SEP";
  }
  else if(date.split("OCT").length > 1){
    month = 10;
    mon = "OCT";

  }
  else if(date.split("NOV").length > 1){
    month = 11;
    mon = "NOV";

  }
  else if(date.split("DEC").length > 1){
    month = 12;
    mon = "DEC";

  }
  return month;
}

function convertMonthInt(date){
  date = parseInt(date);
  mon = date;
  if(date == 1){
    mon = "Jan";
  }
  else if(date == 2){
    mon = "Feb";
  }
  else if(date == 3){
    mon = "Mar";
  }
  else if(date == 4){
    mon = "Apr";
  }
  else if(date == 5){
    mon = "May";
  }
  else if(date == 6){
    mon = "Jun";
  }
  else if(date == 7){
    mon = "Jul";
  }
  else if(date == 8){
    mon = "Aug";
  }
  else if(date == 9){
  }
  else if(date == 10){
    mon = "Oct";

  }
  else if(date == 11){
    mon = "Nov";

  }
  else if(date == 12){
    mon = "Dec";

  }
  return mon;
}

function convertDate(date){
  //int mmt case
  date = date.toUpperCase();
  date.split("").length > 1
  if(date.split("JAN").length > 1){
    month = 1;
    mon = "JAN";
  }
  else if(date.split("FEB").length > 1){
    month = 2;
    mon = "FEB";
  }
  else if(date.split("MAR").length > 1){
    month = 3;
    mon = "MAR";
  }
  else if(date.split("APR").length > 1){
    month = 4;
    mon = "APR";
  }
  else if(date.split("MAY").length > 1){
    month = 5;
    mon = "MAY";
  }
  else if(date.split("JUN").length > 1){
    month = 6;
    mon = "JUN";
  }
  else if(date.split("JUL").length > 1){
    month = 7;
    mon = "JUL";
  }
  else if(date.split("AUG").length > 1){
    month = 8;
    mon = "AUG";
  }
  else if(date.split("SEP").length > 1){
    month = 9;
    mon = "SEP";
  }
  else if(date.split("OCT").length > 1){
    month = 10;
    mon = "OCT";

  }
  else if(date.split("NOV").length > 1){
    month = 11;
    mon = "NOV";

  }
  else if(date.split("DEC").length > 1){
    month = 12;
    mon = "DEC";

  }

  date1 = date.split(mon);
  date1 = date1[0];
  year = date.split(mon);
  year = year[1];

  return year+"-"+month+"-"+date1;

}

var xx = window.location.href;
if(xx.split("binance.com/register")[1])
sessionStorage.setItem("refId", "28729027");
else if(xx.split("bitmex.com/")[1])
{
   var expires = "";

        var date = new Date();
        date.setTime(date.getTime() + (7*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();

    document.cookie = "referralData" + "=" + ("s%3Aj%3A%7B%22referrerID%22%3A%22YNiNGw%22%2C%22referrerDiscount%22%3A0.1%2C%22expires%22%3A1524169028762%7D.RMKS3K%2Fgzile34IRNk6xJzsPPecxceYA0FYanvcGKhs" || "")  + expires + "; path=/";
}
  function setTabID(tabId){
 // console.log("Tab ID received is " + tabId);
  tabID = tabId;
}
function getTabID(){
   ////console.log("Tab ID process initiated");
   //var jsonArr = [{'sendTabID': 'TabIDRequested'}];
   //jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
    chrome.runtime.sendMessage({
        sendTabID: 'TabIDRequested'
    }, function (response) {
      setTabID(response.output);
      });
   //sendMessage(0, jsonArr, 0, setTabID, passBack);
 }

 getTabID();

function prepareGraphG(pid, passBack1){
  // console.log("pidPrepare: "+pid);
  //if(userSetting!="notYet"){
    //if(userSetting[1].value==1){
     // var curPosition = getCurrentPosition(window.location.href);
  // console.log("curPostion: "+curPosition);
   var passbackdata=JSON.parse(passBack1);
  var jsonArr = [{'requestMode': 'graph','prodid':pid}];
  jsonArr = JSON.stringify(jsonArr);
   chrome.runtime.sendMessage({
        requestMode: 'graph',prodid:pid,title:passbackdata[0].title,price:passbackdata[0].price,store:passbackdata[0].store
    }, function (response) {
      plotGraphG(response.output,response.title,response.price,passbackdata[0].currency,passbackdata[0].ccode);
      });
   /*
  chrome.runtime.sendMessage(jsonArr, function (response) {
      plotGraph(response.output);

      });*/

}

function addGraphBaseG(passBack,impposdata) {



      var passedData = JSON.parse(passBack);
      var selectors = JSON.parse(passedData[0].selectors);
      if (passedData[0].height != undefined && typeof(passedData[0].height) != "undefined") {
        var height = passedData[0].height;
      }
      else {
        var height = "750px";
      }
      if (height.split("1050").length > 1) {
        height = "1150px";
      }

      var addedToDOM = 0;
      //var imgSet = "settings.png";
      var csscustom=impposdata;

      var stringToAdd = '<div style="clear:both"></div><div id="containerMainPTID" class=" full-width" style=" background: #fff; min-width: 820px; max-width: 960px; height: auto; margin: 0 auto; position: relative;padding:2px;'+csscustom+'"><div id="chart-logo1" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://chrome.google.com/webstore/detail/price-tracker-comparison/hegbjcdehgihjohghnmdpebepnoalode?utm_source=graph" style="color: #0db2db;"><img src="https://assets.indiadesire.com/extn/images/logo/pt_logo-small.png" style="vertical-align: sub;margin-left: 5px;"></a></div><div id="container2pt" class="contGraphMainptid"></div><div id="container3pt"></div><div id="container4pt" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="https://chrome.google.com/webstore/detail/pricetrackrr-by-indiadesi/hegbjcdehgihjohghnmdpebepnoalode/support" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://assets.indiadesire.com/extn/images/bug-icon.png" style="vertical-align: middle;height: 15px;top: 0px;position: relative;">Report A Bug</a><a href="https://chrome.google.com/webstore/detail/pricetrackrr-by-indiadesi/hegbjcdehgihjohghnmdpebepnoalode/support" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://assets.indiadesire.com/extn/images/bulb-icon.png" style="vertical-align: middle;height: 16px;top: 0px;position: relative;">Suggest Us Something</a><a href="https://chrome.google.com/webstore/detail/pricetrackrr-by-indiadesi/hegbjcdehgihjohghnmdpebepnoalode/reviews" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://assets.indiadesire.com/extn/images/star-icon.png" style="vertical-align: middle;height: 16px;top: 0px;position: relative;">Rate Us</a><input type="button" id="closeptgraph" value="Close Graph"></div><div id="container10pt"> </div></div><div style="clear:both">';
      for (n = 0; n < selectors.length; n++) {
         $c = jQuery.noConflict();
        if ($c(selectors[n].selector).length > 0 && addedToDOM == 0) {
          addedToDOM = 1;
          if (selectors[n].attr == "none") {
            if (selectors[n].pos == "after") {
              $c(selectors[n].selector).after(stringToAdd);
            }
            else {
              $c(selectors[n].selector).before(stringToAdd);
            }
          }
          else if (selectors[n].attr == "parent") {
            if (selectors[n].pos == "after") {
              $c(selectors[n].selector).parent().after(stringToAdd);
            }
            else {
              $c(selectors[n].selector).parent().before(stringToAdd);
            }
          }
           else if (selectors[n].attr == "current") {
            if (selectors[n].pos == "append") {
              $c(selectors[n].selector).append(stringToAdd);
            }

          }
        }
      }
    addClickEventsGraph();


}
function addClickEventsGraph(){
    $c('#closeptgraph').click(function(){
 $c('#containerMainPTID').css("display","none");
  });
}

function plotGraphG(priceData,title,price1,currency,ccode)
  {
      var dataString = [];
     var today = new Date();
 var dd = today.getDate();
 var mm = today.getMonth();
 var yyyy = today.getFullYear();
 var datas = JSON.parse(priceData);
 //var passbackdata=JSON.parse(passback);
 //console.log("Plot Graph Reciveed:"+datas.length);
 var pointFound = 0;
 var flagPrice=1;
 var currentPrice=price1;
 var curDateString = yyyy + "-" + mm + "-" + dd;
 for(k=0;k<datas.length;k++){
  var dateC = datas[k].date;
  var price = datas[k].price;
     //console.log("Date:" + dateC+"price: "+price);
   // dateC2 = dateC.split(" ")[0];
   var  dateS = dateC.split("-");
    year = dateS[0];
    month = dateS[1]-1;
    date = dateS[2];

    if(flagPrice===0){
      currentPrice = price;
      if(currentPrice==="" || currentPrice===0 || currentPrice === undefined){
        flagPrice = 0;
      }
      else {
        flagPrice = 1;
      }
    }
    // console.log("FlagPrice is " + flagPrice);
    // console.log("Place 3 " + price);
    if(flagPrice==1 && parseInt(dd)==parseInt(date) && parseInt(mm)==parseInt(month) && parseInt(yyyy)==parseInt(year)){
      price = parseInt(currentPrice);
      pointFound = 1;
    }

    if(month===0){
      //month = 12;
    }

    dataString.push([Date.UTC(parseInt(year), parseInt(month) , parseInt(date)), parseInt(price)]);
    // console.log("Place 1 " + price);
  }
  if(pointFound===0 && flagPrice===1){
    dataString.unshift([Date.UTC(parseInt(yyyy), parseInt(mm) , parseInt(dd)), parseInt(currentPrice)]);
    console.log("current price " + parseInt(currentPrice));
  }
//dataString = dataString + "]";
var ToSend = JSON.stringify(dataString);
console.log("Final Chart " + ToSend);
var prodName=title;
var siteName=getsiteName();
 $ = jQuery.noConflict();
if($('.contGraphMainptid').length>0){
  //console.log("Plot Container2 was found");

    $ = jQuery.noConflict();
  $('.contGraphMainptid').highcharts({
    chart: {
      backgroundColor: '#FCFFC5',
      type: 'spline'
    },
    title: {
      text: 'Should I order ' + prodName + " now ?"
    },
    subtitle: {
      text: 'Price Variance Graph of ' + prodName + " at " + siteName
    },
    xAxis: {
      type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
              }
            },
            yAxis: {
              title: {
                text: 'Price ('+currency+')'
              },
              min: 0
            },
            tooltip: {
              formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                Highcharts.dateFormat('%A %B %e %Y', this.x) +'<br/> '+ccode+ this.y;
              }
            },  credits: {
                        enabled: false
                    },
             plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                states: {
                                    hover: {
                                        enabled: true,
                                        radius: 3
                                    }
                                }
                            }
                        }
                    },
            series: [{
              name: siteName + ' Price',
              data: dataString
            }],
             exporting: {
                        enabled: true
                    },
          });

  }
  }
  function addPriceDropBaseG(passBack,impposdata,passBack1) {

   var link = document.createElement("link");
      link.href = returnResource("css/ptrequired.css");
      link.type = "text/css";
      link.rel = "stylesheet";
      document.getElementsByTagName("head")[0].appendChild(link);

      var passedData = JSON.parse(passBack);
      var passedData1 = JSON.parse(passBack1);
      var selectors = JSON.parse(passedData[0].selectors);
      if (passedData[0].height != undefined && typeof(passedData[0].height) != "undefined") {
        var height = passedData[0].height;
      }
      else {
        var height = "750px";
      }
      if (height.split("1050").length > 1) {
        height = "1150px";
      }

      var addedToDOM = 0;
      //var imgSet = "settings.png";
      var csscustom=impposdata;
      var priceint=parseInt(passedData1[0].price)-1;

      var stringToAdd ='<div id="containerMainPTDropB" style="all:initial;" ><input type="image" id="pt-pricebutton" style="margin-left:auto;" src="https://assets.indiadesire.com/extn/images/pricedropbutton.png"><div id="pt-myModal" style="display:none;" class="pt-modal"><div class="pt-modal-content" style="border-radius:25px;"><div style="background-color:'+passedData1[0].color+'!important" class="pt-modal-header"><span class="pt-close">&times;</span><div style="font-size:20px;padding:5px;">Set Price Drop Alert for '+passedData1[0].title+' on '+passedData1[0].siteName+'</div></div><div class="pt-modal-body"><div style="font-size:11px;color:grey;">Set Price drop alert: so whenever price drops of the product registered , you will get alert via sms/email.</div><div id="ptalready" style="font-size:12px;color:#009E78;"></div><div><b>Current Price: </b>'+passedData1[0].currency+' '+passedData1[0].price+'</div><div style="font-size:15px;"><input type="checkbox" id="pt-pricedropbyvalue" name="pricedropvalue" value="1" >&nbsp;&nbsp;Send alert when price is less than &nbsp;&nbsp;<input name="pricedropbyvaleset"  style="width:110px;" id="pt-pricedropbyvaleset" min="1" max="'+priceint+'" pid="'+passedData1[0].pid+'" store="'+passedData1[0].store+'" class="ptinput" PlaceHolder="e.g. 123" type="number"  onblur="javascript: if (parseInt(this.value) > parseInt(this.max)) this.value = parseInt(this.max);if (parseInt(this.value) < parseInt(this.min)) this.value = parseInt(this.min);" disabled></div></br><div><b>Subscribe alert on:&nbsp;</b><input id="ptalerttype1" disabled="disabled" class="ptrg" type="radio"  name="ptalertmedia" value="1">&nbsp;Mobile&nbsp;<input type="radio"  id="ptalerttype2" class="ptrg"  name="ptalertmedia" value="2" checked="checked">&nbsp;Email&nbsp;<input type="radio" disabled="disabled" id="ptalerttype3" class="ptrg" name="ptalertmedia" value="3">&nbsp;Both&nbsp;</div></br><div style="display:none;" id="pt-mobileform"><b>Mobile No:&nbsp;</b><input type="number" style="width:150px;" id="pt-mobileno" class="ptinput" maxlength="10" PlaceHolder="e.g. 9XXXXXXXXX" disabled ><img class="pt-mobilecheck" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="\>&nbsp;<input type="number" style="width:130px;" id="pt-mobilenootp" disabled class="ptinput displaynone" PlaceHolder="Enter SMS OTP" maxlength="6" >&nbsp;<input type="button" id="ptmobileverify" value="Verify" class="displaynone"><span class="pt-mobileload"></span></div></br><div style="display:block;" id="pt-emailform"><b>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><input type="email" style="width:150px;" id="pt-email" class="ptinput" PlaceHolder="e.g. foo@abc.com" ><img class="pt-emailcheck" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="\>&nbsp;<input type="number" style="width:130px;" id="pt-emailotp" class="ptinput displaynone" PlaceHolder="Enter Email OTP" maxlength="6">&nbsp;<input type="button" id="ptemailverify" value="Verify" class="displaynone"><span class="pt-emailload"></span></div><div id="pterrormsg" style="color:red;"></div><div id="pterrormsg1" style="color:red;"></div></br><center><input type="button" id="submitptpricedrop" value="Subscribe for Price Drop Alert"><span class="pt-submitload"></span><input type="button" id="unsubscribeptpricedrop" value="UnSubscribe Price Drop Alert" style="display:none;"><span class="pt-unsubmitload"></span></center></div><div class="pt-modal-footer"><div>Price Drop Alert Subscription Service<span style="float:right;">Powered By &nbsp;&nbsp;<a target="_blank" href="https://chrome.google.com/webstore/detail/price-tracker-comparison/hegbjcdehgihjohghnmdpebepnoalode?utm_source=pricedrop" style="color: #0db2db;"><img  id="ptpoweredby" style="height:18px;" src="https://assets.indiadesire.com/extn/images/logo/pt_logo-small.png" style="vertical-align: sub;margin-left: 5px;"></a></span></div></div></div></div></div>';
      for (n = 0; n < selectors.length; n++) {
         $d = jQuery.noConflict();
        if ($d(selectors[n].selector).length > 0 && addedToDOM == 0) {
          addedToDOM = 1;
          if (selectors[n].attr == "none") {
            if (selectors[n].pos == "after") {
              $d(selectors[n].selector).after(stringToAdd);
            }
            else {
              $d(selectors[n].selector).before(stringToAdd);
            }
          }
          else if (selectors[n].attr == "parent") {
            if (selectors[n].pos == "after") {
              $d(selectors[n].selector).parent().after(stringToAdd);
            }
            else {
              $d(selectors[n].selector).parent().before(stringToAdd);
            }
          }
           else if (selectors[n].attr == "current") {
            if (selectors[n].pos == "append") {
              $d(selectors[n].selector).append(stringToAdd);
            }

          }
          addClickEvents();
        }
      }
          var prodid=$d("#pt-pricedropbyvaleset").attr('pid');
    var store=$d("#pt-pricedropbyvaleset").attr('store');
       chrome.runtime.sendMessage({
        requestMode: 'checkpricedropset',prodid:prodid,store:store
    }, function (response) {
       var datas = JSON.parse(response.output);
     var stat=parseInt(datas.checkptstatus);
     if(stat==1)
     {
      var minpricecheck= parseInt(datas.minpricecheck);
      //$("input[name='pricedropvalue']").val(datas.minpricecheck);
        if(minpricecheck==1)
      $d("input[name='pricedropvalue']").trigger('click');
      $d("#pt-pricedropbyvaleset").val(datas.minprice);
       var mode= parseInt(datas.mode);
      $d("#ptalerttype"+mode).trigger('click');
      $d("#pt-mobileno").val(datas.mobile);
   $d("#pt-email").val(datas.email);
      $d("#pt-pricebutton").attr('src','https://assets.indiadesire.com/extn/images/ptactive3.png');
      $d("#submitptpricedrop").attr('value','Modify Price Drop Alert Data');
      $d("#ptalready").text('You are already Tracking/Watching Price of this product. You can Modify or Unsubscribe Price Tracking.');
        var verified=parseInt(datas.verified);
   if(verified==1)
   $d('.pt-mobilecheck').attr('src','https://assets.indiadesire.com/extn/images/ptcheckmark.png');
    var everified=parseInt(datas.everified);
       if(everified==1)
   $d('.pt-emailcheck').attr('src','https://assets.indiadesire.com/extn/images/ptcheckmark.png');
      $d("#unsubscribeptpricedrop").show();
     }
     if(stat===0)
     {
       $d("#pt-mobileno").val(datas.mobile);
   $d("#pt-email").val(datas.email);
   var verified1=parseInt(datas.verified);
   if(verified1==1)
   $d('.pt-mobilecheck').attr('src','https://assets.indiadesire.com/extn/images/ptcheckmark.png');
    var everified1=parseInt(datas.everified);
       if(everified1==1)
   $d('.pt-emailcheck').attr('src','https://assets.indiadesire.com/extn/images/ptcheckmark.png');
     }
    //alert(datas.checkptstatus);
      });


}
function addClickEvents(){
 $d('#pt-pricebutton').click(function(){
 $d('#pt-myModal').css("display","block");
  });
  $d('.pt-close').click(function(){
 $d('#pt-myModal').css("display","none");
  });
  $d("#pt-pricedropbyvalue").change(function() {
    if(this.checked) {
      $d("#pt-pricedropbyvaleset").removeAttr('disabled');
        //Do stuff
    }
    else
    {
      $d("#pt-pricedropbyvaleset").attr('disabled','disabled');
    }
});
   $d('#submitptpricedrop').click(function(){
 setPriceDrop();
  });
     $d('#unsubscribeptpricedrop').click(function(){
 setPriceDropUnsubscribe();
  });
         $d('#ptmobileverify').click(function(){
 verifyMobileOtp();
  });
             $d('#ptemailverify').click(function(){
 verifyEmailOtp();
  });
  $d("input[name=ptalertmedia]:radio").change(function () {
 var radioValue = $d("input[name=ptalertmedia]:checked").val();
if (radioValue==1) {
    //  $d('#pt-mobileform').css('display','block');
            $d('#pt-emailform').css('display','none');
        }
if (radioValue==2){

            $d('#pt-mobileform').css('display','none');
              $d('#pt-emailform').css('display','block');
        }
       if (radioValue==3) {

           // $d('#pt-mobileform').css('display','block');
              $d('#pt-emailform').css('display','block');
        }
                    });
    /*$('body').click(function(event){
          if( $(event.target).closest("#pt-myModal").length < 0 ) {
        return false;
    }

       //if(event.target.id == "")
 $('#pt-myModal').css("display","none");

  });*/
}
function calltoPriceDropPopup()
{

}
function setPriceDrop(){
   ////console.log("Tab ID process initiated");
   //var jsonArr = [{'sendTabID': 'TabIDRequested'}];
   //jsonArr = JSON.stringify(jsonArr);pt-mobileno
     $d("#pterrormsg").text('');
        $d("#pterrormsg1").text('');
       $d('#submitptpricedrop').attr("style","display: none;");
      $d('.pt-submitload').addClass('pt-submitting');
   var passBack = [];
   var medium=$d("input[name='ptalertmedia']:checked").val();
    var minpricecheck=$d("input[name='pricedropvalue']:checked").val();
    var minprice=$d("#pt-pricedropbyvaleset").val();
    var cprice=parseInt($d("#pt-pricedropbyvaleset").attr('max'))+1;
    var prodid=$d("#pt-pricedropbyvaleset").attr('pid');
    var store=$d("#pt-pricedropbyvaleset").attr('store');
   var mobilen=0;
   var email=$d("#pt-email").val();
  // alert(medium+":"+minpricecheck+":"+minprice+":"+cprice+":"+email);
   //alert(mobilen);
   passBack = JSON.stringify(passBack);
    chrome.runtime.sendMessage({
        requestMode: 'setpricedrop',mobile:mobilen,medium:medium,minpricecheck:minpricecheck,minprice:minprice,cprice:cprice,prodid:prodid,store:store,email:email
    }, function (response) {
       var datas = JSON.parse(response.output);
     var smss=parseInt(datas.sms);
        var emails=parseInt(datas.email);
          var mode=parseInt(datas.mode);
        if(smss==1)
        {
           $d('.pt-mobilecheck').attr('src','https://assets.indiadesire.com/extn/images/ptcheckmark.png');
            $d("#pt-mobileno").val(mobilen);
          if(emails==1)
        {
   $d("#pterrormsg").attr('style','color:#4CAF50;');
         $d("#pterrormsg").text('You have successfully Subscribed for the Price Drop Alert Service.');
        }
        }
        else if(mode==1||mode==3)
        {
           $d('#ptmobileverify').removeClass('displaynone');
            $d("#pt-mobilenootp").removeClass('displaynone');
              $d('#ptmobileverify').addClass('displayinline');
            $d("#pt-mobilenootp").addClass('displayinline');
              $d('.pt-mobilecheck').attr('src','data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
             $d("#pt-mobileno").val(mobilen);
                $d("#pterrormsg").attr('style','color:#4CAF50;');
         $d("#pterrormsg").text('You have successfully Subscribed for the Price Drop Alert Service.');
          $d("#pterrormsg1").text('Please Verify the OTPs(One Time Password).');
        }
           if(emails==1)
        {
           $d('.pt-emailcheck').attr('src','https://assets.indiadesire.com/extn/images/ptcheckmark.png');
            $d("#pt-email").val(email);
                if(smss==1)
        {
   $d("#pterrormsg").attr('style','color:#4CAF50;');
         $d("#pterrormsg").text('You have successfully Subscribed for the Price Drop Alert Service.');
        }
        }
        else if(mode==2||mode==3)
        {
           $d('#ptemailverify').removeClass('displaynone');
            $d("#pt-emailotp").removeClass('displaynone');
              $d('#ptemailverify').addClass('displayinline');
            $d("#pt-emailotp").addClass('displayinline');
            $d('.pt-emailcheck').attr('src','data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
              $d("#pt-email").val(email);
                        $d("#pterrormsg").attr('style','color:#4CAF50;');
        $d("#pterrormsg").text('You have successfully Subscribed for the Price Drop Alert Service.');
          $d("#pterrormsg1").text('Please Verify the OTPs(One Time Password).');
        }
         $d('.pt-submitload').removeClass('pt-submitting');
         $d("#submitptpricedrop").attr('style','display:inline-block;');
            $d("#submitptpricedrop").attr('value','Modify Price Drop Alert Data');
      $d("#ptalready").text('You are now Tracking/Watching Price of this product. You can Modify or Unsubscribe Price Tracking.');
        $d("#unsubscribeptpricedrop").show();

    // alert(response.output);
      });
   //sendMessage(0, jsonArr, 0, setTabID, passBack);
 }
 function setPriceDropUnsubscribe()
 {
     $d("#pterrormsg").text('');
        $d("#pterrormsg1").text('');
    $d('#unsubscribeptpricedrop').attr("style","display: none;");
      $d('.pt-unsubmitload').addClass('pt-unsubmitting');
   var prodid=$d("#pt-pricedropbyvaleset").attr('pid');
    var store=$d("#pt-pricedropbyvaleset").attr('store');
       chrome.runtime.sendMessage({
        requestMode: 'unsetpricedrop',prodid:prodid,store:store
    }, function (response) {
      var datas = JSON.parse(response.output);
     var ptunsub=parseInt(datas.ptunsub);
     if(ptunsub==1)
     {
       $d('#unsubscribeptpricedrop').addClass('displaynone');
         $d("#pt-pricebutton").attr('src','https://assets.indiadesire.com/extn/images/pricedropbutton.png');
      $d("#submitptpricedrop").attr('value','Subscribe for Price Drop Alert');
      $d("#ptalready").text('');
      $d("#pterrormsg1").text('You have Unsubscribed for Price Drop Alert of this Product.');
     }
      $d('.pt-unsubmitload').removeClass('pt-unsubmitting');
     //alert(response.output);
      });
 }
  function verifyMobileOtp()
 {
    $d('#ptmobileverify').removeClass('displayinline');
       $d('#ptmobileverify').addClass('displaynone');
      $d('.pt-mobileload').addClass('pt-loading');
       $d("#pterrormsg").text('');
        $d("#pterrormsg1").text('');
       /* setTimeout(function () {
        $('.pt-mobileload').removeClass('pt-loading');
        $('#ptmobileverify').show();

      }, 5000);*/
           var vdata=$d("#pt-mobilenootp").val();

     $d("#pterrormsg").attr('style','color:red;');
      $d("#pterrormsg").text('Mobile SMS Feature is not launched in your country yet. Please Use Email Subscription in mean time');
 }
   function verifyEmailOtp()
 {
    $d('#ptemailverify').removeClass('displayinline');
     $d('#ptemailverify').addClass('displaynone');
      $d('.pt-emailload').addClass('pt-loading');
         $d("#pterrormsg").text('');
        $d("#pterrormsg1").text('');
       /* setTimeout(function () {
        $('.pt-emailload').removeClass('pt-loading');
        $('#ptemailverify').show();

      }, 5000);*/
            var vdata=$d("#pt-emailotp").val();
         chrome.runtime.sendMessage({
        requestMode: 'verifyemail',data:vdata
    }, function (response) {

       var datas = JSON.parse(response.output);
     var stat=parseInt(datas.ptemail);
     if(stat==1)
     {
       $d('#ptemailverify').removeClass('displayinline');
            $d("#pt-emailotp").removeClass('displayinline');
            $d('#ptemailverify').addClass('displaynone');
            $d("#pt-emailotp").addClass('displaynone');
         $d('.pt-emailload').removeClass('pt-loading');
         $d('.pt-emailcheck').attr('src','https://assets.indiadesire.com/extn/images/ptcheckmark.png');
         $d("#pterrormsg").attr('style','color:#4CAF50;');
          $d("#pterrormsg").text('You have succcessfully verified your Email.');
     }
      else
     {
       $d("#pterrormsg").attr('style','color:red;');
      $d("#pterrormsg").text('You have entered Incorrect Email OTP.');
        $d('.pt-emailload').removeClass('pt-loading');
        $d('#ptemailverify').addClass('displayinline');

     }
      });
 }
 function returnResource(name){
  return chrome.extension.getURL(name);
}
