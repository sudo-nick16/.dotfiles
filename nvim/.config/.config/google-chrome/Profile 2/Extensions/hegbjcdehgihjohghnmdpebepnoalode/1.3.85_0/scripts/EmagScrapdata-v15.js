
/*document.querySelector("body").addEventListener('click', function(e) {
  var anchor = e.target.closest('a');
  if(anchor !== null) {
    //  console.log("click event fired anchor");
window.setTimeout(sendPairsEm, 4000);
  }
  else
  {
 window.setTimeout(sendPairsEm, 2000);
  }
}, false);*/
/*document.addEventListener('click', function (event) {
  console.log("click event fired");
window.setTimeout(sendPairsFk, 8000);
});*/
$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
var cPrice=0;
var cTitle="";
var cPID="";
iii =0;
 var oos = 0;
abh = window.location.href.split('?')[0];
function getPrice()
{

  var currentPrice=$s("._1MVZfWFYBd5p7-LIqNwH2B ._3ZYEWOIFMWQhXjbUofVeRw ._2MUtYGbDTFIAaSTRIJh0jo ._37U4_gnOsEFLxCAC4Sn1rO").text().replace(/[^\d.]/g, '').replace(/^\./, '');
  cPrice=currentPrice;
       // return currentPrice;
}
getPrice();
function getTitle()
{

  var  title=$s("h1").text();
  cTitle=title;
        //return title;
}
getTitle();
function getsiteName()
{
  
        return "Emag";
}

 window.setTimeout(sendPairsEm, 4000);
    //window.setTimeout(sendPairsFk, 16000);




function sendPairsEm() {
  $s = jQuery.noConflict();
    var arrayToSend = [];
    var slider = $s('.product-unit');
    var sliderLength = slider.length;
    var link;
    var title;
    var imgurl;
    var price;
    var cPrice=0;
var cTitle="";
var cPID="";
var deci;
var deci1;
    PID = window.location.href;
    PID=returnPID(PID);
    if (PID) {
        
        cPID=PID;
        currentPrice=$s("div.product-highlight.product-page-pricing .product-new-price font:eq(0)").text().replace(' ', '').replace('.', '').replace('\n', '').replace(",", "").replace(",", "");
        deci=$s("div.product-highlight.product-page-pricing .product-new-price sup font:eq(0)").text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
        if (currentPrice == "" || currentPrice == undefined)
        {
             currentPrice=$s("div.product-highlight.product-page-pricing .product-old-price s font:eq(0)").text().replace(' ', '').replace('.', '').replace('\n', '').replace(",", "").replace(",", "");
             deci=$s("div.product-highlight.product-page-pricing .product-old-price s sup font:eq(0)").text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
        }
            if (currentPrice == "" || currentPrice == undefined)
        {
             currentPrice=$s("div.product-highlight.product-page-pricing .product-new-price").clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end().text().replace(' ', '').replace('.', '').replace('\n', '').replace(",", "").replace(",", "");
     deci=$s("div.product-highlight.product-page-pricing .product-new-price sup").text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
    
        }
        currentPrice=filter_price(currentPrice);
        console.log("1: "+currentPrice);
        currentPrice= Math.round(currentPrice+"."+deci);
        cPrice=currentPrice;
        title=$s("h1.page-title").text().replace(' ', '').replace('\n', '');
       cTitle=title;
        imgurl = $s("div.product-gallery-outer .ph-scroller a img").attr('src');
          if (imgurl == "" || imgurl == undefined)
        {
                imgurl = $s("div.product-gallery-outer .ph-scroller a").attr('href');
        }
           console.log("first: "+currentPrice);
           
                if (isNaN(currentPrice) == true) {
                    currentPrice = "";
                }
  var avail = getAvailability();
  if(avail == 0){
    var current_status = 1;
  }
  else if(avail == 1){
    current_status = 0;
  }
  else if(avail == -1){
    current_status = 2;
  }
 var ptban = window.location.href;
 if(ptban.split('ptbanpid=')[1])
  current_status = 5;
                // if(count != 0 && (arrayToSend[count - 1][0] == PID) ){
                if (PID != "" && currentPrice != "" && PID != undefined && currentPrice != undefined) arrayToSend.push([PID,title,imgurl, currentPrice,current_status]);
                oos = 0;
    }
    for(i=0; i<$s('div.card-item').length; i++)
        { 
            try{
            PID = returnPID($s('div.card-item:eq('+i+') a').attr('href'));
            title=$s('div.card-item:eq('+i+') ').attr('data-name');
              imgurl=$s('div.card-item:eq('+i+') a').find('img').attr('src');
            
            //price =$s('div.card-item:eq('+i+') p.product-new-price').text().replace(/[^\d.]/g, '').replace(/^\./, '').replace(",", "").replace(",", "");
                price=$s('div.card-item:eq('+i+') p.product-new-price font:eq(0)').text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
        deci1=$s('div.card-item:eq('+i+') p.product-new-price sup font:eq(0)').text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
        if (price == "" || price == undefined)
        {
             price=$s('div.card-item:eq('+i+') p.product-old-price s font:eq(0)').text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
             deci1=$s('div.card-item:eq('+i+') p.product-old-price s sup font:eq(0)').text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
        }
            if (price == "" || price == undefined)
        {
             price=$s('div.card-item:eq('+i+') p.product-new-price').clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end().text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
     deci1=$s('div.card-item:eq('+i+') p.product-new-price sup').text().replace(' ', '').replace('\n', '').replace(",", "").replace(",", "");
    
        }
            price=filter_price(price);
             price= Math.round(price+"."+deci1);
                if (isNaN(price) == true) {
                    price = "";
                }


                // if(count != 0 && (arrayToSend[count - 1][0] == PID) ){
                if (PID != "" && price != "" && PID != undefined && price != undefined) arrayToSend.push([PID,title,imgurl, price,oos]);
            }
            catch(e)
            { 
                //console.log(e);
            }
        }
            
 
        console.log("search: "+$s('._3liAhj').length);

    if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.onload =  sendPairsEm;}
  $s("#containerMainPTID").remove();
    arrayToSend = JSON.stringify(arrayToSend);
    console.log("Emag Final Price:"+arrayToSend);
    chrome.runtime.sendMessage({
        sksmode: "emag",
        pairs: arrayToSend
    }, function (response) {
      
      });
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
    var pwidth=0;
