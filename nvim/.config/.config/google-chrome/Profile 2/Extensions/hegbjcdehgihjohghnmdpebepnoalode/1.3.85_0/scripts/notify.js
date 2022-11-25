
chrome.gcm.onMessage.addListener(gcmmessage);
chrome.instanceID.onTokenRefresh.addListener(ontokenRefresh);
function getrandomId() {
    var random = Math.floor(Math.random() * 800719929436992) + 1;
    return random.toString();
}
function gcmmessage(message) {
    var gcmmsg1 = message.data;
    gcmmsg = gcmmsg1;
    var image = message.data["gcm.notification.image"];
    popupnotification( message.data["gcm.notification.title"],  message.data["gcm.notification.body"],  message.data["click_action"], image);
}
var listofnoti = [];
function popupnotification(title, detail, link, image) {
  type = "basic";
 // if(image) type = "image";
    var opt = {
        type: type,
        title: title,
        message: detail,
        iconUrl: image,
        priority: 100,
        requireInteraction:true
    };
    var linkPass = link;
    var ranid = getrandomId();
    chrome.notifications.create(ranid, opt, function(id) {
        listofnoti.push({
            notifcationID: id,
            URL: link
        });
    });
}
function notifyClicked(notifyID) {
    for (i = 0; i < listofnoti.length; i++) {
        if (listofnoti[i].notifcationID == notifyID) {
            window.open(listofnoti[i].URL);
            chrome.notifications.clear(notifyID);
        }
    }
}
chrome.notifications.onClicked.addListener(notifyClicked);
var PROJECT_ID = "911129401840";

if ((localStorage.fcmUserID == undefined || localStorage.fcmUserID == "" || typeof(localStorage.fcmUserID) ==
    "undefined" || typeof(localStorage.fcmEnable) == "undefined") && localStorage.ptextid && localStorage.ptextauth) {
    //chrome.gcm.register(PROJECT_ID, registerGcmUser);
    chrome.instanceID.getToken({authorizedEntity:PROJECT_ID, scope: "FCM"}, registerGcmUser);
    localStorage.fcmEnable = "true";

}else {
    //sendToServer(localStorage.pushToken);
}
function registerGcmUser(fcmUserID) {
    saveToServer(fcmUserID);
}
function ontokenRefresh() {
  chrome.instanceID.getToken({authorizedEntity:PROJECT_ID, scope: "FCM"}, ontokenRefreshFinal)
  //var fcmUserID=
   // saveToServer(fcmUserID);
}
function ontokenRefreshFinal(fcmUserID) {
    saveToServer(fcmUserID);
}

function saveToServer(fcmUserID) {
    var httpq4 = new getXMLHTTPRequest();
    var myurl = "https://api.indiadesire.com/api.php?rquest=storeGcmUserID";
    if (fcmUserID != "") {
        var parameters = "extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth+"&gcmuserid=" + fcmUserID;
        httpq4.open("POST", myurl, true);
        httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpq4.onreadystatechange = function() {
            if (httpq4.readyState == 4) {
                if (httpq4.status == 200) {
                    localStorage.fcmUserID = fcmUserID;
                }
            }
        };
        httpq4.send(parameters);
    }

}

if(typeof(localStorage.tokenID) == "undefined" && typeof(localStorage.ptextid) != "undefined"){
  // console.log("12hdsj");
   requestToken();

}
function requestToken() {
    var httpq4 = new getXMLHTTPRequest();
    var myurl = "https://api.indiadesire.com/api.php?rquest=RequestToken";
    if (typeof(localStorage.tokenID) == "undefined") {
        var parameters = "extnid="+localStorage.ptextid+"&extnauth="+localStorage.ptextauth;
        httpq4.open("POST", myurl, true);
        httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpq4.onreadystatechange = function() {
            if (httpq4.readyState == 4) {
                if (httpq4.status == 200) {
                     var data = httpq4.responseText;
                    var data1=JSON.parse(data);
                    localStorage.tokenID = data1.token;
                }
            }
        };
        httpq4.send(parameters);
    }

}
