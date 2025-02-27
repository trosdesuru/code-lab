/* File: FizzBuzz.js */
/* Date: 09/20/2020 */
/* Author: Eduard H. */
/* Description: FizzBuzz Algorithm & Variables */

/**********************************/
/* ***** FizzBuzz Algorithm ***** */
/**********************************/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let str = ''
        if (i % 3 === 0) str += 'Fizz'
        if (i % 5 === 0) str += 'Buzz'
        console.log(str || i)
    }
}

/*********************************/
/* ***** FizzBuzz Variable ***** */
/*********************************/

function fizzBuzz_var01(n) {
    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) console.log('FizzBuzz')
        else if (i % 3 === 0) console.log('Fizz')
        else if (i % 5 === 0) console.log('Buzz')
        else console.log(i)
    }
}

/*********************************/
/* ***** FizzBuzz variable ***** */
/*********************************/

function fizzBuzz_var02(n) {
    return Array.from({ length: n }, (_, i) => {
        let x = i + 1
        return (x % 15 === 0 ? 'FizzBuzz' : x % 3 === 0 ? 'Fizz' : x % 5 === 0 ? 'Buzz' : x)
    })
}

/*********************************/
/* ***** FizzBuzz variable ***** */
/*********************************/