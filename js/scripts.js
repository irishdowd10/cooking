
///////////// Business Logic //////////////////////

var celToFar = function(number1){
	return number1 * 1.8 + 32;
}

var galToLiter = function(number1) {
  return number1 * 3.8;
}

var cupToTble = function(number1) {
  return number1 * 16;
}

var ozToCup = function(number1) {
  return number1 / 8;
}

var inchToCent = function(number1) {
  return number1 * 2.54;
}

var lbsToKg = function(number1) {
  return number1 * 0.45;
}

var pinchToTea = function(number1){
  return number1 * (1/12);
}

///////////////////// User Interface Logic //////////////////
$(document).ready(function() {
	$("form#formCel").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#celToFar").val());
		var result = celToFar(number1);
		$(".celToFar").text("Your conversion is: " + result + " F.");
	});

	$("form#formGal").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#galToLiter").val());
		var result = galToLiter(number1);
		$(".galToLiter").text("Your conversion is: " + result + " liters.");
	});

	$("form#formCup").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#cupToTble").val());
		var result = cupToTble(number1);
		$(".cupToTble").text("Your conversion is: " + result + " tablespoons.");
	});

	$("form#formOz").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#ozToCup").val());
		var result = ozToCup(number1);
		$(".ozToCup").text("Your conversion is: " + result + " cups.");
	});

	$("form#formInch").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#inchToCent").val());
		var result = inchToCent(number1);
		$(".inchToCent").text("Your conversion is: " + result + " centimeters.");
	});

	$("form#formLbs").submit(function(event) {		event.preventDefault();
		var number1 = parseInt($("#lbsToKg").val());
		var result = lbsToKg(number1);
		$(".lbsToKg").text("Your conversion is: " + result + " kilograms.");
	});

	$("form#formPinch").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#pinchToTea").val());
		var result = pinchToTea(number1);
		$(".pinchToTea").text("Your conversion is: " + result + " teaspoons.");
	});

});
