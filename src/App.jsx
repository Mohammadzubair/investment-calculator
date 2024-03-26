import TopHeading from "./components/TopHeading";
import InvestmentDataTable from "./components/InvestmentDataTable";
import CalculatingInvestmentFields from "./components/CalculatingInvestmentFields";
import useInputField from "./hook/useInputField";
import "./App.scss";

function App() {
  const { value } = useInputField();

  return (
    <div className="mainAppWrapper">
      <TopHeading />
      <CalculatingInvestmentFields />
      <InvestmentDataTable value={value} />
    </div>
  );
}

export default App;
