import React, { useState } from "react";
import { create, all } from "mathjs";
import imageSerie from "../assets/Serie.png";

const math = create(all);

// Componente 1: Formulario para introducir el número n
function InputForm({ onSubmit }) {
  const [n, setN] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit && typeof onSubmit === "function") {
      onSubmit(parseInt(n, 10));
    } else {
      console.error("onSubmit no es una función válida.");
    }
  };

  return (
    <div className="p-4 w-full max-w-md mx-auto mt-10 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold text-center text-gray-800">Cálculo de Series Matemáticas</h2>
      <p className="text-center text-gray-600 mt-2">
        Este programa calcula el valor del término n de una fórmula combinada basada en tres series: números primos, serie de Fibonacci y números triangulares.
      </p>
      <div className="flex justify-center mt-4">
        <img src={imageSerie} alt="Serie matemática" className="max-w-full h-auto rounded" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <label htmlFor="n" className="block text-lg font-medium text-gray-700">
          Introduce un número natural (n):
        </label>
        <input
          id="n"
          type="number"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={n}
          onChange={(e) => setN(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
export default InputForm;