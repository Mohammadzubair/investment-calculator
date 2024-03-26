import { PropTypes } from "prop-types";
import { calculateInvestmentResults, formatter } from "../../utils/investment";
import useInputField from "../../hook/useInputField";
import styles from "./InvestmentDataTable.module.scss";

const InvestmentDataTable = ({ value }) => {
  const results = calculateInvestmentResults(value);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  const { isValidValue } = useInputField();

  return (
    <>
      {isValidValue ? (
        <div className={styles.mainDataTableContainer}>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Interested Capital</th>
              </tr>
            </thead>
            <tbody>
              {results.map((dataItem) => {
                const totalInterest =
                  dataItem.valueEndOfYear -
                  dataItem.annualInvestment * dataItem.year -
                  initialInvestment;

                const totalAmountInvested =
                  dataItem.valueEndOfYear - totalInterest;
                return (
                  <tr key={dataItem.year}>
                    <td>{dataItem.year}</td>
                    <td>{formatter.format(dataItem.valueEndOfYear)}</td>
                    <td>{formatter.format(dataItem.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className={styles.errorMessage}>
          Please enter the value which is greater then zero.
        </p>
      )}
    </>
  );
};

export default InvestmentDataTable;

InvestmentDataTable.propTypes = {
  value: PropTypes.object,
};
