function createButton(id, label, func) {

	var button = document.createElement("input");
	//"button"
	button.type = "image";
	// button.class = 'generator'; //no funciona
	button.src = "icons/butt.png"

	button.name = id;
	button.value = label;
	button.onclick = func;
	$("#container").append(button);
	//instead of $(document.body).append(button);
	//document.body.appendChild(button);
}

function createInput(id) {

	var inputText = document.createElement("input");
	inputText.type = "text";

	// inputText.name = id;
	inputText.id = id;

	// set size:
	inputText.size = "6"

	$("#container").append(inputText);
}

function createDisplay(id) {

	var displayText = document.createElement("textarea");

	displayText.id = id;
	//.name
	displayText.disabled = "disabled";
	// por que displayText.readonly = "readonly" permite editar?

	// set size:
	displayText.cols = "6"
	displayText.rows = "1";
	displayText.style = "resize: none";
	//no funciona, tuve que usar el archivo CSS
	$("#container").append(displayText);
}

function validateInputs(min, max) {

	if (jQuery.isNumeric(min) && jQuery.isNumeric(max)) {
		//this method already checks if min and max are ""
		if (max < min) {
			alert(min + " cannot be bigger than " + max);
			/** $(".field").change(function(){
			 $(this).css("background-color","#D6D6FF");
			 }); */
			$("#minValue").css("color", "#C11B17");
			$("#minValue").css("background-color", "#800000");
			return false;
		}
		if (Math.floor(min) == min && Math.floor(max) == max)
			return true;
	} else {
		alert("Some value is blank or not integer");
		return false;
	}

}

function onClickGenerate() {//lanzar el verificador de valores
	/**Inicialmente, tenia esto:
	 * 	var min = retrieveValue("minValue");
	 *  var max = retrieveValue("maxValue");
	 * Pero se puede usar el $ directamente
	 */
	var min = Number($("#minValue").val());
	//This is JavaScript
	var max = Number($("#maxValue").val());

	var result;

	if (validateInputs(min, max)) {
		//restore previous value:
			$("#minValue").css("color", "");
			$("#minValue").css("background-color", "");
		result = generateNumber(min, max);
		writeResult(result);
	}
}

function generateNumber(min, max) {

	var ran = Math.random();
	var number = Math.floor(ran * (max - min));

	//aquí estaba el falli!! pero las variables no eran de cualquier tipo en javascrí?
	number += parseInt(min);
	return number;
}

function writeResult(num) {
	//en lugar de usar mi funcion setValue	$("#displayer").val(num);
	//no need for .val(String(num))

}

function createNewLine(n) {
	var i = 0;
	for (; i < n; i++)
		$("#container").append('<br/>');
	//por que funciona esto, y document.body.append('<br/>') no?
	//Creo que no entiendo la diferencia entre usar $ y no usarlo
}

function writeSpaces(n) {
	var i = 0;
	for (; i < n; i++) {
		$("#container").append('&nbsp;');
	}
}

function createDiv() {
	$(document.body).append('<div id="container"></div>');
}

function renderImage() {
	$(document.body).append('<img src="icons/randomnumb.png" alt="get a random number between..." />');
}

/**
 function retrieveValue(item) {
 var value = document.getElementsByName(item);
 return value[0].value;
 //no se si es muy bruto devolver el valor a pelo
 }
 function setValue(number) {
 var value = document.getElementsByName("textArea");
 value[0].value = number;
 }
 */
