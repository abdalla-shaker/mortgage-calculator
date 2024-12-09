import { useSelector } from "react-redux";
import Monthly from "./Monthly.jsx";
import Yearly from "./Yearly.jsx";

const HasResults = () => {
  const calculatedValues = useSelector((state) => state.calculatedValues);
  const mortgageType = useSelector((state) => state.type);

  return (
    <section className="results common-results-styles">
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayments&quot; again.
      </p>
      <div className="results-container">
        <Monthly
          mortgageType={mortgageType}
          monthlyPayment={calculatedValues.monthlyPayment}
          monthlyInterestPayment={calculatedValues.monthlyInterestPayment}
        />
        <Yearly
          mortgageType={mortgageType}
          totalRepayment={calculatedValues.totalRepayment}
        />
      </div>
    </section>
  );
};

export default HasResults;
