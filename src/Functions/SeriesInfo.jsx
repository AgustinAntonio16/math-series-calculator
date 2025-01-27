import React from "react";
import Latex from "react-latex-next";
import calculateSeriesTerm from "./calculateSeriesTerm";

export default function SeriesInfo({ n }) {
  if (!n || n <= 0) return null;

  // Usar la función calculateSeriesTerm para obtener los valores
  const { result, formula } = calculateSeriesTerm(n);
  const primeValue = parseInt(formula.match(/-3\((\d+)\)/)[1], 10);
  const fibonacciValue = parseInt(formula.match(/- \((\d+)\)/)[1], 10);
  const triangularValue = parseInt(formula.match(/\+ 5\((\d+)\)/)[1], 10);

  // Crear solo el cálculo de la operación, eliminando la redundancia
  const resultFormula = `-3(${primeValue}) - (${fibonacciValue}) + 5(${triangularValue})`;

  return (
    <div className="p-4 w-full max-w-md mx-auto mt-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold text-center text-gray-800">Información de las Series</h2>
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Números Primos</h3>
          <p className="text-gray-600">El número primo en la posición {n} es {primeValue}.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Serie de Fibonacci</h3>
          <p className="text-gray-600">El término {n} de Fibonacci es {fibonacciValue}.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Números Triangulares</h3>
          <p className="text-gray-600">El término {n + 1} de la serie triangular es {triangularValue}.</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
