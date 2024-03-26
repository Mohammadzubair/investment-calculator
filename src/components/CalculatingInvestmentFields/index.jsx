import InputField from "../InputField";
import useInputField from "../../hook/useInputField";
import styles from "./CalculatingInvestmentFields.module.scss";

const CalculatingInvestmentFields = () => {
  const { onchange: initialInvestmentHandler, value: initialInvestmentValue } =
    useInputField();

  const { onchange: annualInvestmentHandler, value: annualInvestmentValue } =
    useInputField();

  const { onchange: expectedReturnHandler, value: expectedReturnValue } =
    useInputField();

  const { onchange: durationHandler, value: durationValue } = useInputField();

  return (
    <div className={styles.inputFieldsWrapper}>
      <InputField
        value={initialInvestmentValue.initialInvestment}
        onChange={(event) =>
          initialInvestmentHandler("initialInvestment", event.target.value)
        }
        label="Initial Investment"
      />
      <InputField
        value={annualInvestmentValue.annualInvestment}
        onChange={(event) =>
          annualInvestmentHandler("annualInvestment", event.target.value)
        }
        label="Annual Investment"
      />
      <InputField
        value={expectedReturnValue.expectedReturn}
        onChange={(event) =>
          expectedReturnHandler("expectedReturn", event.target.value)
        }
        label="Expected Return"
      />
      <InputField
        value={durationValue.duration}
        onChange={(event) => durationHandler("duration", event.target.value)}
        label="Duration"
      />
    </div>
  );
};

export default CalculatingInvestmentFields;
