import { createSlice } from "@reduxjs/toolkit";

const calculationsInitialState = { calculatedValues: {}, type: null };

const calculationSlices = createSlice({
  name: "calculations",
  initialState: calculationsInitialState,
  reducers: {
    calculateRepayment(state, actions) {
      const principal = actions.payload.amount;
      const monthlyInterestRate = actions.payload.rate / 100 / 12;
      const numberOfPayments = actions.payload.term * 12;

      const monthlyPayment =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      const totalRepayment = monthlyPayment * actions.payload.term * 12;

      state.calculatedValues = { monthlyPayment, totalRepayment };
      state.type = "repayment";
    },

    calculateInterestOnly(state, actions) {
      const principal = actions.payload.amount;
      const annualInterestRate = actions.payload.rate / 100;
      const monthlyInterestPayment = (principal * annualInterestRate) / 12;

      const totalRepayment = monthlyInterestPayment * actions.payload.term * 12;

      state.calculatedValues = { monthlyInterestPayment, totalRepayment };
      state.type = "interestOnly";
    },

    reset(state) {
      state.calculatedValues = {};
      state.type = null;
    },
  },
});

export default calculationSlices.reducer;
export const calculationActions = calculationSlices.actions;
