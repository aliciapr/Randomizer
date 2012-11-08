/**
 * @author alipé
 */

$(document).ready(function() {

	createInput("minValue");

	createDisplay("displayer");

	createInput("maxValue");

	$(document.body).append('<br/>');
	$(document.body).append('<br/>');
	//por que funciona esto, y document.body.append('<br/>') no?
	//Creo que no entiendo la diferencia entre usar $ y no usarlo


	createButton("button", "Generate!", onClickGenerate);

});

