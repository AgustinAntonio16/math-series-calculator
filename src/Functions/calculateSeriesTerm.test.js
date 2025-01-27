import { describe, it, expect } from "vitest";
import calculateSeriesTerm from "./calculateSeriesTerm";

describe("Funciones de series matemáticas", () => {
  // Prueba de la función para números primos
  it("Debe calcular correctamente el n-ésimo número primo", () => {
    const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    for (let i = 1; i <= 10; i++) {
      const { formula } = calculateSeriesTerm(i);
      const primeValue = parseInt(formula.match(/-3\((\d+)\)/)[1], 10);
      expect(primeValue).toBe(expectedPrimes[i - 1]);
    }
  });

  // Prueba de la función para Fibonacci
  it("Debe calcular correctamente el n-ésimo término de Fibonacci", () => {
    const expectedFibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    for (let i = 1; i <= 10; i++) {
      const { formula } = calculateSeriesTerm(i);
      const fibonacciValue = parseInt(formula.match(/- \((\d+)\)/)[1], 10);
      expect(fibonacciValue).toBe(expectedFibonacci[i - 1]);
    }
  });

  // Prueba de la función para números triangulares
  it("Debe calcular correctamente el n-ésimo número triangular", () => {
    const expectedTriangular = [3, 6, 10, 15, 21, 28, 36, 45, 55, 66];
    for (let i = 1; i <= 10; i++) {
      const { formula } = calculateSeriesTerm(i);
      const triangularValue = parseInt(formula.match(/\+ 5\((\d+)\)/)[1], 10);
      expect(triangularValue).toBe(expectedTriangular[i - 1]);
    }
  });

  // Prueba de la función general `calculateSeriesTerm`
  describe("Cálculo de la fórmula general", () => {
    it("Debe calcular correctamente el valor de la fórmula para los 10 primeros números naturales", () => {
      const expectedResults = [
        { result: 9, formula: "-3(2) - (0) + 5(3)" },
        { result: 20, formula: "-3(3) - (1) + 5(6)" },
        { result: 34, formula: "-3(5) - (1) + 5(10)" },
        { result: 52, formula: "-3(7) - (2) + 5(15)" },
        { result: 69, formula: "-3(11) - (3) + 5(21)" },
        { result: 96, formula: "-3(13) - (5) + 5(28)" },
        { result: 121, formula: "-3(17) - (8) + 5(36)" },
        { result: 155, formula: "-3(19) - (13) + 5(45)" },
        { result: 185, formula: "-3(23) - (21) + 5(55)" },
        { result: 209, formula: "-3(29) - (34) + 5(66)" },
      ];

      for (let i = 1; i <= 10; i++) {
        const { result, formula } = calculateSeriesTerm(i);
        expect(result).toBe(expectedResults[i - 1].result);
        expect(formula).toBe(expectedResults[i - 1].formula);
      }
    });
  });
});
