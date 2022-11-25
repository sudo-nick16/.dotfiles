
document.querySelector("body").addEventListener('click', function(e) {
  var anchor = e.target.closest('.a-native-dropdown');
  if(anchor !== null) {
    //  console.log("click event fired anchor");
window.setTimeout(sendPairsAz, 5000);
  }
  var anchor1 = e.target.closest('.a-button-inner button.a-button-text');
  if(anchor1 !== null) {
    //  console.log("click event fired anchor");
window.setTimeout(sendPairsAz, 15000);
  }
}, false);
$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
iii =0;
switch (site) {
  case "www.amazon.cn":
    window.setTimeout(sendPairsAz(',','','Amazon.cn','amazoncn','YEN','￥'), 5000);
    break;
    case "www.amazon.fr":
    window.setTimeout(sendPairsAz(',','.','Amazon.fr','amazonfr','EUR','€'), 5000);
    break;
     case "www.amazon.com":
    window.setTimeout(sendPairsAz(',','','Amazon US','amazonus','USD','$'), 5000);
    break;
  case "www.amazon.co.uk":
    window.setTimeout(sendPairsAz(',','','Amazon UK','amazonuk','GBP','£'), 5000);
    break;
    case "www.amazon.es":
    window.setTimeout(sendPairsAz(',','.','Amazon.es','amazones','EUR','€'), 5000);
    break;
  
    case "www.amazon.com.mx":
    window.setTimeout(sendPairsAz(',','','Amazon Mexico','amazonmx','USD','$'), 5000);
    break;
    case "www.amazon.co.jp":
    window.setTimeout(sendPairsAz(',','','Amazon Japan','amazonjp','YEN','￥'), 5000);
    break;
}
abh = window.location.href.split('?')[0];

 

