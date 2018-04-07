const expect = require('chai').expect
const platzom = require('..').default

describe('#msruna', function () {
	it('Si la palabra termina en "ar" se le quitan esos dos caracteres', function () {
		const translation = platzom("programar")
		expect(translation).to.equal("program")
	})
})

describe('#msruna', function () {
	it('Si la palabra inicia con "z" se le añade "pe" al final', function () {
		const translation = platzom("zorro")
		expect(translation).to.equal("zorrope")

		const translation2 = platzom("zarpar")
		expect(translation2).to.equal("zarppe")
	})
})

describe('#msruna', function () {
	it('Si la palabra tiene diez o más letras se debe partir a la mitad y separar con guión', function () {
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})
})

describe('#msruna', function () {
	it('Si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve la palabra intercalando mayúsculas y minúsculas', function () {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})