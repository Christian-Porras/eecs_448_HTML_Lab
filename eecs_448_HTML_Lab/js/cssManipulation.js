function changeValues(){
  alert("test 1");
  var redBorder = document.getElementById("borderRed").value;
  var blueBorder = document.getElementById("borderBlue").value;
  var greenBorder = document.getElementById("borderGreen").value;


  var border = document.getElementById("Paragraph");
  var newBorder = "rgb("+redBorder+","+blueBorder+","+greenBorder+")"
  border.style.borderColor = newBorder;

  var widthBorder = document.getElementById('borderWidth').value;
  border.style.borderWidth = widthBorder+"px";


  var redBG = document.getElementById("backgroundRed").value;
  var blueBG = document.getElementById("backgroundBlue").value;
  var greenBG = document.getElementById("backgroundGreen").value;
  var background = document.getElementById("Paragraph");
  var newColor = "rgb("+redBG+","+blueBG+","+greenBG+")";
  background.style.backgroundColor = newColor;
  //background.style.backgroundColor = "red";
}
