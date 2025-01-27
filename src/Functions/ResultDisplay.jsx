export default function ResultDisplay({ result }) {
  return (
    <div className="p-4 w-full max-w-md mx-auto mt-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold text-center text-gray-800">Resultado</h2>
      <p className="text-center text-lg mt-4 text-gray-700">
        {result !== null
          ? `El resultado de la serie es: ${result.result} \n Fórmula utilizada: ${result.formula}`
          : "Introduce un valor válido."}
      </p>
    </div>
  );
  }