document.querySelector("body").addEventListener('click', function(e) {
  var anchor = e.target.closest('a');
  if(anchor !== null) {
    //  console.log("click event fired anchor");
window.setTimeout(sendPairsPa, 5000);
  }
  else
  {
          console.log("");
  }
}, false);
$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;

iii =0;
abh = window.location.href.split('?')[0];

 window.setTimeout(sendPairsPa, 5000);
      function getPrice()
{
  var    currentPrice = parseInt($s('.product-info .product-detail .price .sale')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
        return currentPrice;
}
function getTitle()
{
  var  title=$s('.product-info .product-detail .product-name').text();
        return title;
}
function getsiteName()
{
  
        return "Paytm";
}

function sendPairsPa() {
    arrayToSend = [];
    var title;
    var imgurl;
     var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('div.wS6K')
        .length > 0) {
        //var slider = $s('div.product-tuple-listing');
        //var sliderLength = slider.length;
        var price;
        var PID=window.location.href;
       
            PID = PID.split('.com/')[1].split('-pdp')[0];
            PID=PID+"-pdp";
                cPID=PID;
            price = $s('div.wS6K span._1V3w')
                .text()
                .replace('Buy For Rs  ', '')
                .replace(',', '');
                 price=filter_price(price);
            cPrice=price;
            title=$s('div.wS6K h1.NZJI:eq(0)').text().trim();
            cTitle=title;
                imgurl=$s('div.wS6K').find('img')
                    .attr('src');
                    console.log(PID+":"+price);
                   
            if (PID && price) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price,0]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('div._2i1r')
        .length > 0) {
        var slider = $s('div._2i1r');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div._2i1r:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('div._2i1r:eq(' + i + ') a')
                .attr('href');
                PID = PID.split('/')[1].split('-pdp')[0];
            PID=PID+"-pdp";
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('div._2i1r:eq(' + i + ')').find('img')
                    .attr('src');
                   
                     title= $s('div._2i1r:eq(' + i + ')').find('img')
                    .attr('alt');
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div._2i1r:eq(' + i + ') ._8vVO ._1kMS ')
                .length > 0) {
                    price = $s('div._2i1r:eq(' + i + ') ._8vVO ._1kMS')
                        .text();
                    price = price.replace(/[^\d.]/g, '')
                .replace(/^\./, '');
                }
            } else {
                price = "";
            }
             price=filter_price(price);
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, price,0]);
            }

        } // for ends

    }
    
    //recently viewed
    if ($s('._1_uk ._2TUX')
        .length > 0) {
        var slider = $s('._1_uk ._2TUX');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('._1_uk ._2TUX:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('._1_uk ._2TUX:eq(' + i + ') a')
                .attr('href');
                PID = PID.split('/')[1].split('-pdp')[0];
            PID=PID+"-pdp";
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('._1_uk ._2TUX:eq(' + i + ')').find('img')
                    .attr('src');
                   
                     title= $s('._1_uk ._2TUX:eq(' + i + ') a._2mza')
                    .text();
              
            }
           //console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('._1_uk ._2TUX:eq(' + i + ') ._2NXd ._3ZIv')
                .length > 0) {
                    price = $s('._1_uk ._2TUX:eq(' + i + ') ._2NXd ._3ZIv')
                        .text();
                    price = price.replace(/[^\d.]/g, '')
                .replace(/^\./, '').replace('Rs','');
                }
            } else {
                price = "";
            }
             price=filter_price(price);
            console.log('price :'+price);
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl,price,0]);
            }

        } // for ends

    }
    console.log(arrayToSend.length);

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsPa, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("paytm Final Price"+arrayToSend);
 if(cPID.length!=0&&cPrice!=0)
      {
      plotFlipGraph(cPID,cTitle,cPrice);
       addPriceDropButton(cPID,cTitle,cPrice);
    }
    chrome.runtime.sendMessage({
        sksmode: "paytm",
        pairs: arrayToSend
    }, function (response) {});
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
    selector.push({selector: '.bigContainer-pro:eq(0)', attr: 'none', pos: 'after'});
     selector.push({selector: 'div.wS6K:eq(0)', attr: 'none', pos: 'after'});
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
    var passBack1 = [{title: prod, siteName: 'Paytm', price: pr, store:'paytm',currency:'INR',ccode:'Rs.'}];
    passBack1 = JSON.stringify(passBack1);
    console.log("Graph Preparation:"+passBack1);
    prepareGraph(pidFlipkart, passBack1);
/*
  var affRules = []; // Deals
  affRules.push({prePart: '', postPart: '&affid=buyhatkegm&affExtParam1=dealZone'});
  affRules = JSON.stringify(affRules);
  command = 2;
  var passBack2 = [{catName: 'this category', affRules: affRules, command: command}];
  passBack2 = JSON.stringify(passBack2);
  var command = 2;
  prepareDeals(pidFlipkart, passBack2, command);*/
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
    selector.push({selector: 'div.wS6K div._3bvo:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Paytm', price: pr, store:'paytm',pid:prodid,color:'#ff6209'}];
        passBack1 = JSON.stringify(passBack1);
    addPriceDropBase(passBack,impposcssdata,passBack1);




}
}
 function filter_price(pr){
  pr = String(pr);
  if(pr.split("Rs.").length > 1){
    pr = pr.split("Rs.")[1];
  }
  if(pr.split("Rs").length > 1){
    pr = pr.split("Rs")[1];
  }
  if(pr.split("INR").length > 1){
    pr = pr.split("INR")[1];
  }
  if(pr.split("Inr").length > 1){
    pr = pr.split("Inr")[1];
  }
  if(pr.split("RS.").length > 1){
    pr = pr.split("RS.")[1];
  }
  if(pr.split("₹").length > 1){
    pr = pr.split("₹")[1];
  }
    if(pr.split("RS").length > 1){
    pr = pr.split("RS")[1];
  }
  if(pr.split("R").length > 1){
    pr = pr.split("R")[1];
  }
  if(pr.split("`").length > 1){
    pr = pr.split("`")[1];
  }
  if(pr.split("MRP").length > 1){
    pr = pr.split("MRP")[1];
  }
  if(pr.split("mrp").length > 1){
    pr = pr.split("mrp")[1];
  }
  if(pr.split("/").length > 1){
    pr = pr.split("/")[0];
  }
  if(pr.split("â‚¹").length > 1){
    pr = pr.split("â‚¹")[1].trim();
  }
  if(pr.split("à¤°").length > 1){
    pr = pr.split("à¤°")[1].trim();
  }
  pr = pr.split(",").join("").trim().replace(",","");
  pr=pr.replace(/\,/g,'')
  pr = Number(pr);
    if(isNaN(pr)){
      price = 0;
    }
  return pr;

}
