chrome.browserAction.onClicked.addListener(function (activeTab) {
    var url = activeTab.url;
    var start_pos = url.indexOf("//")+2;
    var protocol = url.slice(0,start_pos-1);
    var end_pos = url.indexOf("/",start_pos);
    var remaining = url.slice(end_pos);
    var mainUrl = url.slice(start_pos,end_pos);
    var newURL = protocol + mainUrl.replace(/\./g,"-") +  ".ezproxy.biblio.polito.it"+ remaining;
    chrome.tabs.create({url: newURL});
});
