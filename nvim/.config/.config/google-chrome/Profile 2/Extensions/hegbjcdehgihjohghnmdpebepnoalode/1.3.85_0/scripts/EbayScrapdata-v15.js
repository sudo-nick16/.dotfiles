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

 window.setTimeout(sendPairsEb, 5000);
function getsiteName()
{
  
        return "Ebay";
}

function sendPairsEb() {
    arrayToSend = [];
    var title;
    var imgurl;
     var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('div#CenterPanel #CenterPanelInternal')
        .length > 0) {
        //var slider = $s('div.product-tuple-listing');
        //var sliderLength = slider.length;
        var price;
        var PID=window.location.href;
       
            PID = PID.split("?")[0].split("#")[0].split("/itm/")[1].split("/")[1];
            if(PID==null)
               {
                PID=window.location.href;
       
            PID = PID.split("?")[0].split("#")[0].split("/itm/")[1];
               }
                cPID=PID;
               
            price = parseInt(filter_price($s('div#CenterPanel .actPanel .vi-price span#prcIsum')
                .text()
                .replace(',', '')));
            cPrice=price;
            title=$s('div#CenterPanel h1#itemTitle').clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text().trim();
            cTitle=title;
                imgurl=$s('div#CenterPanel div#PicturePanel div#mainImgHldr img#icImg')
                    .attr('src');
                    console.log(PID+":"+price);
                  // arrayToSend.push([PID,title,imgurl, price]);
           if (PID && price) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('li.sresult.lvresult')
        .length > 0) {
        var slider = $s('li.sresult.lvresult');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('li.sresult.lvresult:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('li.sresult.lvresult:eq(' + i + ') h3.lvtitle a')
                .attr('href');
                PID=PID.split("?")[0].split("#")[0].split("/itm/")[1].split("/")[1];
                 imgurl= $s('li.sresult.lvresult:eq(' + i + ') div.lvpic.pic.img').find('img')
                    .attr('src');
                     title= $s('li.sresult.lvresult:eq(' + i + ') h3.lvtitle a').clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text().trim();
                    
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('li.sresult.lvresult:eq(' + i + ') ul.lvprices .lvprice span')
                .length > 0) {
                    price = $s('li.sresult.lvresult:eq(' + i + ') ul.lvprices li.lvprice span')
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
                 if (PID!=null &&PID != "" && price != "") {
           arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
    
    //recently view
        if ($s('div.itemThumb')
        .length > 0) {
        var slider = $s('div.itemThumb');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.itemThumb:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('div.itemThumb:eq(' + i + ') .detail-wrapper .item-wrapper div.itemImg a')
                .attr('href');
                PID=PID.split("?")[0].split("#")[0].split("/itm/")[1].split("/")[1];
                 imgurl= $s('div.itemThumb:eq(' + i + ') .detail-wrapper .item-wrapper div.itemImg a').find('img')
                    .attr('src');
                     title= $s('div.itemThumb:eq(' + i + ') .detail-wrapper .itemTooltip .itemInfoContainer .titleText a').clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text().trim();
                    
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.itemThumb:eq(' + i + ') .detail-wrapper .itemTooltip .itemPrice a')
                .length > 0) {
                    price = $s('div.itemThumb:eq(' + i + ') .detail-wrapper .itemTooltip .itemPrice a')
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
               if (PID!=null &&PID != "" && price != "") {
           arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
            if ($s('div.itm')
        .length > 0) {
        var slider = $s('div.itm');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.itm:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('div.itm:eq(' + i + ') div.itm_cont span.imgt a')
                .attr('href');
                PID=PID.split("?")[0].split("#")[0].split("/itm/")[1];
                 imgurl= $s('div.itm:eq(' + i + ') div.itm_cont span.imgt a').find('img')
                    .attr('src');
                     title= $s('div.itm:eq(' + i + ') div.itemttl a').clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text().trim();
                    
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.itm:eq(' + i + ') div.itemttl div .discount')
                .length > 0) {
                    price = $s('div.itm:eq(' + i + ') div.itemttl div .discount')
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
                  
            if (PID!=null &&PID != "" && price != "") {
           arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
    //deals page
             if ($s('div.refit-itemcard')
        .length > 0) {
        var slider = $s('div.refit-itemcard');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.refit-itemcard:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('div.refit-itemcard:eq(' + i + ') div.refit-itemcard-imagewrapper a')
                .attr('href');
                PID=PID.split("?")[0].split("#")[0].split("/itm/")[1].split("/")[1];
                 imgurl= $s('div.refit-itemcard:eq(' + i + ') div.refit-itemcard-imagewrapper a').find('img')
                    .attr('src');
                     title= $s('div.refit-itemcard:eq(' + i + ') div.refit-itemcard-detail h3.refit-itemcard-title a span').clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text().trim();
                    
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.refit-itemcard:eq(' + i + ') div.refit-itemcard-detail .refit-itemcard-price span.first')
                .length > 0) {
                    price = $s('div.refit-itemcard:eq(' + i + ') div.refit-itemcard-detail .refit-itemcard-price span.first')
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
                  
            if (PID!=null &&PID != "" && price != "") {
           arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
    console.log(arrayToSend.length);

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsEb, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("Ebay Final Price"+arrayToSend);
 if((cPID != undefined) && cPID.length!=0 && cPrice!=0)
      {
         if(!isNaN(parseInt(cPrice)))
          addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
    }
   
    chrome.runtime.sendMessage({
        sksmode: "ebay",
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
    selector.push({selector: '#CenterPanel:eq(0)', attr: 'none', pos: 'after'});
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
    var passBack1 = [{title: prod, siteName: 'Ebay', price: pr, store:'ebay',currency:'INR',ccode:'Rs.'}];
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
    selector.push({selector: '#itemInfoLabel:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Ebay', price: pr, store:'ebay',pid:prodid,color:'#0064d2'}];
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