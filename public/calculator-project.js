
var firstInput=document.getElementById("firstInput");
var opInput=document.getElementById("opInput");
var lastInput=document.getElementById("lastInput");
var number=document.getElementsByClassName("number");
var operator=document.getElementsByClassName("operator");
var clear=document.getElementById("Clr");
var equal=document.getElementById("Eql");
// var decimal=document.getElementById("Dcml");

for(var i = 0; i < number.length; i++) {
	number[i].addEventListener("click", buttonHandler);
}
for(var i = 0; i < operator.length; i++) {
	operator[i].addEventListener("click", buttonHandler);
}

function buttonHandler() {
	console.log(this.value);
	if(this.className.includes("operator")) {
		opInput.setAttribute("value", this.value);
	} else if(opInput.value!="" && firstInput.value!="") {
		var numberDisplay=lastInput.getAttribute("value");
		numberDisplay+=this.innerText;
		lastInput.setAttribute("value", numberDisplay);

	} else if(this.className.includes("number")) {
		var numberDisplay=firstInput.getAttribute("value");
		numberDisplay+=this.innerText;
		firstInput.setAttribute("value", numberDisplay);	
	}
}

// decimal.addEventListener("click", function() {
// 	firstInput.setAttribute("value", ".");
// 	lastInput.setAttribute("value", ".");
// });

clear.addEventListener("click", function() {
	firstInput.setAttribute("value", "");
	opInput.setAttribute("value", "");
	lastInput.setAttribute("value", "");
});

equal.addEventListener("click", function() {
		var firstInputNumber=parseInt(firstInput.value);
		var lastInputNumber=parseInt(lastInput.value);
		var answer;

		switch (opInput.value) {
			case "+": 
			answer=firstInputNumber+lastInputNumber;
			break;
			case "-":
			answer=firstInputNumber-lastInputNumber;
			break;
			case "*":
			answer=firstInputNumber*lastInputNumber;
			break;
			case "/":
			answer=firstInputNumber/lastInputNumber;
			break;


		}
		firstInput.setAttribute("value", answer);
		lastInput.setAttribute("value", "");

});

