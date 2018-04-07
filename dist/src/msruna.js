"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
var reverse = function reverse(str) {
	return str.split("").reverse().join("");
};

var minMay = function minMay(str) {
	var length = str.length;
	var translation = "";
	var capitalize = true;

	for (var i = 0; i < length; i++) {
		var char = str.charAt(i);
		translation += capitalize ? char.toUpperCase() : char.toLowerCase();
		capitalize = !capitalize;
	}

	return translation;
};

function platzom(str) {
	var translation = str;
	var length = translation.length;
	//Si la palabra termina en "ar" se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith("ar")) {
		translation = str.slice(0, -2);
	}

	//si la palabra inicia con "z" se le añade "pe" al final
	if (str.toLowerCase().startsWith("z")) {
		translation += "pe";
	}

	//si la palabra tiene diez o más letras se debe partir a la mitad y separar con guión
	if (length >= 10) {
		var first_half = translation.slice(0, Math.round(length / 2));
		var second_half = translation.slice(Math.round(length / 2));

		translation = first_half + "-" + second_half;
	}

	//si la palabra original es un palíndromo ninguna regla anterior cuenta
	//y se devuelve la palabra intercalando mayúsculas y minúsculas
	if (str == reverse(str)) {
		translation = minMay(str);
	}
	return translation;
}