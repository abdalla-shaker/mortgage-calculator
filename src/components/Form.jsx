import Input from "../utils/Input.jsx";
import Radio from "../utils/Radio.jsx";
import Button from "../utils/Button.jsx";

const Form = ({ isError }) => {
  console.log(isError);

  return (
    <div>
      <div className="input-field input-field-1">
        <Input
          label="Mortgage Amount"
          labelSign="£"
          id="amount"
          name="amount"
          hasError={isError.status && isError.termHasError.amount && isError}
        />
      </div>

      <div className="input-field input-field-2">
        <Input
          label="Mortgage Term"
          labelSign="years"
          id="term"
          name="term"
          hasError={isError.status && isError.termHasError.term && isError}
          reversed
        />

        <Input
          label="Mortgage Rate"
          labelSign="%"
          id="Rate"
          name="rate"
          hasError={isError.status && isError.termHasError.rate && isError}
          reversed
        />
      </div>

      <div className="input-field input-field-1 last-field">
        <label htmlFor="repayment" className="input-label">
          Mortgage type
        </label>

        <Radio
          name="mortgageType"
          id="repayment"
          value="repayment"
          label="Repayment"
        />

        <Radio
          name="mortgageType"
          id="interest-only"
          value="interestOnly"
          label="Interest Only"
        />

        {isError && isError.status && isError.termHasError.mortgageType && (
          <p className="error-text special-error">This field is required</p>
        )}
      </div>

      <Button />
    </div>
  );
};

export default Form;
