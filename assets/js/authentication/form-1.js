var togglePassword = document.getElementById("toggle-password");

if (togglePassword) {
	togglePassword.addEventListener('click', function() {
	  var x = document.getElementById("password");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	});
}


if (togglePassword) {
	togglePassword.addEventListener('click', function() {
	  var y = document.getElementById("Confirm Password");
	  if (y.type === "Confirm Password") {
	    y.type = "text";
	  } else {
	    y.type = " password";
	  }
	});
}
