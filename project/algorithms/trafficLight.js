/* TrafficLight function. */

/**
 * @param {string} current - El color actual del semáforo.
 * @returns {string} - El siguiente color del semáforo según el ciclo: 'red' → 'green' → 'yellow' → 'red'.
 * 
 * La función recibe el color actual del semáforo y devuelve el siguiente color en el ciclo de tráfico:
 * - Si el color es 'red', devuelve 'green'.
 * - Si el color es 'green', devuelve 'yellow'.
 * - Si el color es 'yellow', devuelve 'red'.
 **/

function trafficLight(current) {
    return current === 'red' ? 'green' : current === 'green' ? 'yellow' : 'red'
}

export default trafficLight