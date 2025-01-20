function outerFunction() {
    let outerVariable = "I am from outer function";

    // inner function access outer function's variable
    function innerFunction() {
        console.log(outerVariable); // Closure
    }

    return innerFunction;
}

let closureExample = outerFunction();
closureExample(); // "I am from outer function"

function counter() {
    let count = 0;  // 'count' is a local variable of the outer function

    return function() {
        count++;  // Inner function can access and modify the 'count'
        console.log(count);
    };
}

let countUp = counter();  // 'countUp' now holds the inner function

countUp(); // 1
countUp(); // 2
countUp(); // 3