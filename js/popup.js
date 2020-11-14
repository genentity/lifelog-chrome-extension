window.onload = function() {
  document.querySelectorAll('form').forEach(form => form.addEventListener('submit', function(e){
    e.preventDefault();
    // TODO login and obtain token
	  
    // Set the token to chrome.storage 
    chrome.storage.sync.set({token: "test"}, function() {
      console.log('Value is set');
    });
    alert('a');
  }, false));
}

// Get History
var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
chrome.history.search({
    'text': '',
    'startTime': oneWeekAgo
  },
  function(historyItems) {
    console.log(historyItems);
    historyItems.forEach(h => {
      console.log(h);
      chrome.history.getVisits({url: h.url}, (v) => {
      	console.log(v);
      })
    });
  }
);
