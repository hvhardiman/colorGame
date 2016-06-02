var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "#232323"
	for(var i = 0;i<squares.length; i++){
	squares[i].style.background = colors[i];
	}
	resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(var i = 0;i<squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		if(this.style.background === pickedColor){
			messageDisplay.textContent = "Correct";
			h1.style.background = this.style.background; 
			changeColors(this.style.background);
			resetButton.textContent = "Play Again?";

		}else{
			this.style.background = "#232323"; 
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr[i] = "rgb("+ Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")"  
	}
	return arr;
}

