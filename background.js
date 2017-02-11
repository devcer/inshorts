var CSS='body{background-color: black;}span[itemprop="headline"]{color:white;}div[itemprop="articleBody"]{color:white;} #load-more-btn{background-color:red;color:white;}'
var enable=true;
//method to enable nightmode
function enableNightMode(tab) {
	console.log("enableNightMode");
	browser.tabs.insertCSS({code: CSS});
	enable=false;
}

//method to disable nightmode
function disableNightMode(tab){
	console.log("disableNightMode");
	browser.tabs.removeCSS({code: CSS});
	enable=true;
}

//method to toggle mode
function toggleNightMode(tab){
	console.log("toggleNightMode");
	if(tab.url.indexOf("www.inshorts.com/en/read")!=-1){
		if(enable){
			enableNightMode(tab);
		}else{
			disableNightMode(tab);
		}
	}
}

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
	if(tab.url.indexOf("www.inshorts.com/en/read")!=-1){
		disableNightMode(tab);
	}
});

browser.browserAction.onClicked.addListener(toggleNightMode);