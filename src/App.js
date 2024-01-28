import { useEffect, useState } from "react";
import Home from "./components/Header/Home";
import Table from "./components/Table/Table";
import UserInput from "./components/UserInput/UserInput";

function App() {

  const [userInput,setUserInput]=useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = []; // per-year results

  if(userInput){
    
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Home/>

      <UserInput onCalculate={calculateHandler} />

      {!userInput && <p style={{textAlign:'center'}}>No Investment for Now</p>}
      {userInput && <Table data= {yearlyData} initial={userInput['current-savings']}/> }
      
    </div>
  );
}

export default App;