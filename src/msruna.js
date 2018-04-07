const reverse = (str) => str.split("").reverse().join("")

const minMay = (str) => {
	const length = str.length
	let translation = ""
	let capitalize = true

	for (let i = 0; i < length; i++ ) {
		const char = str.charAt(i)
		translation += capitalize ? char.toUpperCase() : char.toLowerCase()
		capitalize = !capitalize
	}

	return translation
}


export default function platzom (str) {
	let translation = str
	const length = translation.length
	//Si la palabra termina en "ar" se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith("ar")) {
		translation = str.slice(0, -2)
	}

	//si la palabra inicia con "z" se le añade "pe" al final
	if (str.toLowerCase().startsWith("z")) {
		translation += "pe"
	}

	//si la palabra tiene diez o más letras se debe partir a la mitad y separar con guión
	if (length >= 10) {
		const first_half = translation.slice(0, Math.round(length/2))
		const second_half = translation.slice(Math.round(length/2))

		translation = `${first_half}-${second_half}`
	}

	//si la palabra original es un palíndromo ninguna regla anterior cuenta
	//y se devuelve la palabra intercalando mayúsculas y minúsculas
	if (str == reverse(str)) {
		translation = minMay(str)
	}
	return translation
}