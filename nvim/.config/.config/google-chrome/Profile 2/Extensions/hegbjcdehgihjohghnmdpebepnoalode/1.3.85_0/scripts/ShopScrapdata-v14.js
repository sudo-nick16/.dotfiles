$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
iii =0;
abh = window.location.href.split('?')[0];

 window.setTimeout(sendPairsSc, 5000);
 function getPrice()
{
  var  currentPrice = $s(".product-pricing .price")
            .text()
            .split(".")[1].replace(",", "")
            .trim();
        return currentPrice;
}
function getTitle()
{
  var   title=$s(".product-about .name").find('h1')
            .text();
        return title;
}

function getsiteName()
{
  
        return "Shopclues";
}
function sendPairsSc() {
    var arrayToSend = [];
    var title;
    var imgurl;
       var cPrice=0;
var cTitle="";
var cPID="";
    if ($s('.pdp_info')[0]) {
        PID = window.location.href.split(".com/")[1].split(".html")[0] + ".html";
        PID = PID.split("?")[0];
        cPID=PID;
        currentPrice = $s(".pdp_info .f_price")
             .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text()
            .split(".")[1].replace(",", "").replace("\n", "").replace(" ", "")
            .trim();
           cPrice= currentPrice;
            title=$s(".pdp_info").find('h1')
            .text();
            cTitle=title;
             imgurl=$s(".pdp_info .prd_mid_info img").attr('src');
        if (currentPrice) arrayToSend.push([PID,title,imgurl, currentPrice]);
    }
    if ($s('div.column.col4')
        .length > 0) {
        var slider = $s('div.column.col4');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.column.col4:eq(' + i + ') a:eq(1)')
                .length > 0) {
                link = $s('div.column.col4:eq(' + i + ') a:eq(1)')
                    .attr('href');
                    imgurl= $s('div.column.col4:eq(' + i + ') a:eq(1)').find('img')
                    .attr('src');
                     title= $s('div.column.col4:eq(' + i + ') a:eq(1) h3')
                    .text();
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".html";
                        }
                    } else if (link.split(".htm")
                        .length > 1) {
                        link = link.split(".htm")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".htm";
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('div.column.col4:eq(' + i + ') .ori_price')
                    .find('.p_price')
                    .length > 0) {
                    price = $s('div.column.col4:eq(' + i + ') .ori_price')
                        .find('.p_price')
                        .text();
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
           price= filter_price(price);
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, price]);
            }

        } // for ends

    }
        if ($s('div.column.col3')
        .length > 0) {
        var slider = $s('div.column.col3');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('div.column.col3:eq(' + i + ') a:eq(1)')
                .length > 0) {
                link = $s('div.column.col3:eq(' + i + ') a:eq(1)')
                    .attr('href');
                    imgurl= $s('div.column.col3:eq(' + i + ') a:eq(1)').find('img')
                    .attr('src');
                     title= $s('div.column.col3:eq(' + i + ') a:eq(1) h3')
                    .text();
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".html";
                        }
                    } else if (link.split(".htm")
                        .length > 1) {
                        link = link.split(".htm")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".htm";
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('div.column.col3:eq(' + i + ') .ori_price')
                    .find('.p_price')
                    .length > 0) {
                    price = $s('div.column.col3:eq(' + i + ') .ori_price')
                        .find('.p_price')
                        .text();
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
           price= filter_price(price);
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, price]);
            }

        } // for ends

    }
      if ($s('.ProductDB li')
        .length > 0) {
        var slider = $s('.ProductDB li');
        var sliderLength = slider.length;
        console.log("len:"+sliderLength);
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.ProductDB li:eq(' + i + ') a')
                .length > 0) {
                link = $s('.ProductDB li:eq(' + i + ') a')
                    .attr('href');
                    imgurl= $s('.ProductDB li:eq(' + i + ') a').find('img')
                    .attr('src');
                     title= $s('.ProductDB li:eq(' + i + ') a span:nth-child(3)')
                    .text();
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".html";
                        }
                    } else if (link.split(".htm")
                        .length > 1) {
                        link = link.split(".htm")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".htm";
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
           // console.log("Test:"+PID+","+title+","+imgurl);
            if (PID != "") {
                if ($s('.ProductDB li:eq(' + i + ') a')
                .length > 0) {
                    price = $s('.ProductDB li:eq(' + i + ') a span:nth-child(4) span:nth-child(2)')
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
    if ($s('#recently_viewed_id .content li')
        .length > 0) {
        var slider = $s('#recently_viewed_id li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#recently_viewed_id .content li:eq(' + i + ') a')
                .length > 0) {
                link = $s('#recently_viewed_id .content li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".html";
                        }
                    } else if (link.split(".htm")
                        .length > 1) {
                        link = link.split(".htm")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".htm";
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#recently_viewed_id .content li:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#recently_viewed_id .content li:eq(' + i + ')')
                        .find('.price')
                        .text();
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, price]);
            }

        } // for ends

    }
    if ($s('.prd_info_left_blk')
        .length > 0) {
        var slider = $s('.prd_info_left_blk');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.prd_info_left_blk:eq(' + i + ') a')
                .length > 0) {
                link = $s('.prd_info_left_blk:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".html";
                        }
                    } else if (link.split(".htm")
                        .length > 1) {
                        link = link.split(".htm")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".htm";
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.prd_info_left_blk:eq(' + i + ')')
                    .find('.bs_main_price_vr')
                    .length > 0) {
                    price = $s('.prd_info_left_blk:eq(' + i + ')')
                        .find('.bs_main_price_vr')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.")[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, price]);
            }

        } // for ends

    }
    if ($s('.bs_cntnr_item')
        .length > 0) {
        var slider = $s('.bs_cntnr_item');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.bs_cntnr_item:eq(' + i + ') a')
                .length > 0) {
                link = $s('.bs_cntnr_item:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".html";
                        }
                    } else if (link.split(".htm")
                        .length > 1) {
                        link = link.split(".htm")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".htm";
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.bs_cntnr_item:eq(' + i + ')')
                    .find('.bs_main_price')
                    .length > 0) {
                    price = $s('.bs_cntnr_item:eq(' + i + ')')
                        .find('.bs_main_price')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.")[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, price]);
            }

        } // for ends

    }

    if ($s('.list-product')
        .length > 0) {
        var slider = $s('.list-product');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.list-product:eq(' + i + ') a')
                .length > 0) {
                link = $s('.list-product:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".html";
                        }
                    } else if (link.split(".htm")
                        .length > 1) {
                        link = link.split(".htm")[0];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[link.length - 1] + ".htm";
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.list-product:eq(' + i + ')')
                    .find('.details .product-price .price')
                    .length > 0) {
                    price = $s('.list-product:eq(' + i + ')')
                        .find('.details .product-price .price')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.")[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID,title,imgurl, price]);
            }

        } // for ends

    }
    if (arrayToSend.length == 0) { if(iii) return 0; else iii=1; return window.setTimeout(sendPairsSc, 5000);}

    arrayToSend = JSON.stringify(arrayToSend);
     console.log("Shopclues Final Price"+arrayToSend);
  if(cPID.length!=0&&parseInt(cPrice)!=0)
      {
        
        if(!isNaN(parseInt(cPrice)))
        addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
    }
    chrome.runtime.sendMessage({
        sksmode: "shopclues",
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
    
      selector.push({selector: '.prd_right_info:eq(0)', attr: 'none', pos: 'after'});
    /*selector.push({selector: '.product:eq(0)', attr: 'none', pos: 'after'});
     selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1GRhLX:eq(0)', attr: 'none', pos: 'after*'});*/
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
    addGraphBase(passBack,impposcssdata);
    var passBack1 = [{title: prod, siteName: 'ShopClues', price: pr, store:'shopclues',currency:'INR',ccode:'Rs.'}];
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
    selector.push({selector: '.price:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Shopclues', price: pr, store:'shopclues',pid:prodid,color:'#13a9b2'}];
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
