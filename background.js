chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log(tabs)
  if(!/^chrome/.test(tabs[0].url)){
    chrome.tabs.executeScript(tabs[0].id,{file:"overlay.js"});
  }
});
