window.onload = function() {
  console.log("onload" + Date());
  let submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('submit');
  });
  
}
