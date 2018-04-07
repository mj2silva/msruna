# Msruna

Msruna es un idioma generado que fue creado con el objetivo de aplicar los [fundamentos de JavaScript](https://platzi.com/js)

## Descripción del idioma

- Si la palabra termina en "ar" se le quitan esos dos caracteres
- Si la palabra inicia con "z" se le añade "pe" al final
- Si la palabra tiene diez o más letras se debe partir a la mitad y separar con guión
- Si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve la palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install msruna
```

## Uso

```
import platzom from 'msruna'

platzom("programar") // program
platzom("Zorro") // zorrope
platzom("zarpar") // zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") //SoMeTeMoS
reverse("manuel")
```

## Autor
- [Manuel Silva](https://twitter.com/manuelsilvag1)

## Licencia
[MIT](https://opensource.org/licenses/MIT)