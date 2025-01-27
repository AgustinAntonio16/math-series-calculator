export default function SeriesInfo({ n }) {
    if (!n || n <= 0) return null;
  
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
  
    const isPrime = (num) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
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
  
    return (
      <div className="p-4 w-full max-w-md mx-auto mt-6 bg-white shadow rounded-lg">
        <h2 className="text-xl font-bold text-center text-gray-800">Información de las Series</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Números Primos</h3>
            <p className="text-gray-600">El número primo en la posición {n} es {prime(n)}.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Serie de Fibonacci</h3>
            <p className="text-gray-600">El término {n} de Fibonacci es {fibonacci(n)}.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Números Triangulares</h3>
            <p className="text-gray-600">El término {n} de la serie triangular es {triangular(n)}.</p>
          </div>
        </div>
      </div>
    );
  }
  