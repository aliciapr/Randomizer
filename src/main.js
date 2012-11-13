/**
 * @author alipé
 */

$(document).ready(function() {
	renderImage();

	createDiv();

	createInput("minValue");

	writeSpaces(5);

	createDisplay("displayer");

	writeSpaces(5);

	createInput("maxValue");

	createNewLine(2);

	createButton("button", "Generate!", onClickGenerate);

});

