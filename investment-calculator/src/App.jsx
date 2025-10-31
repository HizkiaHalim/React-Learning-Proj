import { useState } from "react"
import InputArea from "./components/InputArea"
import ResultTable from "./components/ResultTable"

function App() {

  const [currInvestment, setCurrInvestment] = useState(
    {
      "Initial Investment": 15000,
      "Annual Investment": 1200,
      "Expected Result": 6,
      "Duration": 10
    }
  );

  const validDuration = currInvestment.Duration >= 1;

  function handleInvestmentChange(param, value) {
    setCurrInvestment(prevInv => {
      return {
        ...prevInv,
        [param]: +value
      }
    });
  }

  return (
    <main>
      <InputArea onDataChange={handleInvestmentChange} investmentData={currInvestment} />
      {!validDuration && <p className="center">Please set duration to at least 1</p>}
      {validDuration && <ResultTable investmentData={currInvestment} /> }
    </main>
  )
}

export default App
