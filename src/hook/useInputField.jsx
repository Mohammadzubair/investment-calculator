import { useState } from "react";

const useInputField = () => {
  const [value, setValue] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidValue = () => {
    return (
      value.initialInvestment >= 0,
      value.annualInvestment >= 0,
      value.expectedReturn >= 0,
      value.duration >= 1
    );
  };

  const handleChange = (inputIdentifier, newValue) => {
    setValue((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return { value, onchange: handleChange, isValidValue };
};

export default useInputField;
