export default function calculateSeriesTerm(n) {
  if (n <= 0) return null;

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const prime = (nth) => {
    let count = 0;
    let num = 2;
    while (true) {
      if (isPrime(num)) {
        count++;
        if (count === nth) return num;
      }
      num++;
    }
  };

  const fibonacci = (nth) => {
    if (nth === 1) return 0;
    if (nth === 2) return 1;
    let a = 0,
      b = 1;
    for (let i = 3; i <= nth; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };

  const triangular = (nth) => (nth * (nth + 1)) / 2;

  const primeValue = prime(n);
  const fibonacciValue = fibonacci(n);
  const triangularValue = triangular(n + 1);
  const result = -3 * primeValue - fibonacciValue + 5 * triangularValue;

  return {
    result,
    formula: `-3(${primeValue}) - (${fibonacciValue}) + 5(${triangularValue})`,
  };
}
