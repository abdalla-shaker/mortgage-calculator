import { formatter } from "../currencyFormatter.js";
const Yearly = ({ mortgageType, totalRepayment }) => {
  return (
    <div className="yearly">
      <p>Total you&apos;ll repay over the term</p>
      <h3>{mortgageType && formatter.format(totalRepayment.toFixed(2))}</h3>
    </div>
  );
};

export default Yearly;
