/* Reverse Function. */

/**
 * @param {string} string - La cadena de texto a invertir.
 * @returns {string} - La misma cadena con las palabras en orden inverso.
 * 
 * Divide la cadena en palabras usando los espacios como separadores,
 * invierte el orden de las palabras y las une nuevamente en una sola cadena.
 **/

function reverse(string) {
    return string.split(' ').reverse().join(' ')
}

export default reverse