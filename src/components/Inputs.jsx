import Form from "./Form.jsx";
import { useDispatch } from "react-redux";
import { calculationActions } from "../store/calculations.js";
import { useState } from "react";

const Inputs = () => {
  const [isError, setIsError] = useState({
    status: false,
    termHasError: {
      amount: false,
      term: false,
      rate: false,
      mortgageType: false,
    },
  });
  const dispatch = useDispatch();

  const values = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);

    const data = Object.fromEntries(fd.entries());

    if (data.amount === "") {
      setIsError((prevState) => {
        const errorState = { ...prevState };
        errorState.termHasError = { ...prevState.termHasError };
        errorState.status = true;
        errorState.termHasError = { ...errorState.termHasError, amount: true };
        return errorState;
      });
    }

    if (data.term === "") {
      setIsError((prevState) => {
        const errorState = { ...prevState };
        errorState.termHasError = { ...prevState.termHasError };
        errorState.status = true;
        errorState.termHasError = { ...errorState.termHasError, term: true };
        return errorState;
      });
    }

    if (data.rate === "") {
      setIsError((prevState) => {
        const errorState = { ...prevState };
        errorState.termHasError = { ...prevState.termHasError };
        errorState.status = true;
        errorState.termHasError = { ...errorState.termHasError, rate: true };
        return errorState;
      });
    }

    if (!data.mortgageType) {
      setIsError((prevState) => {
        const errorState = { ...prevState };
        errorState.termHasError = { ...prevState.termHasError };
        errorState.status = true;
        errorState.termHasError = {
          ...errorState.termHasError,
          mortgageType: true,
        };
        return errorState;
      });
    }

    if (
      data.amount === "" ||
      data.term === "" ||
      data.rate === "" ||
      !data.mortgageType
    ) {
      return;
    }

    setIsError({
      status: false,
      termHasError: {
        amount: false,
        term: false,
        rate: false,
        mortgageType: false,
      },
    });

    if (data.mortgageType === "repayment") {
      dispatch(calculationActions.calculateRepayment(data));
      return;
    }

    if (data.mortgageType === "interestOnly") {
      dispatch(calculationActions.calculateInterestOnly(data));
      return;
    }
  };

  const resetHandler = () => {
    dispatch(calculationActions.reset());
  };

  return (
    <section className="user-inputs">
      <form onSubmit={values}>
        <header className="header">
          <h1 className="title">Mortgage Calculator</h1>
          <button className="clear-btn" type="reset" onClick={resetHandler}>
            Clear All
          </button>
        </header>

        <Form isError={isError} />
      </form>
    </section>
  );
};

export default Inputs;
