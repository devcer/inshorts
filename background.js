var CSS='body{background-color: black;}span[itemprop="headline"]{color:white;}div[itemprop="articleBody"]{color:white;} #load-more-btn{background-color:red;color:white;}'
var enable=true;
//method to enable nightmode
function enableNightMode() {
	browser.tabs.insertCSS({code: CSS});
	enable=false;
}

//method to disable nightmode
function disableNightMode(){
	browser.tabs.removeCSS({code: CSS});
	enable=true;
}

//method to toggle mode
function toggleNightMode(tab){
	if(tab.url.indexOf("www.inshorts.com/en/read")!=-1){
		if(enable){
			enableNightMode();
		}else{
			disableNightMode();
		}
	}
}

//when the browser tab is refreshed
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
	if(tab.url.indexOf("www.inshorts.com/en/read")!=-1){
		disableNightMode();
	}
});

//event handler when you click the button in the toolbar
browser.browserAction.onClicked.addListener(toggleNightMode);