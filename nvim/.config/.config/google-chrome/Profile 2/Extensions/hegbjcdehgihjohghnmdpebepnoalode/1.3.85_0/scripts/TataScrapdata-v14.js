$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
iii =0;
abh = window.location.href.split('?')[0];

 window.setTimeout(sendPairsTc, 1000);
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
  
        return "TataCliq";
}

function sendPairsTc() {
    arrayToSend = [];
    var title;
    var imgurl;
     var cPrice=0;
var cTitle="";
var cPID="";
      if ($s('._1aUdjHZYKnkxjO2n7hIzJh')
        .length > 0) {
        //var slider = $s('div.product-tuple-listing');
        //var sliderLength = slider.length;
        var price;
        var PID=window.location.href;
       
            PID = PID
                .split("?")[0].split("#")[0].split("/")
                .slice(-1)[0];
                PID=PID.split('-')[1];
                cPID=PID;
            price = parseInt($s('._1aUdjHZYKnkxjO2n7hIzJh ._3BuuEa4DZJe-0OCEQmi_K_ span')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if(isNaN(parseInt(price)))
              price = parseInt($s('._1aUdjHZYKnkxjO2n7hIzJh ._3BuuEa4DZJe-0OCEQmi_K_ span')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
               if(isNaN(parseInt(price)))
              price = parseInt($s('._1aUdjHZYKnkxjO2n7hIzJh ._3BuuEa4DZJe-0OCEQmi_K_ span')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
               if(isNaN(parseInt(price)))
              price = parseInt($s('._3BuuEa4DZJe-0OCEQmi_K_ h3')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            cPrice=price;
            title=$s('._1aUdjHZYKnkxjO2n7hIzJh .fMO6mN8qLtqRumW90vzk4').text();
            cTitle=title;
                imgurl=$s('img.rnVlQIG2OU_zvETUcW0TW')
                    .attr('src');
                    console.log(PID+":"+price);
            if (PID && price) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price]);
                }
            }
        } //for loop ends
     //1st if ends
    if ($s('a.product-tile')
        .length > 0) {
        var slider = $s('a.product-tile');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('a.product-tile:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('a.product-tile:eq(' + i + ')')
                .attr('href');
                PID=PID.split('/')[2].toLowerCase();
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('a.product-tile:eq(' + i + ') .image').find('img')
                    .attr('src');
                   
                     title= $s('a.product-tile:eq(' + i + ') .image').find('img')
                    .attr('alt');
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('a.product-tile:eq(' + i + ') .short-info .price .sale')
                .length > 0) {
                    price = $s('a.product-tile:eq(' + i + ') .short-info .price .sale')
                        .text();
                    price = price.replace(/[^\d.]/g, '')
                .replace(/^\./, '');
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

    }
     if ($s('div._2yDWfeidsag2HZGFeU4HUj')
        .length > 0) {
        var slider = $s('div._2yDWfeidsag2HZGFeU4HUj');
        var sliderLength = slider.length;
        console.log("divlen:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div._2yDWfeidsag2HZGFeU4HUj:eq(' + i + ')')
                .length > 0) {
             
              PID=$s('div._2yDWfeidsag2HZGFeU4HUj:eq(' + i + ') a')
                .attr('href');
                  PID = PID
                .split("?")[0].split("#")[0].split("/")
                .slice(-1)[0];
                PID=PID.split('-')[1];
               // PID=PID.split('/')[2].toLowerCase();
                //PID=PID.split("?")[0].split("#")[0].split("/").slice(-1)[0];
                //if($s('.product-tile:eq(' + i + ') .product-img').find('img').attr('data-src'))
                 imgurl= $s('div._2yDWfeidsag2HZGFeU4HUj:eq(' + i + ') a').find('img')
                    .attr('src');
                   
                     title= $s('div._2yDWfeidsag2HZGFeU4HUj:eq(' + i + ') a')
                    .attr('title');
              
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('div._2yDWfeidsag2HZGFeU4HUj:eq(' + i + ') .dKCupF_5rtgdFHZiQ3xpQ.MZydWWaSr0xQud-F-Jwfa h3')
                .length > 0) {
                    price = $s('div._2yDWfeidsag2HZGFeU4HUj:eq(' + i + ') .dKCupF_5rtgdFHZiQ3xpQ.MZydWWaSr0xQud-F-Jwfa h3')
                        .text();
                    price = price.replace(/[^\d.]/g, '')
                .replace(/^\./, '');
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, filter_price(price)]);
            }

        } // for ends

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

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsTc, 5000);}
    arrayToSend = JSON.stringify(arrayToSend);
       console.log("tatacliq Final Price"+arrayToSend);
  if(cPID.length!=0&&parseInt(cPrice)!=0)
      {
        
        if(!isNaN(parseInt(cPrice)))
         addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
    }
    chrome.runtime.sendMessage({
        sksmode: "tatacliq",
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
    selector.push({selector: '._3hVFKItFozDhfABDlm29A2:eq(0)', attr: 'none', pos: 'after'});
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
    var passBack1 = [{title: prod, siteName: 'TataCliq', price: pr, store:'tatacliq',currency:'INR',ccode:'Rs.'}];
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
    selector.push({selector: '._3QxM820UNvRen7hLNf8P1Z:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'TataCliq', price: pr, store:'tatacliq',pid:prodid,color:'#212121'}];
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
