chrome.storage.sync.get(['token'], function(result) {
  console.log('Value currently is ' + result.token);
  // TODO Use toekn to POST server with current page 
  console.log(window.location.href);
  // TODO Generate bottons dynamically

  // Set events to the buttons
  let feedbackButtons = document.getElementsByClassName("genentity-feedback-btn")
  for(var i = 0; i < feedbackButtons.length; i++) {
    (function(index) {
      feedbackButtons[index].addEventListener("click", function() {
        console.log("Clicked index: " + index);
	console.log(this.getAttribute('data-feedback'));
     })
  })(i);
}

});

// check all storage
//chrome.storage.sync.get(null, function callback(items) { console.log(items) });


document.body.innerHTML += "<div id='overlay'><button class='genentity-feedback-btn' data-feedback='not relevant'>back</button></div>";


