import React from "react";
import Latex from "react-latex-next";

export default function ResultDisplay({ result }) {
  return (
    <div className="p-4 w-full max-w-md mx-auto mt-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold text-center text-gray-800">Resultado</h2>
      <p className="text-center text-lg mt-4 text-gray-700">
        {result !== null
          ? (
              <>
                <p>El resultado de la serie es: {result.result}</p>
                <p>Fórmula utilizada: <Latex>{`$${result.formula}$`}</Latex></p>
              </>
            )
          : "Introduce un valor válido."}
      </p>
    </div>
  );
}
