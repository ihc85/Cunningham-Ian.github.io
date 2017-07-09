var button;

window.addEventListener("load", function () {
//		document.getElementById("greeting").style.css = '';
});

document.getElementById("btn1").addEventListener("click", function() {
			// Create input box(es)
			button = document.getElementById("btn1");
			var input = document.createElement("INPUT");
			input.setAttribute("id", "input1");
			document.getElementById("location").appendChild(input);

			if (document.getElementById("lat,lon").checked) {
				var input2 = document.createElement("INPUT");
				input2.setAttribute("id", "input2");
				document.getElementById("location").appendChild(input2);
			} // else {
			//			  
			//			  }
//			document.removeChild;
});
			document.getElementById("btn2").addEventListener("click", function() {
				window.alert("2nd function");
				localStorage.setItem("input1", document.getElementById("input1").value);
				if (document.getElementById("input2")) {
					localStorage.setItem("input2", document.getElementById("input2".value));
				};

				var array1 = document.getElementsByName("search-option");
				/*
					For each radio button: if checked, store in local storage
				*/
				for (var i = 0; i < array1.length; i++) {
					if (array1[i].checked) {
						localStorage.setItem("option", array1[i].value);
						console.log(localStorage.getItem("option"));
						break;
					}
					else {
						continue;
					}
				}
			});

			//	button2.onclick(function() {
			//	document.getElementById("location").style.display = 'none';
			//	
			//});
