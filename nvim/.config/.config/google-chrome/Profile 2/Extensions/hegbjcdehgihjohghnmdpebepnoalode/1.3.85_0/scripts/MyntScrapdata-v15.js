document.querySelector("body").addEventListener('click', function(e) {

  var anchor1 = e.target.closest('label.common-customCheckbox');
  if(anchor1 !== null) {
    //  console.log("click event fired anchor");filter-dropdown
window.setTimeout(sendPairsMy, 5000);
  }
  var anchor2 = e.target.closest('label.sort-label');
  if(anchor2 !== null) {
    //  console.log("click event fired anchor");common-customRadio
window.setTimeout(sendPairsMy, 5000);
  }
  var anchor3 = e.target.closest('label.common-customRadio');
  if(anchor3 !== null) {
    //  console.log("click event fired anchor");common-customRadio
window.setTimeout(sendPairsMy, 5000);
  }
}, false);

$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;

iii =0;
abh = window.location.href.split('?')[0];

 window.setTimeout(sendPairsMy, 1000);
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

        return "Myntra";
}

function sendPairsMy() {
  $s = jQuery.noConflict();
    arrayToSend = [];
    var title;
    var imgurl;
     var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('.pdp-details')
        .length > 0) {
        //var slider = $s('div.product-tuple-listing');
        //var sliderLength = slider.length;
        var price;
        var PID=window.location.href;

            PID = PID.split('/buy')[0].split('/').reverse()[0];

                cPID=PID;
                 console.log("cpid:"+cPID);
             price = parseInt(filter_price($s('.pdp-discount-container span.pdp-price strong')
                .text()
                .replace(',', '')));
            cPrice=price;
            title=$s('.pdp-price-info .pdp-name').text();
            cTitle=title;
                imgurl=$s('.pdp-pdp-container .image-grid-image:eq(0)');
                    var img = $s('.pdp-pdp-container .image-grid-image:eq(0)').attr("style");
style = img.replace("background-image: url(\"","").replace("\");","");
bi = style.replace("background-image:url(\"","").replace("\");","");
                console.log(PID+":"+price);

            if (PID && price) {
                if (price > 0) {
                    arrayToSend.push([PID,title,bi, price]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('div.content .results-cnt')
        .length > 0) {
        var slider = $s('div.content .results-cnt ul.results li');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.content .results-cnt ul.results li:eq(' + i + ')')
                .length > 0) {

              PID=$s('div.content .results-cnt ul.results li:eq(' + i + ') a')
                .attr('href');
                PID=PID.split('/buy')[0].split('/').reverse()[0];
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('div.content .results-cnt ul.results li:eq(' + i + ') a').find('img')
                    .attr('_src');

                     title= $s('div.content .results-cnt ul.results li:eq(' + i + ') a').find('img')
                    .attr('alt');

            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.content .results-cnt ul.results li:eq(' + i + ') .price')
                .length > 0) {
                    price = $s('div.content .results-cnt ul.results li:eq(' + i + ') .price')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
    // Added for New Product tile on 06 July 2020
        if ($s('li.product-base')
        .length > 0) {
        var slider = $s('li.product-base');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('li.product-base:eq(' + i + ')')
                .length > 0) {

              PID=$s('li.product-base:eq(' + i + ') a')
                .attr('href');
                PID=PID.split('/buy')[0].split('/').reverse()[0];
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('li.product-base:eq(' + i + ') a').find('img')
                    .attr('src');

                     title= $s('li.product-base:eq(' + i + ') a').find('img')
                    .attr('alt');
                        if (title==null) {
	 title= $s('li.product-base:eq(' + i + ') div.product-productMetaInfo h3.product-brand').text()+" "+$s('li.product-base:eq(' + i + ') div.product-productMetaInfo h4.product-product').text();
}
            }

           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('li.product-base:eq(' + i + ') div.product-price')
                .length > 0) {
                    price = $s('li.product-base:eq(' + i + ') div.product-price span.product-discountedPrice')
.clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
    if (price=="") {
	//code
   price = $s('li.product-base:eq(' + i + ') div.product-price').text();
}
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }

    //recently viewed
    if ($s('div.similar-container .product-list-list')
        .length > 0) {
        var slider = $s('div.similar-container .product-list-list li.product-list-gist');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.similar-container .product-list-list li.product-list-gist:eq(' + i + ')')
                .length > 0) {

              PID=$s('div.similar-container .product-list-list li.product-list-gist:eq(' + i + ') a')
                .attr('href');
                PID=PID.split('/buy')[0].split('/').reverse()[0];
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('div.similar-container .product-list-list li.product-list-gist:eq(' + i + ') a .product-item-imageCtn').find('img')
                    .attr('src');

                     title= $s('div.similar-container .product-list-list li.product-list-gist:eq(' + i + ') a').find('.product-item-brand')
                    .text()+" "+$s('div.similar-container .product-list-list li.product-list-gist:eq(' + i + ') a').find('.product-item-title')
                    .text();

            }
           //console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.similar-container .product-list-list li.product-list-gist:eq(' + i + ') .product-item-pricing')
                .length > 0) {
                    price = $s('div.similar-container .product-list-list li.product-list-gist:eq(' + i + ') .product-item-pricing .product-item-selling-price')
                        .text();
                    price = price.replace(/[^\d.]/g, '')
                .replace(/^\./, '').replace('Rs','');
                }
            } else {
                price = "";
            }
            console.log('price :'+price);
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
    console.log(arrayToSend.length);

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsMy, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("myntra Final Price"+arrayToSend);
  if(cPID.length!=0&&parseInt(cPrice)!=0)
      {

        if(!isNaN(parseInt(cPrice)))
         addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
    }

    chrome.runtime.sendMessage({
        sksmode: "myntra",
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
    selector.push({selector: '.pdp-description-container:eq(0)', attr: 'none', pos: 'after'});
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
    var passBack1 = [{title: prod, siteName: 'Myntra', price: pr, store:'myntra',currency:'INR',ccode:'Rs.'}];
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
    selector.push({selector: '.pdp-selling-price:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Myntra', price: pr, store:'myntra',pid:prodid,color:'#ff6209'}];
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
    if(pr.split("₹").length > 1){
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
    return pr;
}
