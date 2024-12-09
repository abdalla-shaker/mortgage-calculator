import calculations from "./calculations.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: calculations,
});

export default store;