function getPrice()
{
  var currentPrice = $s("#priceblock_ourprice")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
    if (!currentPrice) currentPrice = $s("#priceblock_saleprice")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
    if (!currentPrice) currentPrice = $s(".a-color-price")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
        return currentPrice;
}
function getTitle()
{
  var title=$s("#productTitle")
        .text();
        return title;
}
function getsiteName()
{
  var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
  switch (site) {
     case "www.amazon.cn":
        return "Amazon.cn";
      //break;
      case "www.amazon.fr":
        return "Amazon.fr";
        case "www.amazon.com":
        return "Amazon US";
      case "www.amazon.co.uk":
        return "Amazon UK";
          case "www.amazon.es":
        return "Amazon.es";
        case "www.amazon.com.mx":
        return "Amazon Mexico";
            case "www.amazon.co.jp":
        return "Amazon Japan";
     // break;
  }
}
function sendPairsAz(a,b,c,d,e,f) {
    var arrayToSend = [];
      var title;
    var imgurl;
      var cPrice=0;
var cTitle="";
var cPID="";
    PID = window.location.href;
    PID = PID.split("?")[0];
    PID = PID.split("/ref=")[0];
    PID = PID.split("/");
    PID2 = PID[PID.length - 1];
    PID1 = PID[PID.length - 2];
    if (PID2 == "") {
        PID = PID1;
    } else {
        PID = PID2;
    }
    cPID=PID;
    title=$s("#productTitle")
        .text();
        cTitle=title;
        if($s("#imgTagWrapperId")
        .length > 0)
        {
    imgurl=$s("#imgTagWrapperId").find('img').attr('src');
   // imgurl=imgurl+"._SY100_.jpg";
    //imgurl=imgurl.replace("http://ecx.","https://images-na.ssl-");
        }
         if($s("#landingImage")
        .length > 0)
        {
    imgurl=$s("#landingImage").attr('src');
    //imgurl=imgurl+"._SY100_.jpg";
    //imgurl=imgurl.replace("http://ecx.","https://images-na.ssl-");
        }
           if($s("#imageBlock")
        .length > 0)
        {
    imgurl=$s("#imageBlock").find('img:eq(0)').attr('src');
    //imgurl=imgurl+"._SY100_.jpg";
    //imgurl=imgurl.replace("http://ecx.","https://images-na.ssl-");
        }
    currentPrice = $s("#priceblock_ourprice")
        .text()
        .trim()
        .replace(a, b);
    if ( $s("#priceblock_saleprice").length>0) currentPrice = $s("#priceblock_saleprice")
        .text()
        .trim()
        .replace(a, b);
    if ($s("#priceblock_dealprice").length>0) currentPrice = $s("#priceblock_dealprice")
        .text()
        .trim()
       .replace(a, b);
       // console.log("price log:"+currentPrice);
        if(!currentPrice)
        {
          if ($s("#centerCol .a-color-base").length>0) currentPrice = $s("#centerCol .a-color-base .a-color-price:eq(0)")
        
        .text()
        .trim()
       .replace(a, b);
        }
        if(!currentPrice)
        {
           if ($s("#centerCol span.a-color-price").length>0) currentPrice = $s("#centerCol span.a-color-price")
        
        .text()
        .trim()
       .replace(a, b);
        if($s('#centerCol span.a-color-price').prev('a').text().split("used")
                            .length>1 || $s('#centerCol span.a-color-price').prev('a').text().split("Used")
                            .length>1)
        currentPrice="";
        }
        currentPrice=filter_price(currentPrice);
       currentPrice= Math.round(currentPrice);
        cPrice=currentPrice;
        //console.log("price log after base:"+currentPrice);
    if (currentPrice&&(PID.length==10)) arrayToSend.push([PID,title,imgurl,currentPrice]);
    
    
   if ($s('.a-carousel')
        .length > 0) {
        var slider = $s('.a-carousel li');
        var sliderLength = slider.length;
        var link;
        var price;
        var title;
        var imgurl;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.a-carousel li:eq(' + i + ') a')
                .length > 0) {
                link = $s('.a-carousel li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                    title=$s('.a-carousel li:eq(' + i + ') a:eq(0)').find("img")
                    .attr('alt');
                     imgurl=$s('.a-carousel li:eq(' + i + ') a:eq(0)').find("img")
                    .attr('src');
                    //imgurl=imgurl.split("._AC")[0];
                    //imgurl=imgurl.replace("http://ecx.","https://images-na.ssl-");
                    //imgurl=imgurl+"._SY100_.jpg";
                if (link && link != "") {
                    // console.log(link);
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }

                if (PID != "") {
                    if ($s('.a-carousel li:eq(' + i + ')')
                        .find('.price')
                        .length > 0) {
                        price = $s('.a-carousel li:eq(' + i + ')')
                            .find('.price:eq(0)')
                            .text();
                        
                    } else if ($s('.a-carousel li:eq(' + i + ')')
                        .find('.a-color-price')
                        .length > 0) {
                        price = $s('.a-carousel li:eq(' + i + ')')
                            .find('.a-color-price:eq(0)')
                            .text();
                       
                    }
                    if(price.split("-")
                            .length > 1)
                    price="";
                    //console.log("Price now:"+price);

                } else {
                    price = "";
                }
            
                price = price.replace(a,b);
                 price=filter_price(price);
       price= Math.round(price);
 if ($s('.a-carousel li:eq(' + i + ') a:eq(0) .widget-junglee_badge span')
                .length > 0) {
  var used=$s('.a-carousel li:eq(' + i + ') a:eq(0) .widget-junglee_badge span').text();
   // console.log("Used PID Removed:"+PID);
  if(used=="USED")
  {
  
    PID="";
    price="";
  }
 }
                if (isNaN(price) == true) {
                    price = "";
                }
                if (PID != "" && price != "") {
                    if(PID.length == 10) arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } // for ends

    } //1st if ends
     if ($s('.s-result-item')
        .find('.a-color-price')
        .length > 0) {

        var link;
        var price;
        var imgurl;
        var title;
        var count = 0;
        var PID;
// ok to be used
        for (j = 0; j < ($s('.s-result-item')
                .length); j++) {
            var slider = $s('.s-result-item:eq(' + j + ')')
                .find('.a-color-price');
            var sliderLength = slider.length;
            for (i = 0; i < sliderLength; i++) {
                price = "";
                PID = "";
                if ($s('.s-result-item:eq(' + j + ')')
                    .find('.a-color-price:eq(' + i + ')')
                    .length > 0) {
                    link = $s('.s-result-item:eq(' + j + ')')
                        .find('.a-color-price:eq(' + i + ')')
                        .parent()
                        .attr('href');
                      imgurl=$s('.s-result-item:eq(' + j + ')').find("img").attr("src");
                      title=$s('.s-result-item:eq(' + j + ')').find("h2").attr("data-attribute");
                    if (link != "" && link != undefined) {
                        if (link.split("/offer-listing/")
                            .length > 1) {
                            link = link.split("/offer-listing/")[1];
                            if (link.split("/")
                                .length > 1) {
                                link = link.split("/");
                                PID = link[0];
                            } else {
                                PID = link;
                            }
                            if (PID.split("?")
                                .length > 1) {
                                PID = PID.split("?");
                                PID = PID[0];
                            }
                            if (PID.split("#")
                                .length > 1) {
                                PID = PID.split("#");
                                PID = PID[0];
                            }

                        } else if (link.split("/dp/")
                            .length > 1) {
                            link = link.split("/dp/")[1];
                            if (link.split("/")
                                .length > 1) {
                                link = link.split("/");
                                PID = link[0];
                            } else {
                                PID = link;
                            }
                            if (PID.split("?")
                                .length > 1) {
                                PID = PID.split("?");
                                PID = PID[0];
                            }
                            if (PID.split("#")
                                .length > 1) {
                                PID = PID.split("#");
                                PID = PID[0];
                            }

                        } else if (link.split("/product/")
                            .length > 1) {
                            link = link.split("/product/")[1];
                            if (link.split("/")
                                .length > 1) {
                                link = link.split("/");
                                PID = link[0];
                            } else {
                                PID = link;
                            }
                            if (PID.split("?")
                                .length > 1) {
                                PID = PID.split("?");
                                PID = PID[0];
                            }
                            if (PID.split("#")
                                .length > 1) {
                                PID = PID.split("#");
                                PID = PID[0];
                            }

                        } else {
                            PID = "";
                        }
                    } else {
                        PID = "";
                    }
                }
                if (PID != "" && PID != undefined) {

                    if ($s('.s-result-item:eq(' + j + ')')
                        .find('.a-color-price:eq(' + i + ')')
                        .length > 0) {
                        price = $s('.s-result-item:eq(' + j + ')')
                            .find('.a-color-price:eq(' + i + ')')
                            .text();
                        if (price.split("from")
                            .length > 1) {
                            price = price.split("from");
                            price = price[1].trim();
                        }
                        
                               if(price.split("-")
                            .length > 1)
                    price="";
                    //console.log("Price now:"+price);
                    }
                } else {
                    price = "";
                }
                price = price.replace(a,b);
                 price=filter_price(price);
       price= Math.round(price);
                if (isNaN(price) == true) {
                    price = "";
                }


                 // if(count != 0 && (arrayToSend[count - 1][0] == PID) ){
                if (PID != "" && price != "" && PID != undefined && price != undefined) {
                    if (count != 0 && (arrayToSend[count - 1][0] == PID)) {
                        if (price < arrayToSend[count - 1][1]) {
                            arrayToSend[count - 1][1] = price;
                        }
                    } else {
                        if(PID.length == 10) arrayToSend.push([PID,title,imgurl, price]);
                        count = count + 1;
                    }
                }
                // }

                // //////console.log("count: "+count);
                // //////console.log("array: "+arrayToSend[count-1]);


            } // for ends
        }
        //////console.log(arrayToSend);

    }
    if (arrayToSend.length == 0) 
{ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsAz(a,b,c,d,e,f) , 5000);}
//console.log("Amazon Final Before Price"+arrayToSend);
    arrayToSend = JSON.stringify(arrayToSend);
    //   console.log("Amazon Final Price"+arrayToSend);
    
    chrome.runtime.sendMessage({
        sksmode: d,
        pairs: arrayToSend
    }, function (response) {
     
      });
       if(cPID.length!=0&&cPrice!=0)
      {
         var rheight="";
       // addPriceDropButtonG(cPID,cTitle,cPrice,d,f);
   // plotFlipGraph(cPID,cTitle,cPrice,c,d,e,f);
    }
}
function plotFlipGraph(prodid,title,price,c,d,e,f){
  //console.log("before graph: "+$s("#containerMainPTID").length);
  $s("#containerMainPTID").remove();
  // console.log("after graph: "+$s("#containerMainPTID").length);
  if($s("#containerMainPTID").length == 0){
    // prod = getProd();
    // selectedFlag = 1;
   // var rheight=0;
    var rheight="";
    if($s('#hqpWrapper').length>0)
    {
    rheight=""+$s('#hqpWrapper').height();
    rheight=rheight.split('.')[0];
    }
    else
    rheight='0';
    var lheight="";
    if($s('#leftCol').length>0)
    {
     lheight=""+$s('#leftCol').height();
    
   lheight=lheight.split('.')[0];
    }
    else
    lheight='0';
     var fheight="";
    if($s('#feature-bullets').length>0)
    {
    fheight=""+$s('#feature-bullets').height();
    fheight=rheight.split('.')[0];
    }
    else
    fheight='0';
    var mheight="";
    if($s('#centerCol').length>0)
    {
       mheight=""+$s('#centerCol').height();
    
   mheight=mheight.split('.')[0];
    }
  // console.log("wrapper:"+rheight+"left:"+lheight+"middle:"+mheight);
    var pidFlipkart =prodid;
    var prod = title;
    var pr=price;
    var selector = [];
    //console.log("height:"+rheight);
       selector.push({selector: '#leftCol', attr: 'current', pos: 'append'});
      //  selector.push({selector: '#olpTabContent', attr: 'none', pos: 'before'});
    /*
    selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1GRhLX:eq(0)', attr: 'none', pos: 'after'});*/
    selector = JSON.stringify(selector);
    height = "1050px";
    var passBack = [{selectors: selector, height: height}];
    var heightc=0;
        mheight=parseInt(mheight);
    lheight=parseInt(lheight);
     rheight=parseInt(rheight);
    fheight=parseInt(fheight);
    if(mheight<lheight)
    heightc=(parseInt(lheight)-parseInt(mheight))+50;
    else
    heightc=(parseInt(mheight)-parseInt(lheight))+parseInt(rheight)+parseInt(fheight)+50;
    //console.log("h:"+heightc);
    var impposcssdata='margin-top:'+heightc+'px!important;margin-left:30%!important';
    passBack = JSON.stringify(passBack);
    addGraphBaseG(passBack,impposcssdata);
    var passBack1 = [{title: prod, siteName:c, price: pr, store:d,currency:e,ccode:f}];
    passBack1 = JSON.stringify(passBack1);
    //console.log("Graph Preparation:"+passBack1);
    prepareGraphG(pidFlipkart, passBack1);
/*
  var affRules = []; // Deals
  affRules.push({prePart: '', postPart: '&affid=abc&affExtParam1=dealZone'});
  affRules = JSON.stringify(affRules);
  command = 2;
  var passBack2 = [{catName: 'this category', affRules: affRules, command: command}];
  passBack2 = JSON.stringify(passBack2);
  var command = 2;
  prepareDeals(pidFlipkart, passBack2, command);*/
}
}
function addPriceDropButtonG(prodid,title,price,d,f){
  //console.log("before graph: "+$s("#containerMainPTID").length);
  $s("#containerMainPTDropB").remove();
  // console.log("after graph: "+$s("#containerMainPTID").length);
  if($s("#containerMainPTDropB").length == 0){
    // prod = getProd();
    // selectedFlag = 1;
    var pidFlipkart =prodid;
    var prod = title;
    prod=prod.replace("\n","");
    var pr=price;
    var selector = [];
    var pwidth=0;
if($s('._2Cl4hZ:eq(0)').length>0)
pwidth=$s('body').width();
//console.log("width"+pwidth+"final:"+(pwidth-512));
pwidth=pwidth-512;

    /*selector.push({selector: '._2ixwsm', attr: 'none', pos: 'before'});
    selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});*/
    selector.push({selector: '#unifiedPrice_feature_div:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '#price_feature_div:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Amazon', price: pr, store:d,pid:prodid,color:'#111',currency:f}];
        passBack1 = JSON.stringify(passBack1);
    addPriceDropBaseG(passBack,impposcssdata,passBack1);




}
}

function filter_price(pr) {
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
    if (pr.split("EUR")
        .length > 1) {
        pr = pr.split("EUR")[1];
    }
    if (pr.split("£")
        .length > 1) {
        pr = pr.split("£")[1];
    }
    if (pr.split("`")
        .length > 1) {
        pr = pr.split("`")[1];
    }
    if (pr.split("$")
        .length > 1) {
        pr = pr.split("$")[1];
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
        if (pr.split("￥")
        .length > 1) {
        pr = pr.split("￥")[1].trim();
    }
    pr = pr.split(",")
        .join("")
        .trim();
    pr = parseFloat(pr);
    return pr;
}
