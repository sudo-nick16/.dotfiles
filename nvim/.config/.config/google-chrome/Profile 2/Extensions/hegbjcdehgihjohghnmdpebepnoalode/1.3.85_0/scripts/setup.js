var tabID = 0;
var globalInstExt = 0;
var instructionsExt = [];
var extension = chrome.runtime.id;

function setTab(tabId){
	tabID = tabId
	if($("#pricetrackrr-tab-id").length > 0){
		$("#pricetrackrr-tab-id").remove();
	}
console.log(" tabID received: "+tabID);
	var hiddenInput = document.createElement("div");
	hiddenInput.setAttribute("id", "pricetrackrr-tab-id");
	hiddenInput.setAttribute("type", "hidden");                     
	hiddenInput.setAttribute("data-item", tabID);                     
	$('body').append(hiddenInput);
}

function getTab(){
	
	  chrome.runtime.sendMessage({
        sendTabID: 'TabIDRequested'
    }, function (response) {
      setTab(response.output);
      });
	
}
getTab();
function getVersionDetails(){
	
	  chrome.runtime.sendMessage({
        getVer: 'getversion'
    }, function (response) {
      setVersion(response.getVers);
      });
	
}
getVersionDetails();
function setVersion(ver)
{
	 $("#versionID").text("-v"+ver);
}
function readInstructs(){
	setTimeout(function(){readInstructs()}, 100);
	var instructions = localStorage.instructions;
	//console.log(" instructions received: "+localStorage.instructions);
	if(instructions && instructions!="" && instructions!= undefined){
		instructions = JSON.parse(instructions);

		if(instructions && instructions.length > 0 && tabID!=0){
			for(var i=0;i<instructions.length;i++){
				var prefix = instructions[i]['name'];
				if(instructions[i][prefix + '5']==tabID && instructions[i]['status']==0){
					var msgType = instructions[i][prefix + "0"];
					var jsonObj = instructions[i][prefix + "1"];
					var command = instructions[i][prefix + "2"];
					var funcName = instructions[i][prefix + "3"];
					var passBack = instructions[i][prefix + "4"];
					var tabId = instructions[i][prefix + "5"];
					var PID = JSON.parse(passBack);
					instructions[i]['PID'] = PID[0].pid;
					instructions[i]['status'] = 1;
					instructions[i]['time'] = Math.floor(Date.now()/1000);
					 var jsonData = JSON.parse(jsonObj);
 var mess=jsonData[0].message;
 var rd=jsonData[0].rData;
 var messagef=jsonData[0];
	//console.log("message passed to background "+messagef);
					  chrome.runtime.sendMessage(messagef, function(response) {
    var respoObt = response.GottaGo;
    if(typeof(funcName)=="function"){
      funcName(respoObt, passBack);
    }
    else {
      window[funcName](respoObt, passBack);
    }
  }); 
				
				}


			}
		}
		instructions = JSON.stringify(instructions);
		localStorage.instructions = instructions;
	}
}

readInstructs();


function instructionsExtn(data, passBack){
	console.log("tabID: "+tabID);
	passBack = JSON.parse(passBack);
	var pid = passBack[0].pid;
	var prefix = passBack[0].prefix;
	if(globalInstExt == 0  && tabID!=0){
		globalInstExt = 1;
		var instructionsExt = [];
		if(localStorage.instructionsExt){
			instructionsExt = localStorage.instructionsExt;
			instructionsExt = JSON.parse(instructionsExt);
		}

		var flagFoundExt = false;

		for(k=0;k<instructionsExt.length;k++){
			if(instructionsExt[k][prefix + "0"]==tabID){
				flagFoundExt = true;
				break;
			}
		}

		if(!flagFoundExt){
			var inst = {};
			// console.log("Prefix: "+prefix);
			inst["name"] = prefix;
			inst["tabID"] = tabID;
			inst["data"] = data;
			inst["passBack"] = passBack;
			instructionsExt.push(inst);
		}
		var instructions = [];
		instructions = localStorage.instructions;
		instructions = JSON.parse(instructions);
		for(var j=0;j<instructions.length;j++){
			if(Math.floor(instructions[j]["PID"]) == Math.floor(pid)){
				instructions.splice(j, 1);
				break;
			}
			else{
				// console.log("Pid here "+instructions[j]["PID"]);
			}
		}
		instructions = JSON.stringify(instructions);
		localStorage.instructions = instructions;
		//console.log("instructions after process over : "+instructions);
		//console.log("instructionsExt : ",instructionsExt);
		localStorage.instructionsExt = JSON.stringify(instructionsExt);
		globalInstExt = 0;
	}
	else{
		setTimeout(function(){
			instructionsExtn(data, passBack);
		}, 100);
	}
}


function callBack(data, passBack){
	//console.log("callBack was called with "+data);
	 //console.log("passBack was called with "+passBack);
	instructionsExtn(data, passBack);

}

