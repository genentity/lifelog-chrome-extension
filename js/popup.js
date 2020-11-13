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
