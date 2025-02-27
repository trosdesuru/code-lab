/* FizzBuzz */

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let str = ''
        if (i % 3 === 0) str += 'Fizz'
        if (i % 5 === 0) str += 'Buzz'
        console.log(str || i)
    }
}

/* ***** Function Variable ***** */

function fizzBuzz(n) {
    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) console.log('FizzBuzz')
        else if (i % 3 === 0) console.log('Fizz')
        else if (i % 5 === 0) console.log('Buzz')
        else console.log(i)
    }
}

/* ***** Function variable ***** */

function ft_fizzBuzz(n) {
    return Array.from({ length: n }, (_, i) => {
        let x = i + 1
        return (x % 15 === 0 ? 'FizzBuzz' : x % 3 === 0 ? 'Fizz' : x % 5 === 0 ? 'Buzz' : x)
    })
}