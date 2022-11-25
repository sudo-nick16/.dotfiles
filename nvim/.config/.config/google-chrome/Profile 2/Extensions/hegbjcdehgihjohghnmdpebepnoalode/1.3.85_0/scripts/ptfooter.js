chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.jack && !ct) {
        if(document.body) ptid(request, sender);
        else setTimeout(function(){  
            if(document.body) ptid(request, sender);
            else setTimeout(function(){ 
                ptid(request, sender); 
            }, 1500); 
        }, 3000);
    }
});
extension_name = 'PriceTracker';
var site = window.location.hostname;
var furl = window.location.href;
function pt_setCookie(cname, cvalue, exsec) {
    var d = new Date();
    d.setTime(d.getTime() + (exsec*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +"; path=/";
}
function pt_getCookie(cvalue)
{
    var name = cvalue+"=";
    var ca = document.cookie.split('; ');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}
var ct =0;

function ptid(request, sender){
    var res = JSON.parse(request.jack);
    ct=1;
    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = 'position: fixed;box-shadow: 0px 1px 12px 1px grey;right: 10px;bottom: 10px;z-index: 8363647746;background: white;padding: 20px;font-size: 15px;'+res['css'];
    elemDiv.id = "pt_a";
    footer = '';
    if(res['footer']) footer = '<div style="bottom: 4px;margin-bottom: -15px;font-size: 9px;width: 100%;text-align: -webkit-right;color: black;">suggestion by: '+extension_name+'</div>';
    close = '<div id="pt_x" style="position: absolute;right: 0px;top: 0px;cursor: pointer;z-index: 1;border-radius: 39px;width: 27px;text-align: center;height: 27px;line-height: 27px;">x</div>';
    document.body.appendChild(elemDiv);
    var theDiv = document.getElementById("pt_a");
    if(res['image']) cont = '<img src="'+res['image']+'" style="width:'+res['width']+'">';
    else if(res['text']) cont = res['text'];
    theDiv.innerHTML += close+'<a id="pt_link" href="'+res['link']+'" target="_blank" style="font-size: 15px;line-height: 18px;color:#1b0505!important">'+cont+'</a>'+footer; 
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
    document.getElementById('pt_x').onclick = function(){elemDiv.remove(); pt_setCookie("pt_m",parseInt(pt_getCookie("pt_m"))+1, 60*60*24*10)};
}


