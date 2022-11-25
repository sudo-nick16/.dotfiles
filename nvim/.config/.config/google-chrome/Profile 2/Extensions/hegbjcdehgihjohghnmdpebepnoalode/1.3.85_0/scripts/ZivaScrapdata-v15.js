document.querySelector("body").addEventListener('click', function(e) {
  var anchor = e.target.closest('a');
  if(anchor !== null) {
    //  console.log("click event fired anchor");
window.setTimeout(sendPairsZi, 1000);
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

 window.setTimeout(sendPairsZi, 1000);
function getsiteName()
{
  
        return "Zivame";
}

function sendPairsZi() {
    arrayToSend = [];
    var title;
    var imgurl;
     var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('div.product-page')
        .length > 0) {
        var price;
        var PID=window.location.href;
       
            PID = PID.split(".com/")[1].split(".html")[0] + ".html";
                cPID=PID;
            price = parseInt(filter_price($s('div.product-page div.prd-mprice').text()));
            cPrice=price;
            title=$s('div.product-page div#product-meta-data').attr('data-productname');
            cTitle=title;
                imgurl=$s('div.product-page #prd-main-image').attr('src');
                    console.log(PID+":"+price);
                     //arrayToSend.push([PID,title,imgurl, price]);
            if (PID && price) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price,0]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('div#products .category-product')
        .length > 0) {
        var slider = $s('div#products .category-product');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div#products .category-product:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('div#products .category-product:eq(' + i + ') .image-wrapper .pos-relative a')
                .attr('href');
                PID=PID.split("/")[1].split(".html")[0] + ".html";
                 imgurl= $s('div#products .category-product:eq(' + i + ') .image-wrapper .pos-relative a').find('img')
                    .attr('data-small');
                     title= $s('div#products .category-product:eq(' + i + ') .product-details .pd-info:eq(0) a p').text();
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div#products .category-product:eq(' + i + ') .product-details .pd-info:eq(0) .new-price.pink')
                .length > 0) {
                    price = $s('div#products .category-product:eq(' + i + ') .product-details .pd-info:eq(0) .new-price.pink')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
                }
                
            } else {
                price = "";
            }
            console.log(PID+":"+price);
                // price=filter_price(price);
            if (PID != "" && price != "") {
           arrayToSend.push([PID,title,imgurl, filter_price(price),0]);
            }

        } // for ends

    }
    
    //product carasuel
     if ($s('div.prd-rec-img-box')
        .length > 0) {
        var slider = $s('div.prd-rec-img-box');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.prd-rec-img-box:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('div.prd-rec-img-box:eq(' + i + ') a')
                .attr('href');
                PID=PID.split("/")[1].split(".html")[0] + ".html";
                 imgurl= $s('div.prd-rec-img-box:eq(' + i + ') a').find('img')
                    .attr('src');
                     title= $s('div.prd-rec-img-box:eq(' + i + ') a').find('img')
                    .attr('alt');
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.prd-rec-img-box:eq(' + i + ') .product-details .new-price.pink')
                .length > 0) {
                    price = $s('div.prd-rec-img-box:eq(' + i + ') .product-details .new-price.pink')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
                }
                
            } else {
                price = "";
            }
                  //filter_price(price)
            if (PID != "" && price != "") {
           arrayToSend.push([PID,title,imgurl, filter_price(price),0]);
            }

        } // for ends

    }
    
    console.log(arrayToSend.length);

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsZi, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("zivame Final Price"+arrayToSend);
         chrome.runtime.sendMessage({
        sksmode: "zivame",
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
    selector.push({selector: '.main-sec:eq(1)', attr: 'none', pos: 'after'});
     selector.push({selector: '#product-rec:eq(0)', attr: 'none', pos: 'before'});
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
    var passBack1 = [{title: prod, siteName: 'Zivame', price: pr, store:'zivame',currency:'INR',ccode:'Rs.'}];
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
    selector.push({selector: '.prd-name-box:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Zivame', price: pr, store:'zivame',pid:prodid,color:'#ee5786'}];
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
  pr = pr.split(",").join("").trim();
  pr=pr.replace(/\,/g,'')
  pr = Number(pr);
    if(isNaN(pr)){
      price = 0;
    }
  return pr;

}