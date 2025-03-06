/* FizzBuzz Function. */

/**
 * @param {number} n - El número hasta el cual contar (inclusive).
 * Imprime en consola los resultados según las reglas de FizzBuzz:
 * - "Fizz" para múltiplos de 3.
 * - "Buzz" para múltiplos de 5.
 * - "FizzBuzz" para múltiplos de 15.
 * - El resto de números los imprime por pantalla sin variaciones.
 **/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

export default fizzBuzz