if($s('._2Cl4hZDYPeapixiVtu4JCR:eq(0)').length>0 || $s('._2Cl4hZ:eq(0)').length>0)
pwidth=$s('body').width();
console.log("width"+pwidth+"final:"+(pwidth-512));
pwidth=pwidth-512;
if(pwidth>816)
{
  var proddesc=$s('._2tFX2QBT1y0sNHEhz8azKQ').attr('data-reactid');
    if (proddesc == "" || proddesc == undefined)
        {
                proddesc=$s('._2tFX2Q').attr('data-reactid');
        }
   var specs=$s('._2ixwsm-FxWc78shZIEMSV_').attr('data-reactid');
     if (specs == "" || specs == undefined)
        {
                specs=$s('._2ixwsm').attr('data-reactid');
        }
   console.log(specs+"ytr:"+proddesc);
   if(parseInt(specs)>parseInt(proddesc))
   {
  selector.push({selector: '._2tFX2QBT1y0sNHEhz8azKQ', attr: 'none', pos: 'before'});
   selector.push({selector: '._2tFX2Q', attr: 'none', pos: 'before'});
   }
  else
  {
    selector.push({selector: '._2ixwsm-FxWc78shZIEMSV_', attr: 'none', pos: 'before'});
      selector.push({selector: '._2ixwsm', attr: 'none', pos: 'before'});
  }
     
}
   // selector.push({selector: 'div.container:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '#other-offers-list:eq(0)', attr: 'none', pos: 'before'});
    selector.push({selector: '.mrg-sep-sm:eq(0)', attr: 'none', pos: 'before'});
   
    selector.push({selector: '._1GRhLXr8H_VoL47-NWb5f0:eq(0)', attr: 'none', pos: 'after'});
      selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1GRhLX:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
    addGraphBase(passBack,impposcssdata);
    var passBack1 = [{title: prod, siteName: 'Emag', price: pr, store:'emag',currency:'Lei ',ccode:'Lei '}];
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
    selector.push({selector: '.delivery-estimate-panel:eq(0)', attr: 'none', pos: 'before'});
      selector.push({selector: '.product-characteristics:eq(0)', attr: 'none', pos: 'before'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Emag', price: pr, store:'emag',pid:prodid,color:'#2874f0'}];
        passBack1 = JSON.stringify(passBack1);
    addPriceDropBase(passBack,impposcssdata,passBack1);
 $s("#containerMainPTDropB").remove();



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
function getAvailability(){
  var avail = 1;
  if($s('.top-section').length > 0 && $('.top-section').find('.out-of-stock').length > 0){
    avail = 0;
  }
  else if($s('.top-section').find('.listing-obsolete-status').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('.product-highlight.product-page-pricing span').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
    else if($s('._3xgqrA').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
  else if($s('.row._3FV-Hc').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('.row._3FV-Hc').text().toUpperCase().split("TEMPORARILY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('.row._3FV-Hc').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
   else if($s('._3xgqrA').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA').text().toUpperCase().split("TEMPORARILY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
  else if($s('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("DISCONTINUED").length > 1){
    avail = -1;
  }
  return avail;
}
function returnPID(link){

  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
  }
  if(pid.split("?ASIN=").length > 1){
    pid = pid.split("?ASIN=")[1];
    if(pid.split("/").length > 1){
      pid = pid.split("/")[0];
    }
  }
  else if(pid.split("&ASIN=").length > 1){
    pid = pid.split("&ASIN=")[1];
    if(pid.split("/").length > 1){
      pid = pid.split("/")[0];
    }
  }
  else if(pid.split("/product/").length > 1){
    pid = pid.split("/product/")[1];
  }
  else if(pid.split("/pd/").length > 1){
    pid = pid.split("/pd/")[1];
  }
  else{
    pid = "";
  }

  if(pid != ""){
    if(pid.split("?").length > 1){
      pid = pid.split("?")[0];
    }
    if(pid.split("&").length > 1){
      pid = pid.split("&")[0];
    }
    if(pid.split("/ref").length > 1){
      pid = pid.split("/ref")[0];
    }
    if(pid.split("/").length > 1){
      pid1 = pid.split("/");
      pid1 = pid1[pid1.length - 1];
      if(pid1 == ""){
        pid = pid.split("/");
        pid = pid[pid.length - 2];
      }
      else {
        pid = pid1;
      }
    }

 
    if(link == ""){
      pid = "";
    }
    if(pid != pid.toUpperCase()){
      pid = "";
    }
  }
  return pid;
}
//window.setTimeout(plotFlipGraph, 5000);