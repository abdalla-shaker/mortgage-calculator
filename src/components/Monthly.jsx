import { formatter } from "../currencyFormatter.js";

const Monthly = ({ mortgageType, monthlyPayment, monthlyInterestPayment }) => {
  return (
    <div className="monthly">
      <p>Your monthly repayments</p>
      <h3>
        {mortgageType === "repayment"
          ? formatter.format(monthlyPayment.toFixed(2))
          : formatter.format(monthlyInterestPayment.toFixed(2))}
      </h3>
    </div>
  );
};

export default Monthly;
