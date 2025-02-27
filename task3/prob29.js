
// Problem:29

// Print the first 100 prime numbers
// printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
    let n = 0;
    let i = 2;

    while (n < nPrimes) {
        if (isPrime(i)) {
            console.log(n + 1, " → ", i);
            n++;
        }
        i++;
    }
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

printPrimes(10);

