document.querySelector("body").addEventListener('click', function(e) {
  var anchor = e.target.closest('a');
  if(anchor !== null) {
    //  console.log("click event fired anchor");
window.setTimeout(sendPairsAj, 5000);
  }
  var anchor1 = e.target.closest('div.facet-linkhead');
  if(anchor1 !== null) {
    //  console.log("click event fired anchor");filter-dropdown
window.setTimeout(sendPairsAj, 5000);
  }
  var anchor2 = e.target.closest('div.filter-dropdown');
  if(anchor2 !== null) {
    //  console.log("click event fired anchor");filter-dropdown
window.setTimeout(sendPairsAj, 5000);
  }
}, false);

$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;

iii =0;
abh = window.location.href.split('?')[0];

 window.setTimeout(sendPairsAj, 5000);
function getsiteName()
{

        return "Ajio";
}

function sendPairsAj() {
    arrayToSend = [];
    var title;
    var imgurl;
     var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('div.prod-container:eq(0)')
        .length > 0) {
        var price;
        var PID=window.location.href;
        PID = PID.split("/p/")[1];
        PID= PID.split("?")[0];
                cPID=PID;
            price = filter_price($s('div.prod-container:eq(0) div.prod-price-section div.prod-sp').clone().children().remove().end()
                .text()
                .replace(',', '').replace('Rs.',''));
          //  if($s('div.prod-container:eq(0) .post-card__content-price-offer').length>0)
        //    price=filter_price($s('div.prod-container:eq(0) .post-card__content-price-offer').clone().children().remove().end().text());
            cPrice=price;
            title=$s('div.prod-container:eq(0) h2.brand-name').text()+" "+$s('div.prod-container:eq(0) h1').text();
            cTitle=title;
                imgurl=$s('div.prod-container:eq(0) div.img-container img:eq(0)')
                    .attr('src');
                    console.log(PID+":"+price);
                     //arrayToSend.push([PID,title,imgurl, price]);
           if (PID && price) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('div.rilrtl-products-list__item')
        .length > 0) {
        var slider = $s('div.rilrtl-products-list__item');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.rilrtl-products-list__item:eq(' + i + ')')
                .length > 0) {

              PID=$s('div.rilrtl-products-list__item:eq(' + i + ') a:eq(0)').attr('href');
              PID = PID.split("/p/")[1];
              PID= PID.split("?")[0];

                 imgurl= $s('div.rilrtl-products-list__item:eq(' + i + ') a:eq(0)').find('img')
                    .attr('src');
                    if(imgurl==null)
                     imgurl= "https://assets.indiadesire.com/data/imagenotavailable.jpeg";
                     title= $s('div.rilrtl-products-list__item:eq(' + i + ') .contentHolder .brand').text()+" "+$s('div.rilrtl-products-list__item:eq(' + i + ') .contentHolder .name').text();

            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.rilrtl-products-list__item:eq(' + i + ') span.price')
                .length > 0) {
                  //console.log("Test:"+i);
                    price = $s('div.rilrtl-products-list__item:eq(' + i + ') span.price').clone().children().remove().end().text().replace('Rs.','');                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
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
  /*  if ($s('div.slick-slide .sec-prod-disp')
        .length > 0) {
        var slider = $s('div.slick-slide');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.slick-slide:eq(' + i + ') .sec-prod-disp')
                .length > 0) {

              PID=$s('div.slick-slide:eq(' + i + ') a:eq(0)').attr('href');
              PID = PID.split("/p/")[1];
              PID= PID.split("?")[0];

                 imgurl= $s('div.slick-slide:eq(' + i + ') a:eq(0)').find('img')
                    .attr('src');
                    if(imgurl==null)
                     imgurl= "https://assets.indiadesire.com/data/imagenotavailable.jpeg";
                     title= $s('div.slick-slide:eq(' + i + ') .sec-product-details .sec-prod-title').text()+" "+$s('div.slick-slide:eq(' + i + ') .sec-product-details .sec-prod-subtitle').text();

            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div.slick-slide:eq(' + i + ') .sec-product-details .sec-prod-cp')
                .length > 0) {
                  //console.log("Test:"+i);
                    price = $s('div.slick-slide:eq(' + i + ') .sec-product-details .sec-prod-cp').clone().children().remove().end().text().replace('Rs.','');                   // price = price.replace(/[^\d.]/g, '').replace(/^\./, '');
                }

            } else {
                price = "";
            }
                  //filter_price(price)

            if (PID != "" && price != "") {
           arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }*/

    //recently view
    console.log(arrayToSend.length);

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsAj, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("ajio Final Price"+arrayToSend);
 if((cPID != undefined) && cPID.length!=0 && cPrice!=0)
      {
         if(!isNaN(parseInt(cPrice)))
         addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
    }

    chrome.runtime.sendMessage({
        sksmode: "ajio",
        pairs: arrayToSend
    }, function (response) {});
}
function getSkuId ( field, url ) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
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
    selector.push({selector: '.prod-container:eq(0)', attr: 'none', pos: 'after'});
    /*selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1GRhLX:eq(0)', attr: 'none', pos: 'after*'});*/
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="margin-left:5%";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
    addGraphBase(passBack,impposcssdata);
    var passBack1 = [{title: prod, siteName: 'Ajio', price: pr, store:'ajio',currency:'INR',ccode:'Rs.'}];
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
    selector.push({selector: '.prod-price-section:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="display:block";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Ajio', price: pr, store:'ajio',pid:prodid,color:'#2f4254'}];
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
     if (pr.split("₹")
        .length > 1) {
        pr = pr.split("₹")[1].trim();
    }
    pr = pr.split(",")
        .join("")
        .trim();
    pr = parseFloat(pr);
    return pr;
}
