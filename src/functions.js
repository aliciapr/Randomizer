function createButton(id, label, func) {

	var button = document.createElement("input");
	//"button"
	button.type = "image";
	// button.class = 'generator'; //no funciona
	button.src = "icons/butt.png"

	button.name = id;
	button.value = label;
	button.onclick = func;
	$(document.body).append(button);
	//document.body.appendChild(button);

}

function createInput(id) {

	var inputText = document.createElement("input");
	inputText.type = "text";

	// inputText.name = id;
	inputText.id = id;

	// set size:
	inputText.size = "6"

	$(document.body).append(inputText);
	//document.body.appendChild(inputText);
}

function createDisplay(id) {

	var displayText = document.createElement("textarea");

	displayText.name = id;
	displayText.disabled = "disabled";
	// por que displayText.readonly = "readonly" permite editar?

	// set size:
	displayText.cols = "6"
	displayText.rows = "1";
	displayText.style = "resize: none";
	//no funciona, tuve que usar el archivo CSS
	$(document.body).append(displayText);
	//document.body.appendChild(displayText);
}

function validateInputs(min, max) {

	if (jQuery.isNumeric(min) && jQuery.isNumeric(max)) {
		//this method already checks if min and max are ""
		if (max < min) {
			alert(min + " cannot be bigger than " + max);
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
	var min = $("#minValue").val();
	var max = $("#maxValue").val();

	if (validateInputs(min, max)) {
		generateNumber(min, max);
	}
}

function generateNumber(min, max) {

	var ran = Math.random();
	var number = Math.floor(ran * (max - min));

	//aquí estaba el falli!! pero las variables no eran de cualquier tipo en javascrí?
	number += parseInt(min);
	alert(number);
	// $(textarea[ name = "displayer"]) = number;
	//en lugar de usar mi funcion setValue
}

function createSpaces() {

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
