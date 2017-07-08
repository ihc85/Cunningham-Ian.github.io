var button;

window.onload({
	//	document.getElementById("greeting").style.css = '';

	button = document.getElementById("btn1").onclick(function() {
		// Create input box(es)

		var input = document.createElement("INPUT");
		input.setAttribute("id", "input1");
		document.getElementById("location").appendChild(input);

		if (document.getElementById("lat,lon").checked) {
			var input2 = document.createElement("INPUT");
			input2.setAttribute("id", "input2");
			document.getElementById("location").appendChild(input2);

			button.setAttribute("id", "btn2");
		} // else {
//			  
//			  }
			  
		}
		//	button.setAttribute("id", "btn2");
		});

		document.getElementById("btn2").onclick(function() {
			localStorage.setItem("input1", document.getElementById("input1").value);
			if(document.getElementById("input2").value) {
				localStorage.setItem("input2", document.getElementById("input2".value));
		};
			
			var array1 = document.getElementsByName("search-option");
			/*
				For each radio button: if checked, store in local storage
			*/
for (var i = 0; i < array1.length; i++) {
	if	(array1[i].checked) {
		localStorage.setItem("option", array1[i].value);
		console.log(localStorage.getItem("option"));
		break;
	}
	}
		});

//	button2.onclick(function() {
	//	document.getElementById("location").style.display = 'none';
	//	
	//});
