// Problem:30

function getPrimes(nPrimes, startAt) {
    let primes = [];
    let i = startAt + 1;

    while (primes.length < nPrimes) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }

    return primes;
}

// Returns true if a number is prime
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

console.log(getPrimes(10, 100));
