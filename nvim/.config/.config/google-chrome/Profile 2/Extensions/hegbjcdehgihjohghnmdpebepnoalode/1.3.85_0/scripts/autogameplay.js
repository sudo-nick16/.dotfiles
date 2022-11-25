$s = jQuery.noConflict();
var winloc = window.location.href;
//alert(winloc);
if((winloc.search("playself=1")>0)){
//window.setTimeout(ptplaygame, 800);
window.setTimeout(ptplaygame1, 800);
//alert(1);
}else if((winloc.search("start-of-season.html")>0))
{
    window.setTimeout(ptplaygame, 800);
}
function ptplaygame()
{
    	var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></div>';
		var ele = document.getElementById("ptabuy");
	}
  
      ele.style.background = "#8BC34A";
    
    document.getElementById("ptanotify").innerHTML = "Wohooo We made the match maker game easy to win for you, </br>Start Game by Clicking on Play Now..</br>Just Click Next Level when it comes..</br> If you want to play yourself <a href='http://www.shopclues.com/start-of-season.html?playself=1' target='_self'>Click Here</a> ";
 
    if ($s('div.quizy-mg-item').length > 0)
        {
             var slider = $s('div.quizy-mg-item');
        var sliderLength = slider.length;
        var r=0;
         for (i = 0; i < sliderLength; i++)
         {
            $s('div#g .timer').css('animation', 'timer 100000000ms linear');
            r=ranum(sliderLength);
            $s('div.quizy-mg-item:eq('+r+')').click();
           
         }
        }
        window.setTimeout(ptplaygame, 800);
     // ptplaygame();  
}
function ptplaygame1()
{
    	var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></div>';
		var ele = document.getElementById("ptabuy");
	}

        ele.style.background = "#FF9800";
    document.getElementById("ptanotify").innerHTML = "Wohooo We made the match maker game easy to win for you, If you want to play & win Automatically <a href='http://www.shopclues.com/start-of-season.html' target='_self'>Click Here</a> ";
   
 
        window.setTimeout(ptplaygame1, 800);
     // ptplaygame();  
}
function ranum(x)
{
    if(!x) x=11;
    return Math.floor((Math.random() * 10000)%x);
}
