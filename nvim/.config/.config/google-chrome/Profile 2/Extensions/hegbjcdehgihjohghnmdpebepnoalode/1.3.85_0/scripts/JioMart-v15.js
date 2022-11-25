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

 window.setTimeout(sendPairsJa, 1000);
function getsiteName()
{

        return "JioMart";
}

function sendPairsJa() {
    arrayToSend = [];
    var title;
    var imgurl;
     var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('#product_details')
        .length > 0) {
        //var slider = $s('div.product-tuple-listing');
        //var sliderLength = slider.length;
        var price;
        var PID=window.location.href;

            PID = PID.split("/p/")[1].split("/")[2].split("?")[0];
                cPID=PID;
           price = parseInt(filter_price($s('#product_details #price_section .final-price').find('span').text().replace(',', '')));
            cPrice=price;
            title=$s('#product_details .title-section h1').text();
            cTitle=title;
                imgurl=$s('#product_details').find('img')
                    .attr('src');
                 // var imgdata=JSON.parse(imgurl);
                  //imgurl=imgdata['base_path']+imgdata['320'];
                    console.log(PID+":"+price);
                    // arrayToSend.push([PID,title,imgurl, price]);
           if (PID && price) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('.col-md-3')
        .length > 0) {
        var slider = $s('.col-md-3 div.cat-item');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.col-md-3 div.cat-item:eq(' + i + ')')
                .length > 0) {

              PID=$s('.col-md-3 div.cat-item:eq(' + i + ') a')
                .attr('href');
                PID=PID.split("/p/")[1].split("/")[2].split("?")[0];
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('.col-md-3 div.cat-item:eq(' + i + ') a').find('img')
                    .attr('src');
                  //var imgdata=JSON.parse(imgurl);
                  //imgurl=imgdata['base_path']+imgdata['320'];
                     title= $s('.col-md-3 div.cat-item:eq(' + i + ') .clsgetname').clone().children().remove().end().text();

            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('.col-md-3 div.cat-item:eq(' + i + ') #final_price')
                .length > 0) {
                    price = $s('.col-md-3 div.cat-item:eq(' + i + ') #final_price')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
                }
                else
                {
                           price = $s('.col-md-3 div.cat-item:eq(' + i + ') #final_price')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();
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

    //recommended
      if ($s('swiper-slide')
        .length > 0) {
        var slider = $s('.swiper-slide');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.swiper-slide:eq(' + i + ')')
                .length > 0) {

              PID=$s('.swiper-slide:eq(' + i + ') a')
                .attr('href');
                PID=PID.split("/p/")[1].split("/")[2].split("?")[0];
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('.swiper-slide:eq(' + i + ') a').find('img')
                    .attr('src');
                  //var imgdata=JSON.parse(imgurl);
                  //imgurl=imgdata['base_path']+imgdata['320'];
                     title= $s('.swiper-slide:eq(' + i + ') .clsgetname').clone().children().remove().end().text();

            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('.swiper-slide:eq(' + i + ') #final_price')
                .length > 0) {
                    price = $s('.swiper-slide:eq(' + i + ') #final_price')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
                }
                else
                {
                           price = $s('.swiper-slide:eq(' + i + ') #final_price')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();
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

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsJa, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("JioMart Final Price"+arrayToSend);
  if(cPID.length!=0&&parseInt(cPrice)!=0)
      {

        if(!isNaN(parseInt(cPrice)))
        addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
    }

    chrome.runtime.sendMessage({
        sksmode: "jiomart",
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
    selector.push({selector: '#product_details:eq(0)', attr: 'none', pos: 'after'});
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
    var passBack1 = [{title: prod, siteName: 'JioMart', price: pr, store:'jiomart',currency:'INR',ccode:'Rs.'}];
    passBack1 = JSON.stringify(passBack1);
    console.log("Graph Preparation:"+passBack1);
    prepareGraph(pidFlipkart, passBack1);

}
}
function addPriceDropButton(prodid,title,price){
  //console.log("before graph: "+$s("#containerMainPTID").length);
  $s("#containerMainPTDropB").remove();
   $s("#containerMainPTDropB1").remove();
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
    selector.push({selector: '#delivery_section:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'JioMart', price: pr, store:'jiomart',pid:prodid,color:'#008ecc'}];
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
      if (pr.split("₹")
        .length > 1) {
        pr = pr.split("₹")[1];
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
    pr=Math.round(pr);
    return pr;
}
