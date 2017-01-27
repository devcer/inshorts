function changeBackground(){
	console.log("clicked");
	document.body.style.backgroundColor="white";
}
browser.browserAction.onClicked.addListener(changeBackground);