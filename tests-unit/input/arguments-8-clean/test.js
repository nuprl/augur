const a = 6;

// take factorial of both args, return the factorial of the second arg
function factorialOfSecondArg(firstNumber, secondNumber) {
    return second(factorial(arguments[0]), factorial(arguments[1]));
}

// return the second argument
function second(firstNumber, secondNumber) {
    return arguments[1];
}

// calculate the factorial of the given number
function factorial(x) {
    if (arguments[0] <= 1) {
        return 1;
    } else {
        return arguments[0] * factorial(arguments[0] - 1);
    }
}

// will return 5!
const z = factorialOfSecondArg(a, 5, 14);
