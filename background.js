	/* This JS allows the user to activate dark mode on the Inshorts Story and Headline pages*/
	
	//The CSS to be loaded for dark mode
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

	/*
	The method checks for the Inshorts "Breaking News: Headlines" URL and the Inshorts "The story of a particular news" URL and allows the code to enable dark mode on these 2 conditions 
	*/
	function toggleNightMode(tab){
		var str = (tab.url).toString();
		if((str.localeCompare("https://www.inshorts.com/en/read")==0)||(str.substr(0,29).localeCompare("https://www.inshorts.com/news")==0)){
			if(enable){
				enableNightMode();
			}
			else{
				disableNightMode();
			}
		}
	}

	//event handler when you click the button in the toolbar
	browser.browserAction.onClicked.addListener(toggleNightMode);