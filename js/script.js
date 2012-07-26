// When ready...
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});


$(document).ready(function() {
  // Handler for .ready() called.

  if(localStorage.getItem('checkLogin') == null){
  	//alert(localStorage.getItem('checkLogin'));
  	localStorage.setItem('checkLogin', 'visited');
  	window.location = 'index.html#splash';

  } else if (localStorage.getItem('checkLogin') !== null){
  	//alert(localStorage.getItem('checkLogin'));
  	window.location = 'index.html#why';
  }
});