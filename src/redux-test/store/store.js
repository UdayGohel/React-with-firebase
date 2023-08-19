import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import employeeReducer from "./employeeReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    employee: employeeReducer,
  },
});

export default store;
