import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    salary: 100000,
    name: "Uday Chopra",
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = employeeSlice.actions;

export default employeeSlice.reducer;
