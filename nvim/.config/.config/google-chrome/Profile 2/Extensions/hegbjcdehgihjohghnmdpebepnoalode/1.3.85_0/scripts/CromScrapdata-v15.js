/*document.querySelector("body").addEventListener('click', function(e) {
  var anchor = e.target.closest('a');
  if(anchor !== null) {
    //  console.log("click event fired anchor");
window.setTimeout(sendPairsPa, 5000);
  }
  else
  {
          console.log("");
  }
}, false);*/
$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;

iii =0;
abh = window.location.href.split('?')[0];

 window.setTimeout(sendPairsCr, 5000);
function getsiteName()
{
  
        return "Croma";
}

function sendPairsCr() {
    arrayToSend = [];
    var title;
    var imgurl;
     var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('div.productDetailsPanel')
        .length > 0) {
        //var slider = $s('div.product-tuple-listing');
        //var sliderLength = slider.length;
        var price;
        var PID=window.location.href;
       
            PID = PID.split("?")[0].split("#")[0].split("/p/")[1];
                cPID=PID;
            price = parseInt(filter_price($s('div.productDetailsPanel .cta h2')
             .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text().trim().replace(',', '')));
            cPrice=price;
            title=$s('div.productDetailsPanel .productDescriptionCss h1').text();
            cTitle=title;
                imgurl=$s('div.productDetailsPanel .productImage a.productImagePrimaryLink').find('img')
                    .attr('src');
                       if(imgurl.includes('//'))
                    imgurl=imgurl;
                    else
                     imgurl="http://www.croma.com"+imgurl; 
                    console.log(PID+":"+price);
                   //  arrayToSend.push([PID,title,imgurl, price]);
            if (PID && price) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('div.thumb')
        .length > 0) {
        var slider = $s('div.thumb');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength-1; i++) {
            price = "";
            PID = "";
            if ($s('div.thumb:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('div.thumb:eq(' + i + ') h2 a:eq(1)')
                .attr('href');
                PID=PID.split("?")[0].split("#")[0].split("/p/")[1];
                 imgurl= $s('div.thumb:eq(' + i + ') a').find('img')
                    .attr('src');
                  var imgurl1= $s('div.thumb:eq(' + i + ') a').find('img')
                    .attr('data-blzsrc');
                    if(imgurl1!=null)
                    {
                        if(imgurl1.includes('//'))
                    imgurl=imgurl1;
                    else
                     imgurl="http://www.croma.com"+imgurl1;
                    }
                    else
                    {
                        if(imgurl.includes('//'))
                    imgurl=imgurl;
                    else
                     imgurl="http://www.croma.com"+imgurl; 
                    }
                     title= $s('div.thumb:eq(' + i + ') h2 a:eq(1)').text().trim();
                    
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.thumb:eq(' + i + ') span h3')
                .length > 0) {
                    price = $s('div.thumb:eq(' + i + ') span h3')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text().trim();                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
                }
                
            } else {
                price = "";
            }
                  //filter_price(price)
                 
            if (PID != "" && price != "") {
            arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
    
    //recently view
    console.log(arrayToSend.length);

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsCr, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("croma Final Price"+arrayToSend);
 if((cPID != undefined) && cPID.length!=0 && cPrice!=0)
      {
         if(!isNaN(parseInt(cPrice)))
          addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
    }
   
    chrome.runtime.sendMessage({
        sksmode: "croma",
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
    selector.push({selector: '.productDetailsPanel:eq(0)', attr: 'none', pos: 'after'});
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
    var passBack1 = [{title: prod, siteName: 'Croma', price: pr, store:'croma',currency:'INR',ccode:'Rs.'}];
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
    selector.push({selector: '.cta h2:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Croma', price: pr, store:'croma',pid:prodid,color:'#46a8a2'}];
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