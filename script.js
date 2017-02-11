var doc=document;
doc.body.style.backgroundColor="black";

function makeHeadlinesWhiteAgain(){
	var spanTags=doc.getElementsByTagName("span");
	var spanLen=spanTags.length;
	for (var i = 0; i < spanLen; i++){
		if(spanTags[i].getAttribute("itemprop")=="headline")
			spanTags[i].style.color="white";
	}
}

function makeNewsWhiteAgain(){
	var divTags=doc.getElementsByTagName("div");
	var divLen=divTags.length;
	for (var i = 0; i < divLen; i++){
		if(divTags[i].getAttribute("itemprop")=="articleBody")
			divTags[i].style.color="white";
	}
}

function makeLoadmoreButtonRedAgain(){
	console.log("makeLoadmoreButtonRedAgain");
	var loadMoreButton=doc.getElementById("load-more-btn");
	loadMoreButton.style.backgroundColor="red";
	loadMoreButton.style.color="white";
}

makeLoadmoreButtonRedAgain();
makeHeadlinesWhiteAgain();
makeNewsWhiteAgain();

var observer = new MutationObserver(onDocumentChange);
var config = { attributes: false, childList: true,
               characterData: true, subtree: true };
var docu = doc.querySelector("div.card-stack");
observer.observe(docu, config);

function onDocumentChange(){
	makeHeadlinesWhiteAgain();
	makeNewsWhiteAgain();
}