import { useState } from 'react'

import InputForm from "./Components/InputForm"
import SeriesInfo from "./Functions/SeriesInfo"
import ResultDisplay from "./Functions/ResultDisplay"
import calculateSeriesTerm from "./Functions/calculateSeriesTerm";

function App() {
  const [result, setResult] = useState(null);
  const [n, setN] = useState(null);

  const handleCalculation = (input) => {
    setN(input);
    const term = calculateSeriesTerm(input);
    setResult(term);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <InputForm onSubmit={handleCalculation} />
      <SeriesInfo n={n} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App
