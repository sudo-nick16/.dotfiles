$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
iii =0;
abh = window.location.href.split('?')[0];

    window.setTimeout(sendPairsSnap, 1000);
     function getPrice()
{
  var    currentPrice = parseInt($s('#productOverview .payBlkBig')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
        return currentPrice;
}
function getTitle()
{
  var    title=$s('#productOverview h1').attr('title');
        return title;
}
function getsiteName()
{
  
        return "Snapdeal";
}
function sendPairsSnap() {
    arrayToSend = [];
    var title;
    var imgurl;
       var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('#productOverview')
        .length > 0) {
        //var slider = $s('div.product-tuple-listing');
        //var sliderLength = slider.length;
        var price;
        var PID=window.location.href;
       var current_status=0;
       var pantrystat=0;
            PID = parseInt(PID
                .split("?")[0].split("#")[0].split("/")
                .slice(-1)[0]);
           var PID1=PID+"";
            cPID=PID1;
            price = parseInt($s('#productOverview .payBlkBig')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            cPrice=price;
            title=$s('#productOverview h1').attr('title');
            cTitle=title;
                imgurl=$s('#productOverview ul#bx-slider-left-image-panel li:eq(0)').find('img')
                    .attr('src');
                    var selllername=$s('#productOverview a.pdp-e-seller-info-name').text();
            if (PID1 && price) {
                if (PID1.length > 0 && price > 0) {
                    arrayToSend.push([PID1,title,imgurl, price,current_status,selllername,pantrystat]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('.product-card')
        .length > 0) {
        var slider = $s('.product-card');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.product-card:eq(' + i + ')')
                .length > 0) {
              if($s('.product-card:eq(' + i + ')')
                .attr('pogid'))
              PID=$s('.product-card:eq(' + i + ')')
                .attr('pogid');
                else
               PID = $s('.product-card:eq(' + i + ')')
                .attr('pog');
                if($s('.product-card:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('.product-card:eq(' + i + ') .product-img').find('img')
                    .attr('data-src');
                    else
                    imgurl= $s('.product-card:eq(' + i + ') .product-img').find('img')
                    .attr('src');
                     title= $s('.product-card:eq(' + i + ') .product_name')
                    .text();
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('.product-card:eq(' + i + ') .product_price .mrp')
                .length > 0) {
                    price = $s('.product-card:eq(' + i + ') .product_price .mrp')
                        .text();
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
    if ($s('div.cardProd')
        .length > 0) {
        var slider = $s('div.cardProd');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = "";
            price = "";
            PID = $s('div.cardProd:eq(' + i + ') .eventTuple')
                .attr('pogid');
            price = parseInt($s('div.cardProd:eq(' + i + ') .cardProd_price_actl')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
    } //1st if ends
    if ($s('div.product-tuple-listing')
        .length > 0) {
        var slider = $s('div.product-tuple-listing');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = "";
            price = "";
            PID = $s('div.product-tuple-listing:eq(' + i + ')')
                .attr('id');
                title=$s('div.product-tuple-listing:eq(' + i + ') .product-title').attr('title');
               if($s('div.product-tuple-listing:eq(' + i + ')').find('img').attr('data-src'))
                 imgurl= $s('div.product-tuple-listing:eq(' + i + ')').find('img')
                    .attr('data-src');
                    else
                    imgurl= $s('div.product-tuple-listing:eq(' + i + ')').find('img')
                    .attr('src');
            price = parseInt($s('div.product-tuple-listing:eq(' + i + ') .product-price')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
    } //1st if ends 
    if ($s('li.recent-viewed-product')
        .length > 0) {
        var slider = $s('li.recent-viewed-product');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = $s('li.recent-viewed-product:eq(' + i + ') input')
                .attr('value');
            price = parseInt($s('li.recent-viewed-product:eq(' + i + ') .recentPrice')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
    }
    if ($s('li.OffersContentBoxLi')
        .length > 0) {
        var slider = $s('li.OffersContentBoxLi');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = $s('li.OffersContentBoxLi:eq(' + i + ')')
                .attr('id');
            price = parseInt($s('li.OffersContentBoxLi:eq(' + i + ') .OfferPrice_Price')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
    }
    /* duplicated
    if ($s('div.product-tuple-listing')
        .length > 0) {
        var slider = $s('div.product-tuple-listing');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = parseInt(($s('div.product-tuple-listing:eq(' + i + ') a')
                    .attr('href'))
                .split("?")[0].split("#")[0].split("/")
                .slice(-1)[0]);
            price = parseInt($s('div.product-tuple-listing:eq(' + i + ') .product-price')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                if (PID > 0 && price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
    } //1st if ends
    */
    console.log(arrayToSend.length);

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsSnap, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("Snapdeal Final Price"+arrayToSend);

    chrome.runtime.sendMessage({
        sksmode: "snapdeal",
        pairs: arrayToSend
    }, function (response) {});
      if(cPID.length!=0&&parseInt(cPrice)!=0)
      {
        
        if(!isNaN(parseInt(cPrice)))
         addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
    }
}
function plotFlipGraph(prodid,title,price){
  //console.log("before graph: "+$s("#containerMainPTID").length);
  $s("#containerMainPTID").remove();
  // console.log("after graph: "+$s("#containerMainPTID").length);
  if($s("#containerMainPTID").length == 0){
    // prod = getProd();
    // selectedFlag = 1;
    var pidFlipkart =prodid;
    var prod = title;
    var pr=price;
    var selector = [];
    selector.push({selector: '.pdp-section:eq(0)', attr: 'none', pos: 'after'});
    /*selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1GRhLX:eq(0)', attr: 'none', pos: 'after*'});*/
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
    addGraphBase(passBack,impposcssdata);
    var passBack1 = [{title: prod, siteName: 'Snapdeal', price: pr, store:'snapdeal',currency:'INR',ccode:'Rs.'}];
    passBack1 = JSON.stringify(passBack1);
    console.log("Graph Preparation:"+passBack1);
    prepareGraph(pidFlipkart, passBack1);

}
}
function addPriceDropButton(prodid,title,price){
  //console.log("before graph: "+$s("#containerMainPTID").length);
  $s("#containerMainPTDropB").remove();
  // console.log("after graph: "+$s("#containerMainPTID").length);
  if($s("#containerMainPTDropB").length == 0){
    // prod = getProd();
    // selectedFlag = 1;
    var pidFlipkart =prodid;
    var prod = title;
    var pr=price;
    var selector = [];
    var pwidth=0;
if($s('._2Cl4hZ:eq(0)').length>0)
pwidth=$s('body').width();
console.log("width"+pwidth+"final:"+(pwidth-512));
pwidth=pwidth-512;

    /*selector.push({selector: '._2ixwsm', attr: 'none', pos: 'before'});
    selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});*/
    selector.push({selector: '.disp-table:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Snapdeal', price: pr, store:'snapdeal',pid:prodid,color:'#e40046'}];
        passBack1 = JSON.stringify(passBack1);
    addPriceDropBase(passBack,impposcssdata,passBack1);




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
    pr = pr.split(",")
        .join("")
        .trim();
    pr = parseFloat(pr);
    return pr;
}
